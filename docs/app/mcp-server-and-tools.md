---
sidebar_position: 6
title: MCP Server & 77-Tool Reference
---

# External MCP Server & Tool Reference

PTView exposes its market data, indicators, chart navigation, drawing automation, multi-tab workspace management, and notification capabilities to external AI agents (such as **VS Code Copilot**, **Cursor**, **Claude Desktop**, and **Antigravity**) over the **Model Context Protocol (MCP)**.

:::warning Analytical Research Only — AI & Trading Risk Disclaimer
MCP tools provide read-only market data and local chart automation without live order execution. External AI agents can still hallucinate or misinterpret indicators; always verify independently and review the [Trading Risk & AI Copilot Disclaimer](../legal/risk-and-ai-disclaimer.md).
:::

---

## 1. Connection Modes

PTView provides two ways to connect external MCP clients:

| Transport | Entry Point | Tool Count | Authentication | Best For |
|---|---|---|---|---|
| **Embedded HTTP MCP Server** | `http://127.0.0.1:47821/mcp` | **77 tools** | Bearer Token (`Authorization: Bearer <token>`) | VS Code Copilot, Cursor, Antigravity, HTTP JSON-RPC clients |
| **Out-of-Process Stdio Server** | `PTView.Mcp.exe` | **71 tools** | Local Named Pipe IPC to running `PTView.Desktop` | Claude Desktop & stdio-only MCP hosts |

:::note Embedded vs. Stdio Modes
Both connection modes share the core charting, indicator, drawing, market data, multi-tab workspace, and notification capabilities, with `workspace_get_session_snapshot`, `chart_get_overlay_state`, `chart_set_overlay_visibility`, `accounts_list`, `accounts_get_active`, and `accounts_switch_active` routed directly through the embedded HTTP server and in-app Copilot.
:::

---

## 2. Setting Up the Embedded HTTP MCP Server

1. Open **AI Settings** in PTView and switch to the **`MCP (AI agent)`** tab.
2. Check **Enable HTTP MCP Server** (`Enabled`).
3. Verify or customize the listening **Port** (valid range: `1024–65535`, default: `47821`) and **Bearer Auth Token** (auto-generated 32-character hex GUID by default).
4. Click **Save** — `McpHttpServerService` starts immediately on `http://127.0.0.1:<port>/mcp/`.
5. Copy the generated JSON snippet from the dialog into your MCP client configuration (e.g., `.vscode/mcp.json` or Cursor MCP config):

```json
{
  "servers": {
    "ptview": {
      "type": "http",
      "url": "http://127.0.0.1:47821/mcp",
      "headers": {
        "Authorization": "Bearer <your-auth-token>"
      }
    }
  }
}
```

### HTTP Endpoints & JSON-RPC Methods
All requests must include `Authorization: Bearer <your-auth-token>`:
- **`GET /mcp/`**: Returns server health (`status`, `server`, `version`, `port`, `toolsCount`).
- **`POST /mcp/`**: JSON-RPC `2.0` (`protocolVersion: "2024-11-05"`) supporting `initialize`, `notifications/initialized`, `ping`, `tools/list`, and `tools/call`.

---

## 3. Setting Up the Stdio MCP Server (`PTView.Mcp`)

For stdio-based MCP clients (such as Claude Desktop), point the client to `PTView.Mcp.exe` while `PTView.Desktop` is running:

```json
{
  "mcpServers": {
    "ptview": {
      "command": "C:\\Path\\To\\PTView.Mcp.exe",
      "args": []
    }
  }
}
```

:::info Keep Desktop Workstation Running
`PTView.Mcp.exe` communicates with the live workstation UI over a local Named Pipe (`GuiBridgeClient`). Always keep `PTView.Desktop` running before invoking tools.
:::

---

## 4. Naming Convention (`<domain>_<action>`)

Every tool follows a consistent underscore-namespaced `snake_case` schema (`<domain>_<action>`, matching `^[a-zA-Z0-9_-]{1,64}$`) across 8 domains so it works without warnings in VS Code, Cursor, Claude Desktop, OpenAI, and Gemini:
- `draws_*` (27) — Chart annotations, lines, zones, Fibonacci tools, and lock/visibility state
- `indicators_*` (10) — Built-in & custom plugin indicators and buffer inspection
- `chart_*` (13) — Viewport zoom, scroll, price scale, overlays, and timeframe switching
- `market_*` (8) — Exchange instruments, tickers, OHLCV candles, order book, funding, OI, sentiment
- `intel_*` (7) — Fear & Greed Index, global market stats, volatility, coin fundamentals, news, web search
- `workspace_*` (8) — Open tabs, grid layouts, chart sessions, symbol/exchange switching, and snapshots
- `accounts_*` (3) — AI provider account inspection and switching
- `notify_*` (1) — Status bar and Telegram alert delivery

