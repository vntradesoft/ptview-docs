---
sidebar_position: 3
title: Release Notes
---

# Release Notes

Track new features, improvements, bug fixes, and `PTView.SDK` API updates across **PtView Workstation** releases.

---

## `v0.6.1` — Stable Patch (2026-11-20)

:::info Clearer License Revocation & Replacement Activation
Patch **`v0.6.1`** refines how revoked Pro licenses are handled in Desktop Workstation so affected users can immediately purchase or activate a replacement Pro key without getting blocked.
:::

### Desktop Application (`PTViewWorkstation`)
- **Clear License Revoked Status**: Revoked licenses now transition cleanly to **Community (License Revoked)** instead of showing a **Pro Temporarily Paused** notice, distinguishing license revocation from temporary service locks.
- **Unblocked Pro Upgrade & New Key Activation**: Users with a revoked license keep full access to **Upgrade to Pro** and **Activate License Key** actions in *Settings → Account / Edition* and *About*.
- **Automatic Online License Verification**: Added startup and periodic online status verification so revoked keys are synchronized accurately across sessions and cannot be accidentally restored.
- **`PTView.SDK`** remains at **`0.2.0-beta.1`**.

---

## `v0.6.0` — Stable Channel (2026-11-20)

:::tip Dual-Theme Docs & Landing Sync
This release introduces **Pro Technical Indicator Alerts**, **Favorite Symbols & Exchange Sync**, an **Unread News Badge**, app-wide **Corporate Proxy & Auto-Update Fixes**, and full **Light / Dark + Cyan** documentation & landing visuals.
:::

### Desktop App (`PTViewWorkstation`)
- **Pro Indicator Alerts (Schema v2 & DAG Runtime)**: Create conditional indicator-driven alerts with structured v2 rule schemas and deterministic DAG evaluation.
- **Favorite Symbols & Toolbar Exchange Sync**: Star/unstar favorite symbols and filter favorites in both **Quick Symbol Popup** and **Market Watch**, with Market Watch staying synced with the active toolbar exchange.
- **Unread News Badge & Status Pill**: Unread counter badge on the toolbar Breaking News button and live status pill on the bottom status bar.
- **Corporate Proxy & Market Stream Hardening**:
  - Routed Velopack auto-update downloads (`GithubSource` / `SimpleWebSource`) through the app's `ProxyAuthFallbackHandler`.
  - Updated Binance public WebSocket streaming to use `wss://data-stream.binance.vision/` cleanly and improved HTTP 407 Windows SSO / Basic authentication fallback plus password masking.
- **Drawing Manager Layout Fix**: Improved Locked/Name column sizing and `SymbolRef` badge alignment in `DrawingManagerDialog`.

### Documentation & Web Landing
- Re-captured all 28 application views in both **Dark + Cyan** and **Light + Cyan** themes, plus automatic theme-aware image switching across EN/VI docs (`@theme/ThemedImage`) and `ptview.app`.
- Expanded EN/VI guides with 10 newly captured views (including Settings, Diagnostics, License Dialog, Account Switching, and Alert History) and refreshed the dual-theme landing news & showcase sections.
- `PTView.SDK` remains unchanged at **`0.2.0-beta.1`**.

---

## `v0.5.1` — Stable Channel (2026-11-18)

:::tip Stable Release
`v0.5.1` is a **Stable Channel** maintenance update adding **Dynamic HTTP / SOCKS5 Proxy Support for Remote Care**, **Zero-Restart Proxy Sync**, and **Startup DPAPI Proxy Password Hydration**.
:::

- **Remote Care Behind Corporate & VPN Proxies**: All Remote Care sync, check-in, and support ticket (`CARE-XXXXXX`) requests now automatically follow your **Settings → Network & Proxy** configuration (HTTP, HTTPS, and SOCKS5 with optional credentials).
- **Instant Runtime Re-Sync**: Saving proxy changes in **Settings → Network & Proxy** immediately refreshes Remote Care connectivity and updates `RemoteCareDialog` live without restarting PTView.
- **Resilient Proxy Input & Startup Auth**: Safely handles `host:port` inputs in Proxy Host settings and ensures DPAPI-protected proxy passwords load cleanly at startup.

