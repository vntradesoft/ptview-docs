---
sidebar_position: 9
title: Troubleshooting & FAQ
---

# Troubleshooting & Frequently Asked Questions

Quick solutions for network setup, proxy routing, missing symbols, updates, and diagnostics exports in **PtView Workstation**.

---

## 1. Network, Proxy & Exchange Connection Issues

### Charts stay blank or an exchange fails to connect
Some regions or corporate networks restrict access to exchange REST/WebSocket endpoints.

1. Open **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Network**.
2. Enable **Use HTTP / SOCKS5 Proxy**.
3. Enter your **Proxy Host**, **Port** (and optional Username / Password).
4. Click **Save** — PTView updates both REST and WebSocket exchange clients immediately without requiring a restart.

:::tip Verify Proxy Routing
If you use Telegram alerts, **Settings → Notifications → Test Connection** automatically routes through your configured proxy so you can verify connectivity in one click.
:::

---

## 2. Exporting a Diagnostics Bundle for Support

When reporting a bug or connection problem, you can export a single `.zip` diagnostics bundle with sensitive credentials automatically scrubbed:

1. Open **Help → Export Diagnostics** (or go to **Settings → Advanced**).
2. Choose where to save the `.zip` archive.
3. PTView packages recent application logs (`app-*.log`, `app-error-*.log`), AI/MCP logs, and environment diagnostics while `SecretRedactor` automatically masks API keys, Bearer tokens, and local user paths.

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

### Do I need an exchange API key to view charts?
**No.** Public market data (OHLCV candlesticks, tickers, L2 order books, open interest, funding rates across `OKX`, `Binance`, and `Bybit`) works out of the box with **zero API keys**.

### Does AI Copilot cost money?
PTView itself does not charge extra for AI chat. You bring your own provider key (**Bring Your Own Key**):
- **Free options**: Google Gemini API free tier, OpenRouter free models, or **Ollama** running 100% locally and offline on your PC.
- **Paid / high-rate options**: OpenAI, DeepSeek, Anthropic, or Gemini paid tiers.

### What happens when my 28-day Pro Trial expires?
PTView smoothly switches to the **Community Edition** (free forever):
- Your workspaces, drawings, and settings remain intact.
- You keep up to **2 concurrent charts** and **5 active indicators per chart**, plus all supported exchanges (`OKX`, `Binance`, `Bybit`) and standard AI Copilot.
- *(Commercial **Pro** sales are temporarily paused. Existing license keys remain valid, and when active you can manage keys anytime under **Settings → License**.)*

### How do I switch back from Beta to Stable?
1. Open **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Updates**.
2. Change **Update Channel** from `Beta` to `Stable`.
3. Ensure **Allow channel downgrade** is enabled and click **Check for Updates Now**.

### How do I contact support or report an issue?
- **Email Support**: [support@ptview.app](mailto:support@ptview.app) (account inquiries, feedback, privacy, or general support)
- **Bug Reports & Feature Requests**: Open an issue on [GitHub Issues](https://github.com/vntradesoft/ptview-releases/issues)
- **Official Website**: [ptview.app](https://ptview.app)
