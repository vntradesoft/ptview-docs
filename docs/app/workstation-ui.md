---
sidebar_position: 1
title: Workstation UI & Chart Navigation
---

# Workstation UI & Chart Navigation

PtView Workstation is organized into clear, customizable zones modeled after professional trading terminals. Every panel can be toggled, resized, or restored automatically between sessions.

![PtView Full Workstation Layout](/img/screenshots/workstation-main.png)

---

## 1. Top Menu Bar & Main Toolbar

![Menu Bar and Main Toolbar](/img/screenshots/menu-and-toolbar.png)

### Top Menu Bar
| Menu | What's Inside |
|---|---|
| **File** | New Workspace Tab (<kbd>Ctrl</kbd> + <kbd>T</kbd>), Add Chart Pane (<kbd>Ctrl</kbd> + <kbd>N</kbd>, with 5 Split Layouts <kbd>Alt</kbd> + <kbd>1..5</kbd>), Close Tab (<kbd>Ctrl</kbd> + <kbd>W</kbd>), Close Chart Pane (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd>), Save Workspace (<kbd>Ctrl</kbd> + <kbd>S</kbd>), Load Workspace (<kbd>Ctrl</kbd> + <kbd>O</kbd>), Exit (<kbd>Alt</kbd> + <kbd>F4</kbd>) |
| **View** | Toggle **Market Watch** (<kbd>Ctrl</kbd> + <kbd>M</kbd>), **Navigator** (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>), **Data Window** (<kbd>Ctrl</kbd> + <kbd>D</kbd>), **AI Copilot** (<kbd>Ctrl</kbd> + <kbd>J</kbd>), Fullscreen (<kbd>F11</kbd>) |
| **Insert** | Quick Indicator Search (<kbd>Ctrl</kbd> + <kbd>I</kbd>), Drawing Tools |
| **Charts** | Timeframe submenu, Chart Type (`Candlestick` / `Bar` / `Line`), **Box Zoom** (<kbd>Alt</kbd> + Drag), Undo Zoom (<kbd>Alt</kbd> + <kbd>Z</kbd>), Zoom In/Out/Reset |
| **Tools** | **AI Settings**, **Screenshot** (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>), **Options / Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) |
| **Help** | Keyboard Shortcuts (<kbd>F1</kbd>), **Documentation**, **PTView.SDK**, Open Logs Folder, Export Diagnostics `.zip`, **View License**, **Privacy Statement**, **Check for Updates... / Restart to Update**, About |

### Main Toolbar (Left to Right)
1. **Exchange Selector**: Switch active exchange (`OKX`, `Binance`, and `Bybit`).
2. **Quick Symbol Button (<kbd>Ctrl</kbd> + <kbd>K</kbd>)**: Shows active pair + `Spot`/`Perp` badge. Click to search across all enabled exchanges.
3. **Timeframe Cluster**: One-click intervals (`1m`, `5m`, `15m`, `30m`, `1h`, `4h`, `1d`) plus the `v` dropdown to pin custom timeframes (`3m`, `2h`, `6h`, `12h`, `3d`, `1w`, etc.).
4. **Chart Type Selector**: Toggle between **Candlestick**, **OHLC Bar**, and **Line** charts.
5. **Indicators Button (<kbd>Ctrl</kbd> + <kbd>I</kbd>)**: Open the Quick Indicator Search popup.
6. **Zoom Controls**: **Box Zoom** (<kbd>Alt</kbd> + Drag), **Zoom In** (<kbd>Ctrl</kbd> + <kbd>+</kbd>), **Zoom Out** (<kbd>Ctrl</kbd> + <kbd>-</kbd>), and **Reset Auto-Fit** (<kbd>Ctrl</kbd> + <kbd>0</kbd>).
7. **Multi-Chart Layout Switcher**: Add pane (`+` / <kbd>Ctrl</kbd> + <kbd>N</kbd>) and switch between **Single** (<kbd>Alt</kbd> + <kbd>1</kbd>), **Split Vertical** (<kbd>Alt</kbd> + <kbd>2</kbd>), **Split Horizontal** (<kbd>Alt</kbd> + <kbd>3</kbd>), **3 Charts** (<kbd>Alt</kbd> + <kbd>4</kbd>), and **Grid 2×2** (<kbd>Alt</kbd> + <kbd>5</kbd>).
8. **Right Quick Actions**: **Snapshot Camera** (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>), **AI Copilot** (<kbd>Ctrl</kbd> + <kbd>J</kbd>), and **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>).