---

## `v0.5.0` — Stable Channel (2026-11-18)

:::tip Stable Release
`v0.5.0` is a **Stable Channel** milestone release introducing **29-Exchange Integration with Per-Exchange Market Type Governance**, **Independent Remote Care (`PTV-RC1`)**, **World Regions & Country-Based Compliance/Payment Gating**, and **Privacy Policy `v1.1.1` with Anonymous Policy Sync Opt-Out**.
:::

### 29-Exchange Integration & Per-Exchange Market Governance
- **29 Exchanges & Live Capability Probing**: Integrated all **29 exchanges** (`CryptoClients.Net`) with startup native market discovery (`SPOT`, `PERP`, `INVERSE`, `FUTURES`), runtime maintenance notices, and per-exchange market type selectors in **Settings → Exchanges** with **Safe Soft Lock** on existing open tabs.
- **UX & Input Fixes**: Fixed mouse click selection in `QuickSymbolPopup` and improved `Key.System`/`Key.ImeProcessed` handling for QA DevTools shortcuts.

### Remote Care (`PTV-RC1`), Privacy Opt-Out & Policy `v1.1.1`
- **ECDSA P-256 Signed Configuration & Fleet Sync**: Delivers signed global/cohort/device configuration updates and idempotent settings reconciliation while preserving custom RSS feeds and user choices, plus on-demand redacted support tickets (`CARE-XXXXXX`).
- **Anonymous Compliance Sync & 90-Day Offline Baseline**: Turning off Remote Care check-ins stops `MachineId`, `/checkin` telemetry, and banners while maintaining anonymous global policy sync (`?anon=1`) and keeping verified signed global cache valid offline past 90 days (synchronized with Legal Policy **`v1.1.1`**).

### World Regions, Country Compliance & Dual Payment Gateways
- **3-Tier Hybrid Geo-Detection (~249 Countries/Territories)**: Combines Cloudflare Edge Geo-IP and Windows TimeZone/Region heuristics across Setup Wizard and Settings.
- **Regional Compliance & Global Checkout**: Enforces country-scoped exchange/market/news rules via authoritative Geo-IP, scopes **VietQR SePay** to Vietnam (`VN`), adds **Telegram Visa/Mastercard** globally, and adds centralized bilingual language governance.

---

## `v0.4.0` — Stable Channel (2026-11-17)

:::tip Stable Release
`v0.4.0` is a **Stable Channel** feature release adding **AI-Summarized Breaking News Alerts on Telegram**, an **Adaptive Monochrome Accent Theme with Live Settings Preview**, and **Volume Candle-Color Sync with Multi-State Indicator Palette Editing**.
:::

### AI-Summarized Breaking News on Telegram
- **Automated AI Summary & Translation Forwarding**: Automatically translate, summarize key bullet points, and forward high-impact Breaking News to Telegram based on a configurable **Minimum Impact Threshold** (defaulting to **High**) and optional **Watchlist / Active Chart** filtering. See [Breaking News Guide](app/breaking-news.md).
- **Pro 429 Key Rotation & Bot-Scoped Deduplication**: Pro Edition automatically rotates across multiple enabled AI accounts when hitting rate limits (`429`), while deduplicating sent articles per Telegram bot across restarts.
- **Manual One-Click Share & Sample Preview**: Forward any article from the reader toolbar or headline context menu (with an optional fallback to send the original excerpt without AI) and test formatting via **Send Sample News to Telegram**.

### Adaptive Monochrome Accent & Live Theme Preview
- **Adaptive Monochrome Accent**: Resolves automatically to carbon obsidian on `Light` and tailored platinum shades on `Dark`, `Midnight`, and `CyberNavy`, with WCAG contrast-computed states across controls, charts, and desktop toasts.
- **Chart, DataGrid & Live Preview Sync**: Synced accent highlights across `DataGrid` rows, chart context menus, split dividers, and scroll-to-end controls, plus instant live theme preview in **Settings → Appearance** with rollback on Cancel.

