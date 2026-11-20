// Instant client-side Maintenance Mode guard for docs.ptview.app
// Polls https://pay.ptview.app/api/v1/site-status and renders the bilingual maintenance view immediately when docsPaused is true.

const SITE_STATUS_ENDPOINT = 'https://pay.ptview.app/api/v1/site-status';
const OVERLAY_ID = 'ptview-docs-maintenance-overlay';
let isDocsMaintenanceActive = false;
let currentCheckPromise = null;

function isLocalHost() {
  try {
    if (typeof window === 'undefined') return true;
    const host = window.location?.hostname || '';
    const params = new URLSearchParams(window.location.search);
    if (params.get('previewMaint') === '1') return false;
    return host === 'localhost' || host === '127.0.0.1' || host === '::1' || window.location?.protocol === 'file:';
  } catch {
    return false;
  }
}

function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function detectInitialLang() {
  try {
    const path = window.location?.pathname || '/';
    const params = new URLSearchParams(window.location.search);
    const navLang = (navigator.language || '').toLowerCase();
    if (path === '/vi' || path.startsWith('/vi/') || params.get('lang') === 'vi' || navLang.startsWith('vi')) {
      return 'vi';
    }
  } catch {
    // Default to English
  }
  return 'en';
}

function removeMaintenanceOverlay() {
  if (typeof document === 'undefined') return;
  const existing = document.getElementById(OVERLAY_ID);
  if (existing) {
    existing.remove();
  }
  if (document.documentElement) {
    document.documentElement.style.overflow = '';
  }
  isDocsMaintenanceActive = false;
  if (typeof window !== 'undefined') {
    window.__PTVIEW_DOCS_PAUSED__ = false;
  }
}

function toggleDocsLocaleElements(visible) {
  if (typeof document === 'undefined') return;
  document.querySelectorAll('.navbar__item.dropdown, .menu__list-item').forEach((container) => {
    const hasViLink = Boolean(container.querySelector('a[href="/vi"], a[href^="/vi/"]'));
    if (!hasViLink) return;
    if (!visible) {
      container.style.display = 'none';
      container.setAttribute('data-ptv-vi-hidden', '1');
    } else if (container.getAttribute('data-ptv-vi-hidden') === '1') {
      container.style.display = '';
      container.removeAttribute('data-ptv-vi-hidden');
    }
  });
}

function applyDocsLanguagePolicy(viEnabledOnDocs) {
  if (typeof document === 'undefined' || typeof window === 'undefined') return false;
  if (!viEnabledOnDocs) {
    document.documentElement.setAttribute('data-ptview-vi-disabled', 'true');
    toggleDocsLocaleElements(false);

    const pathname = window.location?.pathname || '/';
    if (pathname === '/vi' || pathname.startsWith('/vi/')) {
      const enPath = pathname.replace(/^\/vi(?=\/|$)/, '') || '/';
      window.location.replace(enPath + (window.location.search || '') + (window.location.hash || ''));
      return true;
    }
    return false;
  }

  document.documentElement.removeAttribute('data-ptview-vi-disabled');
  toggleDocsLocaleElements(true);
  return false;
}

