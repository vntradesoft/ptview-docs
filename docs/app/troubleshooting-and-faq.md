---
sidebar_position: 9
title: Troubleshooting & FAQ
---

# Troubleshooting & Frequently Asked Questions

Quick solutions for network setup, proxy routing, missing symbols, updates, and diagnostics exports in **PtView Workstation**.

---

## 1. Network, Proxy & Exchange Connection Issues

![HTTP and SOCKS5 Network Proxy Settings](/img/screenshots/network-proxy-settings.png)

### Charts stay blank or an exchange fails to connect
Some regions or corporate networks restrict access to exchange REST/WebSocket endpoints.

1. Open **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Network**.
2. Enable **Use HTTP / SOCKS5 Proxy**.
3. Enter your **Proxy Host**, **Port** (and optional Username / Password).
4. Click **Save** — PTView immediately routes exchange REST/WebSocket feeds, Telegram alerts, and Remote Care sync through your proxy without requiring a restart.

:::tip Verify Proxy Routing
If you use Telegram alerts, **Settings → Notifications → Test Connection** automatically routes through your configured proxy so you can verify connectivity in one click.
:::

---

## 2. Exporting a Diagnostics Bundle for Support

When reporting a bug or connection problem, you can export a single `.zip` diagnostics bundle with sensitive credentials automatically scrubbed:

1. Open **Help → Export Diagnostics** (or go to **Settings → Advanced**).
2. Choose where to save the `.zip` archive.
3. PTView packages recent application logs (`app-*.log`, `app-error-*.log`), AI/MCP logs, and environment diagnostics while `SecretRedactor` automatically masks AI API keys, Telegram tokens, Bearer tokens, and local user paths.

---

## 2B. Remote Care & Online Support (`Help → Remote Care & Support...`)

PTView includes a built-in **Remote Care** tool so you can refresh newly added exchanges or news feeds immediately and submit privacy-safe support tickets without manually zipping files:

![Remote Care & Online Support Dialog](/img/screenshots/remote-care-dialog.png)

1. Click **Help → Remote Care & Support...** from the top menu bar.
2. **Privacy Controls & Sync Refresh**: View your workstation's **Machine ID** (click **Copy ID** if support asks for it), toggle Remote Care device telemetry & check-ins on/off anytime (also available in **Settings → General → Privacy & Diagnostics**), or click **Sync Now** to immediately refresh verified regional exchange statuses and news feed updates (remains available in anonymous mode even when device check-ins are off).
3. **System Notice Banners**: Toggle **Show system & maintenance notice banners inside workstation** if you prefer to hide non-critical maintenance banners.
4. **Send Support Snapshot (`CARE-XXXXXX`)**: Enter a brief description of your issue (e.g., *"Chart candlesticks stalled"* or *"RSS feed timeout"*) and click **Send Support Snapshot**.
   - PTView automatically masks all AI API keys, Telegram tokens, passwords, and local user paths before uploading recent diagnostic logs.
   - A tracking code such as **`CARE-XXXXXX`** is generated and copied to your clipboard so you can share it with PTView Support.

:::tip Offline, Proxy & Privacy First
- **Works Behind Corporate Proxies**: If your network uses a corporate gateway or VPN, enable your HTTP/SOCKS5 proxy under **Settings → Network**, enter your host/port and optional credentials (supports `username` or `DOMAIN\username`), click **Test Connection**, and click **Save**. PTView automatically handles corporate `407` proxy authentication challenges (falling back between NTLM, Basic, and Windows SSO) and routes Exchanges, Remote Care, App Updates, Licensing, AI, News, and Telegram through your proxy.
- **Protected Local Credentials**: Proxy passwords are masked in the Settings UI, encrypted at rest using **Windows DPAPI** (tied to your local Windows account), and automatically scrubbed from all logs, crash reports, and support snapshots.
- **100% Opt-in Snapshots**: Submitting a Remote Care support snapshot is **100% opt-in**—PTView never uploads logs unless you explicitly click **Send Support Snapshot**.
:::

---

## 3. Where Are My Workspaces, Settings & Logs Stored?

| Install Mode | Default Data Directory |
|---|---|
| **Standard Installer (`Setup.exe`)** | `%LocalAppData%\PTView\` (binaries live separately in `%LocalAppData%\PTViewWorkstation\`) |
| **Portable (`Portable.zip`)** | `<ExtractedFolder>\data\` |
| **Custom Override** | Set the `PTVIEW_DATA_DIR` environment variable |

Inside the data directory:
- `config\desktop-settings.json` — User preferences, layouts, proxy, and channel settings
- `workspaces\` — Saved multi-chart grid workspaces, indicators, and drawings
- `logs\` — Rolling application logs (`app-*.log`) and AI/MCP logs (`logs\Ai\`)
- `plugins\` — Installed custom `PTView.SDK` plugin folders

:::note Safe Upgrades & Downgrades
Because binaries (`PTViewWorkstation`) are isolated from user data (`PTView`), updating or switching between **Stable** and **Beta** channels never overwrites your workspaces, drawings, or settings.
:::

---

## 4. Frequently Asked Questions (FAQ)

### Does PTView require exchange API keys or trading logins?
**No.** PTView connects only to public exchange market-data endpoints (OHLCV candlesticks, tickers, L2 order books, open interest, funding rates) and **does not request or store exchange API keys**. The only credentials stored locally on your machine are your optional **AI Provider API keys** and **Telegram Bot tokens**.

### Does AI Copilot cost money?
PTView itself does not charge extra for AI chat. You bring your own provider key (**Bring Your Own Key**):
- **Free options**: Google Gemini API free tier, OpenRouter free models, or **Ollama** running 100% locally and offline on your PC.
- **Paid / high-rate options**: OpenAI, DeepSeek, Anthropic, or Gemini paid tiers.

### What happens when my 28-day Pro Trial expires?
PTView smoothly switches to the **Community Edition** (free forever):
- Your workspaces, drawings, and settings remain intact.
- You keep up to **2 concurrent charts** and **5 active indicators per chart**, plus multi-exchange live data (according to your region and exchange availability) and standard AI Copilot.
- *(Commercial **Pro** sales are temporarily paused. Existing license keys remain valid, and when active you can manage keys anytime under **Settings → License**.)*

### How do I change my Country / Region or override Auto-Detect (e.g., when using a VPN)?
By default, **Country / Region** is set to **Auto-Detect**, which identifies your region automatically from your connection and Windows regional/time-zone settings (without storing personal identities). If you connect through a VPN or prefer a specific country:
1. Open **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Appearance** → **Language & TimeZone**.
2. Open the **Country / Region** dropdown and choose any country/territory from the global list (~249 regions), or switch back to **Auto-Detect** anytime.
3. Click **Save**.

### How do I switch back from Beta to Stable?
1. Open **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Updates**.
2. Change **Update Channel** from `Beta` to `Stable`.
3. Ensure **Allow channel downgrade** is enabled and click **Check for Updates Now**.

### How do I contact support or report an issue?
- **Email Support**: [support@ptview.app](mailto:support@ptview.app) (account inquiries, feedback, privacy, or general support)
- **Bug Reports & Feature Requests**: Open an issue on [GitHub Issues](https://github.com/vntradesoft/ptview-releases/issues)
- **Official Website**: [ptview.app](https://ptview.app)