### Volume Candle-Color Sync & Multi-State Indicator Palettes
- **Volume & Bull/Bear Candle Sync**: Volume Up/Down bars follow the active candle color theme by default (including hollow candles), with an optional **"Sync colors with chart candles"** toggle for 13 two-color Bull/Bear indicators.
- **Multi-State Palette & Guide Level Customization**: Pick custom per-state colors for all 17 multi-state palette indicators and customize individual guide line styles with instant Legend and Data Window updates.

---

## `v0.3.1` — Stable Channel (2026-11-16)

:::tip Stable Maintenance Release
`v0.3.1` refines workspace borders and multi-chart split spacing, cleans up the Breaking News card layout, and fixes independent resizing for the **AI Chat** and **Price Alerts** sidebars.
:::

- **Cleaner Workspace & Multi-Chart Spacing**: Removed redundant outer workspace borders, turned the workspace tab strip into a rounded pill bar, styled the drawing toolbar as an independent card, and widened multi-chart split dividers to `6px`.
- **Breaking News Card & Reader Separation**: Removed duplicate outer borders around the bottom dock and framed the Breaking News list and article reader as clean standalone cards with a `6px` resize divider.
- **Independent AI Chat & Price Alerts Resizing**: Fixed sidebar splitter behavior so resizing **AI Chat** adjusts smoothly against the chart workspace without squeezing **Price Alerts** or locking when Price Alerts is closed.

---

## `v0.3.0` — Stable Channel (2026-11-16)

:::tip Stable Release
`v0.3.0` is a major **Stable Channel** milestone release introducing **Price Target Alerts** with on-chart drag editing, a **Breaking News Dock & AI Reader**, **Multi-Scope Toast & Sound Notifications**, **DPAPI Secret Encryption**, and **84 Built-In MCP Tools**.
:::

### Price Target Alerts & On-Chart Dragging (`84` MCP Tools)
- **Multi-Exchange Price Monitoring (`OKX`, `Binance`, `Bybit`)**: Create persistent alerts for Spot, Perpetual Futures, and Delivery pairs via chart right-click, Horizontal Line conversion (inheriting price & color), the Price Alerts drawer, or AI Copilot / MCP tools (`alerts_list`, `alerts_get_history`, `alerts_create`, `alerts_modify`, `alerts_set_status`, `alerts_remove`, `alerts_clear`).
- **Interactive Native WPF Overlay**: Real-time `+/- %` distance pills readable across all 4 themes, hover/selection highlighting, direct vertical dragging on the chart (with magnet snap and `Esc` cancel), and independent chart line visibility toggles.
- **Multi-Channel Delivery & Centralized Telegram Routing**: Toast, Sound, and Telegram alerts with `Details` / `Compact` card view modes, quick per-card channel checkboxes, `Paused` quick filter pill, and dedicated Telegram bot selection in **Settings → Notifications → Price Target Alerts**.

### Breaking News Dock, Full-Article Reader & AI Translation
- **Breaking News Panel (`Ctrl+B`)**: Monitor multi-source crypto and macro headlines below the chart or maximized to full chart height, customize RSS/Atom/JSON feeds, and configure Toast & Telegram alerts.
- **Full-Article Extraction & AI Translation**: Read extracted articles in Markdown, translate and summarize bullet points with AI on demand, and jump to mentioned coin charts in one click.

### Multi-Scope Toast, Sound System & Security
- **In-App & Out-of-App Toasts**: 7-anchor in-app toast host plus a dedicated background Windows desktop toast window (`Open Chart` quick action) and category-level `.wav`/`.mp3` notification sounds.
- **DPAPI Secret Encryption & Charting Fixes**: Encrypted sensitive secrets at rest in `settings.json` via Windows DPAPI and fixed auto-scroll snap-back when panning slightly into history.

---