function renderMaintenanceOverlay(note, viEnabledOnDocs = true) {
  if (typeof document === 'undefined') return;
  if (!document.body) {
    document.addEventListener('DOMContentLoaded', () => renderMaintenanceOverlay(note, viEnabledOnDocs), { once: true });
    return;
  }
  isDocsMaintenanceActive = true;
  if (typeof window !== 'undefined') {
    window.__PTVIEW_DOCS_PAUSED__ = true;
  }

  const lang = viEnabledOnDocs ? detectInitialLang() : 'en';
  const isVi = viEnabledOnDocs && lang === 'vi';
  const copy = {
    en: {
      title: 'PtView Docs — Scheduled Maintenance',
      pill: 'Scheduled Maintenance',
      heading: 'Documentation Portal Is Temporarily Offline',
      primary:
        'The PtView Workstation documentation portal (docs.ptview.app) is currently undergoing scheduled maintenance and operational updates. Please check back later.',
      secondary:
        'Cổng tài liệu hướng dẫn PtView Workstation (docs.ptview.app) hiện đang tạm đóng để bảo trì và cập nhật vận hành. Vui lòng quay lại sau.',
      cta: 'Contact Support (support@ptview.app)',
      footer: '© 2026 PtView · Support: support@ptview.app'
    },
    vi: {
      title: 'PtView Docs — Đang Tạm Ngưng Bảo Trì',
      pill: 'Đang Bảo Trì Hệ Thống',
      heading: 'Cổng Tài Liệu Đang Tạm Ngưng Bảo Trì',
      primary:
        'Cổng tài liệu hướng dẫn PtView Workstation (docs.ptview.app) hiện đang tạm đóng để bảo trì định kỳ và hoàn tất cập nhật vận hành. Vui lòng quay lại sau.',
      secondary:
        'The PtView Workstation documentation portal (docs.ptview.app) is temporarily offline for scheduled maintenance and operational updates. Please check back later.',
      cta: 'Liên hệ hỗ trợ (support@ptview.app)',
      footer: '© 2026 PtView · Hỗ trợ: support@ptview.app'
    }
  };

  let overlay = document.getElementById(OVERLAY_ID);
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.style.cssText =
      'position:fixed;inset:0;z-index:2147483647;background:radial-gradient(920px 460px at 50% -120px, rgba(59,130,246,0.18), transparent 65%),#070b14;color:#f8fafc;display:flex;align-items:center;justify-content:center;padding:24px 16px;overflow:auto;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;';
    document.body.appendChild(overlay);
  }

  document.documentElement.style.overflow = 'hidden';
  const t = isVi ? copy.vi : copy.en;
  document.title = t.title;

  const trimmedNote = String(note || '').trim();
  const noteHtml = trimmedNote
    ? `<div style="margin:14px auto 0;padding:10px 14px;border-radius:10px;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);color:#fde68a;font-size:13.5px;">${escapeHtml(trimmedNote)}</div>`
    : '';

  overlay.innerHTML = `
    <main style="width:100%;max-width:580px;background:#121a2f;border:1px solid rgba(148,163,184,0.18);border-radius:20px;padding:28px 28px 32px;box-shadow:0 24px 60px rgba(0,0,0,0.55);text-align:center;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:24px;">
        <div style="display:inline-flex;align-items:center;gap:10px;font-weight:800;font-size:16px;color:#fff;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32" style="border-radius:8px;flex-shrink:0;" aria-hidden="true">
            <rect x="0" y="0" width="256" height="256" rx="56" fill="#000000"/>
            <rect x="56" y="56" width="32" height="144" rx="10" fill="#FFFFFF"/>
            <rect x="112" y="56" width="32" height="88" rx="10" fill="#FFFFFF"/>
            <rect x="168" y="56" width="32" height="88" rx="10" fill="#FFFFFF"/>
            <rect x="112" y="168" width="88" height="32" rx="10" fill="#FFFFFF"/>
          </svg>
          <span>PtView Docs</span>
        </div>
        <div style="display:${viEnabledOnDocs ? 'inline-flex' : 'none'};background:rgba(7,11,20,0.65);border:1px solid rgba(148,163,184,0.18);border-radius:8px;padding:2px;">
          <button type="button" id="ptvMaintBtnEn" style="border:none;background:${isVi ? 'transparent' : '#3b82f6'};color:${isVi ? '#94a3b8' : '#fff'};font-size:12px;font-weight:700;padding:5px 10px;border-radius:6px;cursor:pointer;">EN</button>
          <button type="button" id="ptvMaintBtnVi" style="border:none;background:${isVi ? '#3b82f6' : 'transparent'};color:${isVi ? '#fff' : '#94a3b8'};font-size:12px;font-weight:700;padding:5px 10px;border-radius:6px;cursor:pointer;">VI</button>
        </div>
      </div>
      <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:9999px;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#fbbf24;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.35);margin-bottom:16px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#f59e0b;"></span>
        <span id="ptvMaintPill">${t.pill}</span>
      </div>
      <h1 id="ptvMaintHeading" style="font-size:clamp(22px,3.6vw,27px);font-weight:800;line-height:1.25;margin-bottom:12px;color:#fff;">${t.heading}</h1>
      <p id="ptvMaintPrimary" style="color:#cbd5e1;font-size:15px;margin-bottom:12px;">${t.primary}</p>
      ${noteHtml}
      ${viEnabledOnDocs ? `<div style="height:1px;background:rgba(148,163,184,0.18);margin:20px 0;"></div><p id="ptvMaintSecondary" style="font-size:13.5px;color:#94a3b8;margin-bottom:0;">${t.secondary}</p>` : ''}
      <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:24px;">
        <a id="ptvMaintCta" href="mailto:support@ptview.app" style="display:inline-flex;align-items:center;justify-content:center;padding:11px 20px;border-radius:10px;font-size:14px;font-weight:600;text-decoration:none;background:#3b82f6;color:#fff;box-shadow:0 8px 24px rgba(37,99,235,0.28);">${t.cta}</a>
      </div>
      <div id="ptvMaintFoot" style="margin-top:24px;font-size:12px;color:#64748b;">${t.footer}</div>
    </main>
  `;

  const applySwitch = (nextLang) => {
    const c = nextLang === 'vi' ? copy.vi : copy.en;
    const isNextVi = nextLang === 'vi';
    document.title = c.title;
    const pill = document.getElementById('ptvMaintPill');
    const heading = document.getElementById('ptvMaintHeading');
    const primary = document.getElementById('ptvMaintPrimary');
    const secondary = document.getElementById('ptvMaintSecondary');
    const cta = document.getElementById('ptvMaintCta');
    const foot = document.getElementById('ptvMaintFoot');
    const bEn = document.getElementById('ptvMaintBtnEn');
    const bVi = document.getElementById('ptvMaintBtnVi');
    if (pill) pill.textContent = c.pill;
    if (heading) heading.textContent = c.heading;
    if (primary) primary.textContent = c.primary;
    if (secondary) secondary.textContent = c.secondary;
    if (cta) cta.textContent = c.cta;
    if (foot) foot.textContent = c.footer;
    if (bEn) {
      bEn.style.background = isNextVi ? 'transparent' : '#3b82f6';
      bEn.style.color = isNextVi ? '#94a3b8' : '#fff';
    }
    if (bVi) {
      bVi.style.background = isNextVi ? '#3b82f6' : 'transparent';
      bVi.style.color = isNextVi ? '#fff' : '#94a3b8';
    }
  };

  document.getElementById('ptvMaintBtnEn')?.addEventListener('click', () => applySwitch('en'));
  document.getElementById('ptvMaintBtnVi')?.addEventListener('click', () => applySwitch('vi'));
}