:::tip Backward-Compatible Naming
For backward compatibility, both the Embedded HTTP MCP Server, Stdio MCP Server, and in-app AI Copilot still accept legacy dot-separated (`draws.horizontal_line`) and double-underscore (`draws__horizontal_line`) names when invoked and resolve them automatically to `<domain>_<action>`.
:::

---

## 5. Complete 77-Tool Reference

### 5.1 Drawing Automation (`draws_*` — 27 tools)
| Tool Name | Mode | Description |
|---|---|---|
| `draws_list` | Read-only | List all drawing objects currently placed on the target chart |
| `draws_horizontal_line` | UI Mutation | Draw a horizontal price level line (main chart or sub-indicator pane) |
| `draws_vertical_line` | UI Mutation | Draw a vertical timestamp marker line |
| `draws_trend_line` | UI Mutation | Draw a trend line between two `(time, price)` anchors |
| `draws_ray` | UI Mutation | Draw a ray extending infinitely from start anchor through end anchor |
| `draws_extended_line` | UI Mutation | Draw a line extending infinitely in both directions through two anchors |
| `draws_trend_angle` | UI Mutation | Draw a trend line displaying slope in visual degrees |
| `draws_rectangle_zone` | UI Mutation | Draw a shaded rectangle zone (Order Block, FVG, Supply/Demand) |
| `draws_text_annotation` | UI Mutation | Place a text callout at a `(time, price)` coordinate |
| `draws_emoji_marker` | UI Mutation | Place an emoji signal marker (e.g. 🎯, 🚀, ⚠️) on the chart |
| `draws_fib_retracement` | UI Mutation | Draw a 2-point Fibonacci retracement with configurable levels/colors |
| `draws_fib_extension` | UI Mutation | Draw a 3-point trend-based Fibonacci extension |
| `draws_fib_time_zones` | UI Mutation | Draw vertical Fibonacci time cycle lines |
| `draws_fib_fan` | UI Mutation | Draw a Fibonacci speed resistance fan |
| `draws_fib_channel` | UI Mutation | Draw a 3-point parallel Fibonacci channel |
| `draws_ellipse` | UI Mutation | Draw an ellipse/circle defined by bounding box anchors |
| `draws_triangle` | UI Mutation | Draw a closed 3-vertex triangle |
| `draws_arrow` | UI Mutation | Draw a directional arrow from start to end anchor |
| `draws_measurement` | UI Mutation | Draw a price/time ruler showing delta, percentage, and bar count |
| `draws_modify` | UI Mutation | Modify coordinates, style, text, `targetIndicatorId`, or lock state of an existing drawing |
| `draws_remove` | UI Mutation | Remove a specific drawing by ID |
| `draws_clear` | UI Mutation | Clear drawings (`aiOnly=true` preserves user drawings) |
| `draws_lock_all` | UI Mutation | Lock all drawings and enable global Lock All rail state |
| `draws_unlock_all` | UI Mutation | Unlock all drawings and disable global Lock All rail state |
| `draws_set_lock_state` | UI Mutation | Set global drawings lock state explicitly |
| `draws_hide_all` | UI Mutation | Hide all drawings on the chart |
| `draws_show_all` | UI Mutation | Show all drawings on the chart |

### 5.2 Technical Indicators (`indicators_*` — 10 tools)
| Tool Name | Mode | Description |
|---|---|---|
| `indicators_list_available` | Read-only | List all built-in and loaded custom plugin indicators with parameter schemas |
| `indicators_add` | UI Mutation | Attach a built-in indicator (`SMA`, `EMA`, `VWMA`, `RSI`, `MACD`, `BANDS`, `ATR`, `SUPERTREND`, `STOCHASTIC`, `OBV`) |
| `indicators_add_custom` | UI Mutation | Attach a loaded custom plugin indicator |
| `indicators_modify` | UI Mutation | Update parameters, colors, widths, line styles, levels, fills, or visibility of an existing indicator |
| `indicators_remove` | UI Mutation | Remove an indicator by ID |
| `indicators_clear` | UI Mutation | Clear indicators (`aiOnly=true` preserves user indicators) |
| `indicators_get_chart` | Read-only | List indicators currently attached to the chart tab |
| `indicators_list_session` | Read-only | List indicators registered for a specific session ID |
| `indicators_get_value` | Read-only | Read the latest or shifted (`shift=0,1,...`) calculated value of an indicator buffer |
| `indicators_get_buffer_range` | Read-only | Retrieve a historical slice of calculated indicator buffer values |