---

## 2. Market Watch & Navigator Panels

![Market Watch and Navigator Panels](/img/screenshots/marketwatch-navigator.png)

### Market Watch (<kbd>Ctrl</kbd> + <kbd>M</kbd>)
- Filter by **Exchange** or market type (**ALL**, **SPOT**, **PERP**, **INVERSE**).
- Click the magnifying glass icon to filter pairs live.
- Displays **Last Price**, **24h % Change** (with live green/red tick flashes), and optional 24h High, Low, and Volume columns (right-click header to toggle columns).
- **Double-click** any row to open it in the active chart, or **right-click → Open in New Tab**.

### Navigator (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>)
- Browse all **40+ built-in indicators** and installed custom `PTView.SDK` plugins organized by category (**Trend**, **Oscillators**, **Volatility**, **Volume**, **Bill Williams**).
- **Double-click** or **right-click → Attach to Active Chart** to add an indicator immediately.

---

## 3. Chart Canvas, Zoom & Data Window

![Chart Zoom and Data Window](/img/screenshots/chart-zoom.png)

### Smooth Chart Zoom & Axis Controls
- **Mouse Wheel**: Zoom horizontally in/out centered on your cursor.
- **Drag Price Axis (Right)**: Stretch or compress vertical price scaling; double-click the price axis (or click `A`) to return to **Auto-Fit**.
- **Drag Time Axis (Bottom)**: Stretch or compress candle spacing horizontally.
- **Box Zoom (<kbd>Alt</kbd> + Drag)**: Click the Box Zoom button (or hold <kbd>Alt</kbd> and drag a rectangle) to zoom straight into a specific price/time zone. Press <kbd>Alt</kbd> + <kbd>Z</kbd> to step back or <kbd>Ctrl</kbd> + <kbd>0</kbd> to reset.
- **Multi-Touch Gestures (Touchscreens)**: Pinch with two fingers to zoom horizontally, swipe to pan the chart or drag axes with smooth inertia, and double-tap on the chart or price axis to reset/auto-fit.

### Data Window (<kbd>Ctrl</kbd> + <kbd>D</kbd>)
- Docks beside your chart to display exact values at the cursor position: **Open**, **High**, **Low**, **Close**, **Volume**, plus real-time numerical outputs for every active indicator line.

### Automatic Workspace Persistence & Multi-Tab Workspaces
- **Workspace Tabs**: Organize your trading into multiple tabs (e.g., `BTC MTF`, `Altcoin Watch`).
  - Click **`+`** on the right of the tab bar (or press <kbd>Ctrl</kbd> + <kbd>T</kbd>, or **<kbd>Ctrl</kbd> + Double-click** a pair in **Market Watch**) to open a new tab. Community Edition supports up to **3 tabs**; Pro Edition supports **unlimited tabs**.
  - **Double-click** a tab header to rename it inline (<kbd>Enter</kbd> to save, <kbd>Esc</kbd> to cancel), or **right-click** a tab header for **Rename Tab**, **Duplicate Tab**, and **Close Tab**.
- **Per-Tab Symbol & 2D Crosshair Sync**: When a tab displays 2–4 charts, two square icon toggles appear on the right of the tab bar (also available in the tab right-click menu):
  - **Sync Symbol (Link icon)**: Changing a symbol in one pane automatically updates all other panes in the same tab while **keeping each pane's timeframe and indicators** intact — ideal for multi-timeframe analysis (`1D / 4H / 1H / 15m`). Leave it off to view different symbols independently in the same tab.
  - **Sync Crosshair (Reticle icon)**: Hovering on one pane synchronizes the **vertical time line** across all panes in the tab, plus the **horizontal price line** across panes viewing the same symbol.
- **Automatic Persistence**: All open tabs, multi-chart grid layouts, sync toggles, symbols, timeframes, indicators, and drawing objects are saved automatically and restored on your next launch.
- Switch between **4 built-in themes** (**Dark**, **Midnight OLED**, **CyberNavy**, **Light**) anytime in **Settings → General**.