## `v0.2.1` — Stable Channel Hotfix (2026-11-14)

:::tip Stable Hotfix
`v0.2.1` fixes residual `"Beta"` labels in the window title, About dialog, and legacy localization strings when upgrading from a previous Beta installation to Stable.
:::

- **Accurate Stable Title & Channel Badge**: `WindowTitle`, `AboutDialog` channel badge, and telemetry environment now derive strictly from the running binary's semantic version rather than the saved update-feed preference.
- **Legacy Localization Cleanup**: Removed remaining hardcoded `"Platinum Trade Community Beta"` and `"Beta Preview"` strings from EN/VI UI resources.

---

## `v0.2.0` — Stable Channel (2026-11-14)

:::tip Stable Release
`v0.2.0` is the **Stable Channel** milestone release, consolidating the `0.2.0-beta` series with new AI Copilot, Charting, and Localization enhancements.
:::

### AI Copilot: `@` Mention, 21 Quick Ask Prompts & Localization
- **`@` Mention Context Autocomplete**: Type `@` in the AI chat box (or open from the `+` menu) to attach active symbol, timeframe, and chart context directly into your question.
- **21 MCP-Powered Quick Ask Prompts**: Expanded Quick Ask with 21 ready-to-use prompts backed by MCP tools and category filtering.
- **EN/VI Slash Command Localization**: Localized slash commands, AI responses, and chat UI strings.

### Charting: History Loading, 3/4 Auto-Scroll & Touch Gestures
- **History Backfill & 3/4 Auto-Scroll**: Fixed historical candle loading edge cases, added 3/4 viewport auto-scroll, and added chart diagnostics.
- **Touch Press-and-Hold Context Menu**: Added touch press-and-hold support for opening the chart context menu and outside-tap dismissal.

---

## `v0.2.0-beta.7` — Beta Channel (2026-11-13)

:::note Early-Access Beta Release
`v0.2.0-beta.7` is an early-access **Beta Channel** pre-release. Users subscribed to the **Beta** channel in **Settings -> Updates** receive an automatic delta update from `v0.2.0-beta.6`.
:::

### AI Copilot Input Card, Model Picker & Onboarding
- **Upgraded Chat Input Card**: Added a **`+` Quick Action Menu** (Actions `/`, MCP Tools `#`, Quick Ask `⚡`, and Symbol/Timeframe Locks) with refined borderless toolbar controls.
- **Interactive Model Picker & `IModelProvider`**: Switch models directly from the chat input footer with curated presets, live remote API model discovery, and per-account caching.
- **Monthly Token Usage**: Added cumulative monthly token usage tracking and a per-provider breakdown popover in the chat footer.
- **Account Onboarding**: Removed the empty default AI account and added a clear prompt to configure an AI account before chatting.

### 77 MCP Tools & Chart Multi-Touch Gestures
- **`workspace_switch_symbol` (77 MCP Tools)**: Exposed `workspace_switch_symbol` with `EXCHANGE:SYMBOL` shorthand support and automatic AI conversation context sync.
- **Multi-Touch & TradingView-Style Zoom/Hit-Testing**: Added touchscreen pinch-to-zoom, touch panning with inertia, double-tap support, and improved TradingView-style zoom anchoring and drawing/indicator hit-testing.

---

## `v0.2.0-beta.6` — Beta Channel (2026-11-13)

:::note Early-Access Beta Release
`v0.2.0-beta.6` is an early-access **Beta Channel** pre-release. Users subscribed to the **Beta** channel in **Settings -> Updates** receive an automatic delta update from `v0.2.0-beta.5`.
:::

