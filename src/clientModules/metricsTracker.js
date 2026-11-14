// Lightweight, cookie-free pageview and download-link click tracker for docs.ptview.app

const METRICS_ENDPOINT = 'https://pay.ptview.app/api/v1/metrics/hit';
let clickListenerAttached = false;
let lastTrackedPath = '';

function trackMetric(key) {
  try {
    if (typeof window === 'undefined' || !key) return;
    const payload = JSON.stringify({ key });
    if (navigator.sendBeacon) {
      const queued = navigator.sendBeacon(METRICS_ENDPOINT, payload);
      if (queued) return;
    }
    fetch(METRICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: payload,
      keepalive: true
    }).catch(() => {});
  } catch {
    // Telemetry must never break documentation navigation
  }
}

function ensureClickListener() {
  if (typeof document === 'undefined' || clickListenerAttached) return;
  clickListenerAttached = true;

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target || typeof target.closest !== 'function') return;
    const anchor = target.closest('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    if (href.includes('github.com/vntradesoft/ptview-releases/releases')) {
      trackMetric('dl:docs:releases');
    }
  });
}

export function onRouteDidUpdate({ location }) {
  ensureClickListener();
  const currentPath = location?.pathname || '/';
  if (currentPath !== lastTrackedPath) {
    lastTrackedPath = currentPath;
    trackMetric('pv:docs');
  }
}