### 5.3 Chart Navigation & Viewport (`chart_*` — 13 tools)
| Tool Name | Mode | Description |
|---|---|---|
| `chart_get_zoom_state` | Read-only | Get candle width, visible candle count, and visible time/price range |
| `chart_zoom_in` | UI Mutation | Zoom in (enlarge candles) |
| `chart_zoom_out` | UI Mutation | Zoom out (fit more candles) |
| `chart_reset_zoom` | UI Mutation | Reset zoom and pan to default live view |
| `chart_set_zoom` | UI Mutation | Set exact `candleWidth` (`2.0–50.0`) or `zoomFactor` |
| `chart_zoom_to_range` | UI Mutation | Fit viewport to `visibleCandles` or `[startTime, endTime]` |
| `chart_zoom_to_area` | UI Mutation | Zoom into a 2D time and price bounding box |
| `chart_set_price_scale` | UI Mutation | Set manual vertical price bounds or toggle auto-scale |
| `chart_reset_price_scale` | UI Mutation | Restore automatic vertical price scaling |
| `chart_scroll` | UI Mutation | Pan viewport by delta candles, to timestamp, or to start/end |
| `chart_switch_timeframe` | UI Mutation | Switch chart timeframe (`1m`, `3m`, `5m`, `15m`, `30m`, `1h`, `2h`, `4h`, `6h`, `12h`, `1d`, `1w`) |
| `chart_get_overlay_state` | Read-only | Get visibility states of chart overlays *(HTTP / AI Copilot only)* |
| `chart_set_overlay_visibility` | UI Mutation | Configure chart overlay visibility *(HTTP / AI Copilot only)* |

### 5.4 Market Data (`market_*` — 8 tools)
| Tool Name | Mode | Description |
|---|---|---|
| `market_get_instruments` | Read-only | Search tradable instruments and contract specs in PTView's catalog cache |
| `market_get_ticker` | Read-only | Get latest price, bid/ask, 24h high/low, and volume |
| `market_get_candles` | Read-only | Get recent OHLCV candles for a symbol and timeframe |
| `market_get_candles_from_time` | Read-only | Get up to 300 historical OHLCV candles ending at an ISO 8601 `endTime` |
| `market_get_funding_rate` | Read-only | Get current and predicted perpetual swap funding rate |
| `market_get_open_interest` | Read-only | Get current open interest (contracts and coin amount) |
| `market_get_sentiment_ratios` | Read-only | Get Long/Short account ratio and Taker buy/sell volume ratios |
| `market_get_order_book` | Read-only | Get Level 2 order book depth, spread, and liquidity metrics |

### 5.5 Market Intelligence (`intel_*` — 7 tools)
| Tool Name | Mode | Description |
|---|---|---|
| `intel_get_fear_greed_index` | Read-only | Get Crypto Fear & Greed Index history (`1–30` days) |
| `intel_get_global_overview` | Read-only | Get total market cap, 24h volume, BTC.D, and ETH.D |
| `intel_get_volatility_metrics` | Read-only | Calculate Historical Volatility (HV %), ATR, and 24h range % |
| `intel_get_coin_fundamentals` | Read-only | Get coin rank, market cap, supply, and profile stats |
| `intel_get_crypto_news` | Read-only | Fetch latest crypto news headlines and sentiment tags |
| `intel_get_news_article_content` | Read-only | Crawl and extract full readable text from a news URL |
| `intel_search_web` | Read-only | Perform an external web search for macro or project catalysts |

### 5.6 Workspace, Accounts & Notifications (`workspace_*`, `accounts_*`, `notify_*` — 12 tools)
| Tool Name | Mode | Description |
|---|---|---|
| `workspace_list_tabs` | Read-only | List all open workspace tabs (`tabId`, title, layout mode, child charts, active status) |
| `workspace_switch_tab` | UI Mutation | Switch active workspace tab by `tabId`, title, or 1-based index |
| `workspace_create_tab` | UI Mutation | Open a new workspace tab with optional `symbol`, `exchange`, `timeframe`, and `title` |
| `workspace_close_tab` | UI Mutation | Close an open tab by `tabId` or index (rejects closing the last remaining tab) |
| `workspace_set_layout` | UI Mutation | Change grid layout of active tab (`Single`, `SplitVertical`, `SplitHorizontal`, `Grid3`, `Grid2x2`) |
| `workspace_switch_symbol` | UI Mutation | Switch the trading symbol and optionally the exchange provider (`OKX`, `Binance`, `Bybit`) on the active or specified chart session |
| `workspace_list_sessions` | Read-only | List all open chart sessions across all tabs (`sessionId`, exchange, symbol, timeframe, tab title, active state) |
| `workspace_get_session_snapshot` | Read-only | Get combined session, attached indicators, and viewport zoom snapshot *(HTTP / AI Copilot only)* |
| `accounts_list` | Read-only | List configured AI provider profiles *(HTTP / AI Copilot only)* |
| `accounts_get_active` | Read-only | Get the currently active AI provider profile *(HTTP / AI Copilot only)* |
| `accounts_switch_active` | State Mutation | Switch active AI provider profile by name or ID *(HTTP / AI Copilot only)* |
| `notify_send` | Notification | Dispatch status bar and HTML-formatted Telegram Bot alerts |