### Hybrid Multi-Tab Workspaces & 4-Pane Grid
- **Workspace Tab Strip**: Added multi-tab workspace support where each tab hosts an independent 1-to-4 chart grid (`Single`, `SplitVertical`, `SplitHorizontal`, `Grid3`, `Grid2x2`), highlighted with an active accent underline. Community Edition supports up to **3 workspace tabs**; Pro Edition supports **unlimited tabs**.
- **Tab Management & Shortcuts**: Double-click any tab header to rename it inline, right-click for **Rename Tab**, **Duplicate Tab**, and **Close Tab**, or <kbd>Ctrl</kbd> + Double-click a pair in Market Watch to open it in a new tab. Standardized File menu and keyboard shortcuts (`Ctrl+T`, `Ctrl+W`, `Ctrl+Tab`, `Ctrl+1..9`, `Ctrl+N`, `Ctrl+Shift+W`, and `Alt+1..5` layout modes).
- **Per-Tab Symbol Sync & 2D Crosshair Sync**: Added square icon toggles on the tab strip (and tab context menu) with full EN/VI localization:
  - **Sync Symbol**: Syncs symbol changes across all panes in the same tab while preserving each pane's timeframe and indicators.
  - **2D Sync Crosshair**: Syncs the vertical time line (and time axis badge) across all panes in the tab, plus the horizontal price line (and price badge) across panes viewing the same symbol.

### Charts Menu, Context Menu & Per-Chart Appearance Isolation
- **Aligned `Charts` Menu & Context Menu**: Reorganized the **Charts** menu bar into clean groups (`Zoom` submenu, `Candle Color Themes`, `Go to Start/End`, `Reload Chart`, `Auto Scale Price`, `Current Price Line`, `Indicators → Manage Indicators...`, and `Drawings → Manage Drawings...`), and added a `Timeframe` submenu and `Reload Chart` button/action on the chart.
- **Per-Chart Settings Isolation**: Isolated `DrawingManager` and per-chart appearance settings (`CandlePreset`, `CurrentPriceLine`, `DataDisplayMode`) per pane so customizing one chart does not overwrite other charts. Added an explicit **"Apply appearance settings to all open charts"** checkbox in **Settings -> Chart**.

### AI Copilot (76 MCP Tools) & UI Polish
- **76 MCP Workspace Tools**: Expanded AI Copilot tools to create, switch, and configure multi-tab workspaces and sync modes, plus graceful handling of stream cancellations and network read timeouts.
- **Visual & Entitlement Refinements**: Added theme-aware loading spinners for charts and Market Watch, preloaded saved shell layout before showing the window, themed the scroll-to-end button, and enforced Pro-labeled plugin indicator and layout gating on Community Edition.

---

## `v0.2.0-beta.5` — Beta Channel (2026-11-12)

- **Expanded Community Indicator Limit**: Increased Community Edition indicator limit from **3 to 5** indicators per chart.
- **In-App Issue Reporting & Support**: Added **Report Issue** dialog under **Help** menu, support links, and updated EULA/Privacy Policy (`v1.0.1`).

---

## `v0.2.0-beta.4` — Beta Channel (2026-11-11)

:::note Early-Access Beta Release
`v0.2.0-beta.4` is an early-access **Beta Channel** pre-release. Users subscribed to the **Beta** channel in **Settings -> Updates** receive an automatic delta update from `v0.2.0-beta.3`.
:::

### Unified Branding & Identity
- **PtView Workstation**: Standardized the product name (`PtView Workstation`) and tagline (`Multi-Exchange Crypto Trading Platform`) across the main window, dialogs, screenshot watermarks, EULA/Privacy notices, installer metadata, and documentation.

### Help Menu, License Tab & About Dialog
- **Dedicated `License` Tab in Settings**: Moved license activation, 28-day Pro trial tracking, and Machine ID management into a dedicated **Settings -> License** tab.
- **Expanded Help Menu & Streamlined About Dialog**: Added direct **Help** menu links for **Documentation**, **PTView.SDK**, **View License**, and **Privacy Statement**, and simplified `AboutDialog`.

### Documentation Portal Updates
- **New Setup Guides**: Added dedicated step-by-step guides for [AI API Keys Setup](app/ai-api-keys-setup.md) and [Telegram Bot Notifications](app/telegram-bot-setup.md) with bilingual screenshots and diagrams.

---

## `v0.2.0-beta.3` — Beta Channel (2026-11-11)

