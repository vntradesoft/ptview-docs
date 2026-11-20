---
sidebar_position: 6
title: Shortcuts & Settings
---

# Keyboard Shortcuts & Application Settings

Speed up your daily charting workflow with verified keyboard shortcuts and tailor performance, updates, exchanges, and diagnostics in **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>).

---

## 1. Complete Keyboard Shortcuts

### Panels, Windows & Workspace
| Shortcut | Action |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | Open New Workspace Tab |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Close Workspace Tab |
| <kbd>Ctrl</kbd> + <kbd>Tab</kbd> | Switch to Next Tab |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | Switch to Previous Tab |
| <kbd>Ctrl</kbd> + <kbd>1</kbd> .. <kbd>9</kbd> | Switch directly to Tab 1-9 |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | Add Chart Pane to active tab (up to 4) |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> | Close active chart pane in grid |
| <kbd>Alt</kbd> + <kbd>1</kbd> | Single Chart Mode (1) |
| <kbd>Alt</kbd> + <kbd>2</kbd> | Split 1x2 Vertical (2) |
| <kbd>Alt</kbd> + <kbd>3</kbd> | Split 2x1 Horizontal (2) |
| <kbd>Alt</kbd> + <kbd>4</kbd> | 3 Charts Grid (1+2) |
| <kbd>Alt</kbd> + <kbd>5</kbd> | 4 Charts Grid (2x2) |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Save Workspace |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | Load Workspace |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Open Quick Symbol Search |
| <kbd>Ctrl</kbd> + <kbd>I</kbd> | Open Quick Indicator Search |
| <kbd>Ctrl</kbd> + <kbd>M</kbd> | Toggle **Market Watch** Panel |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | Toggle **Navigator** Panel |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | Toggle **Data Window** |
| <kbd>Ctrl</kbd> + <kbd>J</kbd> | Toggle **AI Copilot** Sidebar |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Capture Branded Screenshot |
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | Open **Settings / Options** |
| <kbd>F1</kbd> | Open Keyboard Shortcuts Reference |
| <kbd>F11</kbd> | Toggle Fullscreen |

### Chart Zoom & Navigation
| Shortcut | Action |
|---|---|
| <kbd>Alt</kbd> + Drag | **Box Zoom** into any selected area |
| Hover Price Alert Line (`↕`) + Drag | Move price alert target line up/down directly on chart (<kbd>Esc</kbd> or Right-click to cancel) |
| <kbd>Alt</kbd> + <kbd>Z</kbd> | Undo Last Zoom Step |
| <kbd>Ctrl</kbd> + <kbd>+</kbd> / Mouse Wheel Up | Zoom In |
| <kbd>Ctrl</kbd> + <kbd>-</kbd> / Mouse Wheel Down | Zoom Out |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | Reset Zoom & Auto-Fit Price Scale |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jump to Oldest / Latest Bar |

### Drawing Management
| Shortcut | Action |
|---|---|
| <kbd>Alt</kbd> + <kbd>D</kbd> | Toggle Drawing Toolbar |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> | Open Drawing Manager |
| <kbd>Delete</kbd> | Remove Selected Drawing |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> / <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Undo / Redo Drawing |

---

## 2. Application Settings Overview (<kbd>Ctrl</kbd> + <kbd>P</kbd>)

![PTView Application Settings Dialog](/img/screenshots/settings-dialog.png)

Open Settings via **Tools → Options**, the gear icon on the right toolbar, or <kbd>Ctrl</kbd> + <kbd>P</kbd>:

- **Appearance**: Choose **Theme** (`Dark`, `Midnight`, `CyberNavy`, `Light`), **Accent Color** (including the adaptive **Monochrome** option that automatically uses carbon obsidian on `Light` and soft platinum white on dark themes), Windows system theme sync, window caption controls, **Language** (`English` / `Tiếng Việt`), **Country / Region** (defaults to **Auto-Detect** using your network and Windows time-zone/region settings, or pick manually from ~249 global countries/territories), and **Display Time Zone**.
- **Chart**: Configure default exchange/pair/timeframe, candle history buffer (`5,000`–`50,000+`), FPS limit, and price guide line visibility.
- **Exchanges & Markets**: Enable/disable available exchanges for your build and region, toggle supported market types (`SPOT`, `PERP`, `INVERSE`, `FUTURES`) **individually per exchange** (showing only modes each exchange supports), or apply a quick bulk preset.
- **Network**: Configure **HTTP / SOCKS5 Proxy** routing (applied immediately across all exchange REST/WebSocket feeds, AI Copilot, Breaking News, Telegram notifications, Licensing, App Updates, and Remote Care without restart). Supports corporate proxy authentication (including `DOMAIN\username`, Basic, and Windows SSO fallback); proxy passwords are masked in the UI and encrypted locally with Windows DPAPI.
- **General**: Configure startup workspace restore, close confirmation, **Developer Mode** toggle, and **Privacy & Diagnostics** (opt-out toggles for both anonymous Sentry crash reporting and Remote Care device telemetry/check-ins—turning off Remote Care check-ins stops sending your `MachineId` and hides system banners while keeping anonymous regional exchange compliance active).
- **Notifications**: Control sound triggers for **Toast Notifications**, **AI Copilot Completion** (shows an in-app toast while working or a Windows desktop toast when minimized), **MCP Events**, **Telegram Bots** (supports **Auto Detect** Chat ID and **Test Connection** through proxy), default **Price Target Alerts** channels (Toast, Sound, Telegram, dedicated Price Alert bot when 2+ bots are enabled, and repeating cooldown), and **Breaking News & AI Telegram Alerts** (Toast, News sound, Telegram forwarding, and dedicated News bot when 2+ bots exist).
- **Sound**: Adjust **Master Volume**, toggle **Mute When Focused**, set repeat cooldown, and customize each notification event (`Alert`, `Info`, `Success`, `Warning`, `Error`, `Market News`, `AI Complete`, `MCP Event`, `Telegram`, `Email`) with preview playback or your own `.wav` / `.mp3` audio files.
- **News & Feeds**: Enable/disable built-in feeds or add custom RSS/Atom/JSON feeds, pick target AI translation language and auto-translate scope, configure **AI-Summarized News Telegram Forwarding** (minimum impact threshold defaulting to **High**, Watchlist filter, 0-AI original fallback toggle, AI account rotation status), and send a sample preview alert to Telegram.
- **Updates**: Switch between **Stable** and **Beta** channels, configure background auto-download/auto-restart, allow channel downgrades, or click **Check for Updates Now**.
- **License**: View your 28-day Pro trial countdown, copy your Machine ID, activate Pro online or via offline signed license key, or switch editions.
- **Advanced** *(Enable Developer Mode in General)*: Set rolling Serilog verbosity (`app-*.log`), toggle runtime `CryptoClients.Net` REST/Socket/Raw SDK logs, and export sanitized **Diagnostics `.zip`** bundles.
- **About System**: Inspect current build version, chart engine details, and quick links to the public Releases, SDK, and Docs repositories.