async function checkDocsMaintenanceStatus() {
  if (typeof window === 'undefined' || isLocalHost()) return;
  if (currentCheckPromise) return currentCheckPromise;

  currentCheckPromise = (async () => {
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 2500) : null;
      const res = await fetch(SITE_STATUS_ENDPOINT, {
        method: 'GET',
        cache: 'no-store',
        signal: controller?.signal
      });
      if (timer) clearTimeout(timer);
      if (!res.ok) return;

      const data = await res.json();
      if (data && data.success) {
        const viEnabledOnDocs = data?.languages?.viEnabledOnDocs !== false;
        const redirected = applyDocsLanguagePolicy(viEnabledOnDocs);
        if (redirected) return;

        if (data.docsPaused === true) {
          renderMaintenanceOverlay(data.maintenanceNote || '', viEnabledOnDocs);
        } else if (isDocsMaintenanceActive) {
          removeMaintenanceOverlay();
        }
      }
    } catch {
      // Fail open so temporary offline/firewall checks never lock out public docs
    } finally {
      currentCheckPromise = null;
    }
  })();

  return currentCheckPromise;
}

if (typeof window !== 'undefined') {
  void checkDocsMaintenanceStatus();
}

export function onRouteDidUpdate() {
  void checkDocsMaintenanceStatus();
}