:::note Early-Access Beta Release
`v0.2.0-beta.3` is an early-access **Beta Channel** pre-release. Users subscribed to the **Beta** channel in **Settings -> Updates** receive an automatic delta update (`~1.3 MB`) from `v0.2.0-beta.2`.
:::

### AI Copilot Scheduled Monitoring (`/schedule`)
- **Scheduled Tasks & Runner**: Added the `/schedule` slash command in AI Copilot along with `AiScheduleService`, a background execution loop, a task management popup UI, and scheduling settings. See [AI Copilot Guide](app/ai-copilot.md).

### Observability, Diagnostics & Crash Telemetry
- **App-Wide Serilog Logging & Diagnostics Export**: Added rolling `app-*.log` and `app-error-*.log` sinks across Desktop, Application, MarketData, Exchanges, Indicators, PluginHost, PluginWorker, Storage, and Charting layers with `SecretRedactor` scrubbing and one-click Diagnostics `.zip` export.
- **Developer Mode & Runtime SDK Log Controls**: Added **Developer Mode** and a dedicated **Settings -> Advanced** tab centralizing App/AI logs and runtime `CryptoClients.Net` REST, socket, and raw log controls, while gating `DebugLoggerProvider` and `AiFileLogger` against high-volume SDK chatter.
- **Sentry Crash Reporting & Error Telemetry**: Integrated `SentryTelemetryService` with `SecretRedactor` PII/path/credential scrubbing, breadcrumbs, 5-minute error deduplication, and a Privacy & Diagnostics opt-out toggle in **Settings -> General**.

### UI & Quality Polish
- **Dialog & Menu Refinements**: Updated `AboutDialog` with a crisp `PtView_256x256.png` logo and layout rounding, standardized `IndicatorManagerDialog` action icon buttons, and shortened the Screenshot label in the Tools menu.

---

## `v0.2.0-beta.2` — Beta Channel (2026-11-10)

### Auto-Update & Release Channel Experience
- **Velopack Install Detection Fix**: Fixed `AppPaths.DetermineIsVelopackInstalled` trailing directory separator handling so installed Velopack releases are accurately recognized as **Standard Installation** and run background startup update checks.
- **Custom Themed Update Prompt (`UpdateAvailableDialog`)**: Added a dedicated themed update dialog with live download progress bar, channel badge (`Stable` / `Beta`), and **Restart & Install** / **Later** actions.
- **Background Auto-Download & Sync**: Added `AutoDownloadUpdates` and `AutoRestartAfterUpdate` options, immediate channel/feed sync with `VelopackUpdateService`, and `SemaphoreSlim` concurrency protection.
- **Dedicated `Updates` Settings Tab**: Separated update settings from **General** into **Settings -> Updates** with channel switching, downgrade toggle, custom feed URL, and **Check for Updates Now**.

### About & Settings Dialog Refinements
- **Scrollable `AboutDialog` & Full Badge Visibility**: Wrapped capability descriptions in a `ScrollViewer`, switched status badges to `WrapPanel`, and added the current version row to the in-app About settings page.

---

## `v0.2.0-beta.1` — Beta Channel (2026-11-10)

:::note Early-Access Beta Release
`v0.2.0-beta.1` is an early-access **Beta Channel** pre-release. Users subscribed to the **Beta** channel in **Settings -> Updates** receive an automatic delta update from `v0.1.0`.
:::

### Workstation UI & Persistence
- **Themed Custom Window Chrome**: Replaced the native Windows title bar with a custom themed title bar unified across Dark, Midnight OLED, CyberNavy, and Light themes.
- **Full Workspace Persistence**: Automatically saves and restores multi-chart grid layouts, active indicators, drawing objects, and shell layout across sessions.
- **Indicator & Drawing Managers**:
  - Added drag-and-drop indicator reordering with synchronized sub-pane ordering and partition boundaries.
  - Added `LinePatternPicker` control, adaptive tabs in the Drawing Edit Dialog, resizable columns, and full EN/VI localization coverage.
- **Usability & Layout Polish**: Added touch/flick scrolling support across Options and UI scroll viewers, fixed 3-chart/4-chart layout icon clipping, and aligned quick symbol search toolbar sizing.

### Branded Screen Capture & Watermarking
- **Adaptive 4-Theme Watermark Footer**: Capture the active chart or full workstation window (`Ctrl+Shift+S` or toolbar camera button) with a clean footer displaying the PTView emblem, exchange, symbol, market type, timeframe, and timestamp.
- **Snapshot Options Dialog**: Choose capture target (active canvas vs. full window), custom resolution/DPI scaling, clipboard copy, or `.png`/`.jpg` export, plus continuous stitching for scrollable reports. See [Screen Capture & Watermarking](app/screen-capture.md).

### AI Copilot & Embedded MCP Server
- **Embedded HTTP MCP Server**: Built-in localhost MCP server (`http://127.0.0.1:47821/mcp`) with Bearer Token authentication in **AI Settings -> MCP (AI agent)**, exposing **71 tools** (alongside 65 tools via `PTView.Mcp.exe` stdio).
- **Standardized Tool Naming**: Unified MCP tool identifiers with domain prefixes and underscore separators (e.g., `workspace_get_session_snapshot`, `chart_get_overlay_state`). See [MCP Server & 71-Tool Reference](app/mcp-server-and-tools.md).
- **Copilot Resilience & Notifications**: Multi-account API key rate-limit failover, localized Copilot error/status notices, User vs. AI source attribution for indicators/drawings, and Telegram bot notifications.

### Charting, Indicators & Drawing Tools
- **Box Zoom Area & Axis Interactions**: Added box zoom area selection and interactive price/time axis drag-zoom interactions.
- **Price Axis Highlights**: Added indicator last-value highlight labels aligned to the rightmost visible bar and a toggleable current price guide line across all presets.
- **Drawing Tools Unification**: Unified Fibonacci defaults, gradient zone fills, trendlines, lock/visibility controls (`lock_all_drawings`), sub-pane drawing coordinate mapping, and live sync between the floating toolbar and edit dialog.

### Exchanges, Licensing & Compliance
- **Runtime Proxy Updates**: Normalized proxy URIs and applied runtime proxy configuration changes across exchange REST and WebSocket clients without restart.
- **28-Day Pro Trial & Licensing**: Integrated automated 28-day Pro trial, ECDSA P-256 offline license verification, indicator quota badge (`X/3`), and `PRO` discovery badges.
- **Compliance**: Standardized `PtView` copyright notices and updated `ThirdPartyNotices.txt`.

### `PTView.SDK v0.2.0-beta.1` (Breaking Change)
- **Color Palette Symbol Rename**: Renamed standard palette constants in `ColorRgba` from `Tv*` to `Pt*` (`PtBlue`, `PtOrange`, `PtAmber`, `PtPurple`, `PtGreen`, `PtRed`, `PtTeal`, `PtSalmon`, `PtYellow`, `PtMuted`, `PtCyan`, `PtBurgundy`). Plugin authors targeting `0.2.0-beta.1` should update `ColorRgba` references accordingly.
- Added MIT `LICENSE` and bilingual `README.md` / `README.vi.md` to the `PTView.SDK` package and repository.

---

## `v0.1.0` — Stable Channel (2026-11-07)

Initial public milestone release of **PtView Workstation** and **`PTView.SDK v0.1.0`**:
- Native `.NET 10` WPF `DrawingVisual` 60 FPS chart engine (zero WebView2).
- Real-time multi-exchange WebSocket & REST market data (`Binance`, `OKX`, `Bybit` Spot & Perpetual) with 1-minute binary history storage and gap recovery.
- Built-in technical indicator engine with cloud/band fills, child indicator composition, and out-of-process `PTView.PluginWorker` sandboxing.
- Initial in-app AI Copilot, drawing tools suite, and Velopack `Setup.exe` / `Portable.zip` distribution.

