---
sidebar_position: 6
title: MCP Server & Danh Mục 77 Tools
---

# MCP Server Ngoài & Danh Mục 77 Công Cụ

PTView cho phép các AI agent bên ngoài (như **VS Code Copilot**, **Cursor**, **Claude Desktop** và **Antigravity**) kết nối trực tiếp vào dữ liệu thị trường, chỉ báo, điều hướng biểu đồ, vẽ kỹ thuật, quản lý không gian làm việc đa tab và thông báo Telegram thông qua chuẩn **Model Context Protocol (MCP)**.

:::warning Chỉ Phục Vụ Nghiên Cứu — Miễn Trừ Rủi Ro AI & Giao Dịch
Các công cụ MCP chỉ đọc dữ liệu thị trường và tự động hóa biểu đồ cục bộ, không hỗ trợ đặt lệnh thật trên sàn. AI agent bên ngoài vẫn có thể hiểu sai ngữ cảnh hoặc chỉ báo; luôn tự kiểm chứng độc lập và xem thêm tại [Miễn Trừ Rủi Ro Giao Dịch & AI Copilot](../legal/risk-and-ai-disclaimer.md).
:::

---

## 1. Hai Chế Độ Kết Nối

PTView hỗ trợ 2 cơ chế kết nối cho MCP client bên ngoài:

| Giao thức | Điểm kết nối | Số lượng Tool | Xác thực | Phù hợp với |
|---|---|---|---|---|
| **HTTP MCP Server nhúng** | `http://127.0.0.1:47821/mcp` | **77 tools** | Bearer Token (`Authorization: Bearer <token>`) | VS Code Copilot, Cursor, Antigravity, HTTP JSON-RPC client |
| **Stdio MCP Server riêng** | `PTView.Mcp.exe` | **71 tools** | Named Pipe cục bộ tới `PTView.Desktop` | Claude Desktop và các host chỉ hỗ trợ stdio |

:::note Khác Biệt Nhỏ Giữa Hai Chế Độ
Cả hai chế độ đều dùng chung bộ công cụ biểu đồ, chỉ báo, vẽ kỹ thuật, dữ liệu thị trường, quản lý đa tab và thông báo; riêng các lệnh điều khiển phiên/tài khoản (`workspace_get_session_snapshot`, `chart_get_overlay_state`, `chart_set_overlay_visibility`, `accounts_list`, `accounts_get_active`, `accounts_switch_active`) đi trực tiếp qua HTTP MCP Server nhúng và AI Copilot trong app.
:::

---

## 2. Cấu hình HTTP MCP Server Nhúng

1. Mở **Cài đặt AI** trong PTView và chuyển sang tab **`MCP (AI agent)`**.
2. Tích bật **Enable HTTP MCP Server**.
3. Kiểm tra hoặc đổi **Port** (`1024–65535`, mặc định `47821`) và **Bearer Auth Token** (mặc định tự sinh chuỗi GUID 32 ký tự hex).
4. Bấm **Lưu** — `McpHttpServerService` khởi chạy ngay tại `http://127.0.0.1:<port>/mcp/`.
5. Copy đoạn JSON cấu hình hiển thị sẵn trong hộp thoại vào file cấu hình MCP client của bạn (ví dụ `.vscode/mcp.json` hoặc cấu hình MCP của Cursor):

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
Mọi request phải kèm header `Authorization: Bearer <your-auth-token>`:
- **`GET /mcp/`**: Kiểm tra trạng thái hoạt động (`status`, `server`, `version`, `port`, `toolsCount`).
- **`POST /mcp/`**: JSON-RPC `2.0` (`protocolVersion: "2024-11-05"`) hỗ trợ `initialize`, `notifications/initialized`, `ping`, `tools/list` và `tools/call`.

---

## 3. Cấu hình Stdio MCP Server (`PTView.Mcp`)

Với các MCP client dùng stdio (như Claude Desktop), trỏ đường dẫn tới `PTView.Mcp.exe` khi `PTView.Desktop` đang chạy:

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

:::info Luôn Mở Sẵn PTView Desktop
`PTView.Mcp.exe` giao tiếp với giao diện desktop qua Named Pipe cục bộ (`GuiBridgeClient`), vì vậy `PTView.Desktop` phải đang mở trước khi gọi tool.
:::

---

## 4. Quy Ước Đặt Tên (`<domain>_<action>`)

Toàn bộ công cụ tuân theo chuẩn `<domain>_<action>` (`snake_case`, khớp `^[a-zA-Z0-9_-]{1,64}$`) chia thành 8 nhóm để tương thích hoàn toàn (không phát sinh cảnh báo dấu `.`) trên VS Code, Cursor, Claude Desktop, OpenAI và Gemini:
- `draws_*` (27) — Vẽ đối tượng kỹ thuật, vùng giá, Fibonacci, khóa và ẩn/hiện hình vẽ
- `indicators_*` (10) — Chỉ báo tích hợp sẵn & plugin tùy biến, đọc giá trị buffer
- `chart_*` (13) — Thu phóng, cuộn, thang giá, lớp phủ và chuyển khung thời gian
- `market_*` (8) — Danh sách cặp giao dịch, ticker, nến OHLCV, sổ lệnh, funding, OI, tỷ lệ Long/Short
- `intel_*` (7) — Chỉ số Fear & Greed, tổng quan thị trường, biến động, cơ bản coin, tin tức, tìm kiếm web
- `workspace_*` (8) — Danh sách tab làm việc, bố cục lưới grid, phiên biểu đồ, đổi cặp tiền/sàn và snapshot
- `accounts_*` (3) — Xem và chuyển đổi cấu hình tài khoản AI
- `notify_*` (1) — Gửi cảnh báo lên thanh trạng thái và Telegram Bot

:::tip Tương Thích Ngược Tên Công Cụ
Để đảm bảo tương thích ngược, cả HTTP MCP Server nhúng, Stdio MCP Server và AI Copilot nội bộ vẫn tự động ánh xạ các tên cũ dùng dấu chấm (`draws.horizontal_line`) hoặc hai gạch dưới (`draws__horizontal_line`) về tên chuẩn `<domain>_<action>` khi thực thi.
:::

---

## 5. Danh Mục Đầy Đủ 77 Công Cụ

### 5.1 Tự động hóa Vẽ Kỹ thuật (`draws_*` — 27 tools)
| Tên Tool | Loại | Mô tả |
|---|---|---|
| `draws_list` | Chỉ đọc | Liệt kê tất cả đối tượng vẽ đang có trên biểu đồ |
| `draws_horizontal_line` | Thao tác UI | Vẽ đường giá ngang (trên biểu đồ giá hoặc khung chỉ báo phụ) |
| `draws_vertical_line` | Thao tác UI | Vẽ đường mốc thời gian dọc |
| `draws_trend_line` | Thao tác UI | Vẽ đường xu hướng nối 2 điểm `(time, price)` |
| `draws_ray` | Thao tác UI | Vẽ tia xuất phát từ điểm đầu kéo dài vô hạn qua điểm thứ hai |
| `draws_extended_line` | Thao tác UI | Vẽ đường thẳng kéo dài vô hạn về cả 2 phía qua 2 điểm neo |
| `draws_trend_angle` | Thao tác UI | Vẽ đường xu hướng kèm góc nghiêng hiển thị theo độ |
| `draws_rectangle_zone` | Thao tác UI | Vẽ vùng hình chữ nhật tô màu (Order Block, FVG, Cung/Cầu) |
| `draws_text_annotation` | Thao tác UI | Đặt ghi chú văn bản tại tọa độ `(time, price)` |
| `draws_emoji_marker` | Thao tác UI | Đặt biểu tượng đánh dấu tín hiệu (vd 🎯, 🚀, ⚠️) lên biểu đồ |
| `draws_fib_retracement` | Thao tác UI | Vẽ Fibonacci thoái lui 2 điểm neo với mức & màu tùy chỉnh |
| `draws_fib_extension` | Thao tác UI | Vẽ Fibonacci mở rộng theo xu hướng 3 điểm neo |
| `draws_fib_time_zones` | Thao tác UI | Vẽ các đường chu kỳ thời gian Fibonacci dọc |
| `draws_fib_fan` | Thao tác UI | Vẽ quạt kháng cự tốc độ Fibonacci |
| `draws_fib_channel` | Thao tác UI | Vẽ kênh Fibonacci song song 3 điểm |
| `draws_ellipse` | Thao tác UI | Vẽ hình elip/tròn theo khung bao 2 điểm |
| `draws_triangle` | Thao tác UI | Vẽ tam giác khép kín 3 đỉnh |
| `draws_arrow` | Thao tác UI | Vẽ mũi tên định hướng từ điểm đầu tới điểm cuối |
| `draws_measurement` | Thao tác UI | Vẽ thước đo biến động giá, phần trăm và số thanh nến |
| `draws_modify` | Thao tác UI | Chỉnh sửa tọa độ, màu sắc, kiểu nét, chữ, `targetIndicatorId` hoặc trạng thái khóa của hình vẽ có sẵn |
| `draws_remove` | Thao tác UI | Xóa một hình vẽ cụ thể theo ID |
| `draws_clear` | Thao tác UI | Xóa hàng loạt hình vẽ (`aiOnly=true` giữ lại nét vẽ thủ công của người dùng) |
| `draws_lock_all` | Thao tác UI | Khóa toàn bộ hình vẽ và bật nút Khóa trên thanh công cụ |
| `draws_unlock_all` | Thao tác UI | Mở khóa toàn bộ hình vẽ và tắt nút Khóa trên thanh công cụ |
| `draws_set_lock_state` | Thao tác UI | Đặt trực tiếp trạng thái khóa toàn bộ hình vẽ |
| `draws_hide_all` | Thao tác UI | Ẩn toàn bộ hình vẽ trên biểu đồ |
| `draws_show_all` | Thao tác UI | Hiện lại toàn bộ hình vẽ trên biểu đồ |

### 5.2 Chỉ báo Kỹ thuật (`indicators_*` — 10 tools)
| Tên Tool | Loại | Mô tả |
|---|---|---|
| `indicators_list_available` | Chỉ đọc | Liệt kê tất cả chỉ báo tích hợp & plugin tùy biến kèm tham số |
| `indicators_add` | Thao tác UI | Gắn chỉ báo tích hợp (`SMA`, `EMA`, `VWMA`, `RSI`, `MACD`, `BANDS`, `ATR`, `SUPERTREND`, `STOCHASTIC`, `OBV`) |
| `indicators_add_custom` | Thao tác UI | Gắn chỉ báo từ plugin ngoài đã nạp |
| `indicators_modify` | Thao tác UI | Cập nhật tham số, màu, độ dày, kiểu đường, mức tham chiếu, vùng tô hoặc hiển thị |
| `indicators_remove` | Thao tác UI | Gỡ một chỉ báo theo ID |
| `indicators_clear` | Thao tác UI | Xóa chỉ báo (`aiOnly=true` chỉ xóa chỉ báo do AI thêm) |
| `indicators_get_chart` | Chỉ đọc | Lấy danh sách chỉ báo đang gắn trên biểu đồ |
| `indicators_list_session` | Chỉ đọc | Liệt kê chỉ báo đã đăng ký của một session ID |
| `indicators_get_value` | Chỉ đọc | Đọc giá trị mới nhất hoặc lùi nến (`shift=0,1,...`) của một buffer chỉ báo |
| `indicators_get_buffer_range` | Chỉ đọc | Lấy chuỗi giá trị lịch sử đã tính của một buffer chỉ báo |

### 5.3 Điều hướng & Thu phóng Biểu đồ (`chart_*` — 13 tools)
| Tên Tool | Loại | Mô tả |
|---|---|---|
| `chart_get_zoom_state` | Chỉ đọc | Xem độ rộng nến, số nến hiển thị và vùng thời gian/giá hiện tại |
| `chart_zoom_in` | Thao tác UI | Phóng to nến trên biểu đồ |
| `chart_zoom_out` | Thao tác UI | Thu nhỏ nến để xem nhiều thanh hơn |
| `chart_reset_zoom` | Thao tác UI | Đặt lại mức thu phóng và cuộn về mặc định |
| `chart_set_zoom` | Thao tác UI | Đặt độ rộng nến chính xác (`2.0–50.0`) hoặc hệ số nhân `zoomFactor` |
| `chart_zoom_to_range` | Thao tác UI | Thu phóng theo số lượng `visibleCandles` hoặc khoảng `[startTime, endTime]` |
| `chart_zoom_to_area` | Thao tác UI | Phóng to vào vùng bao 2D theo thời gian và mức giá |
| `chart_set_price_scale` | Thao tác UI | Đặt giới hạn trục giá thủ công hoặc bật/tắt tự động co giãn |
| `chart_reset_price_scale` | Thao tác UI | Khôi phục tự động co giãn trục giá dọc |
| `chart_scroll` | Thao tác UI | Cuộn ngang theo số lượng nến, tới mốc thời gian hoặc về đầu/cuối |
| `chart_switch_timeframe` | Thao tác UI | Chuyển khung thời gian biểu đồ (`1m`, `3m`, `5m`, `15m`, `30m`, `1h`, `2h`, `4h`, `6h`, `12h`, `1d`, `1w`) |
| `chart_get_overlay_state` | Chỉ đọc | Xem trạng thái hiển thị các lớp phủ biểu đồ *(chỉ có trên HTTP / AI Copilot)* |
| `chart_set_overlay_visibility` | Thao tác UI | Điều chỉnh ẩn/hiện lớp phủ biểu đồ *(chỉ có trên HTTP / AI Copilot)* |

### 5.4 Dữ liệu Thị trường (`market_*` — 8 tools)
| Tên Tool | Loại | Mô tả |
|---|---|---|
| `market_get_instruments` | Chỉ đọc | Tra cứu cặp giao dịch và thông số hợp đồng từ cache catalog |
| `market_get_ticker` | Chỉ đọc | Lấy giá khớp gần nhất, bid/ask, cao/thấp 24h và khối lượng |
| `market_get_candles` | Chỉ đọc | Lấy chuỗi nến OHLCV gần nhất cho cặp tiền & khung thời gian |
| `market_get_candles_from_time` | Chỉ đọc | Lấy tối đa 300 nến OHLCV lịch sử kết thúc tại mốc ISO 8601 `endTime` |
| `market_get_funding_rate` | Chỉ đọc | Lấy funding rate hiện tại và dự kiến của hợp đồng vĩnh cửu |
| `market_get_open_interest` | Chỉ đọc | Lấy khối lượng hợp đồng mở (OI) hiện tại |
| `market_get_sentiment_ratios` | Chỉ đọc | Lấy tỷ lệ Long/Short và tỷ lệ khối lượng Taker Mua/Bán |
| `market_get_order_book` | Chỉ đọc | Lấy độ sâu sổ lệnh L2, chênh lệch spread và thanh khoản |

### 5.5 Dữ liệu Thông minh & Tin tức (`intel_*` — 7 tools)
| Tên Tool | Loại | Mô tả |
|---|---|---|
| `intel_get_fear_greed_index` | Chỉ đọc | Lấy lịch sử chỉ số Sợ hãi & Tham lam (`1–30` ngày) |
| `intel_get_global_overview` | Chỉ đọc | Lấy tổng vốn hóa thị trường, khối lượng 24h, BTC.D và ETH.D |
| `intel_get_volatility_metrics` | Chỉ đọc | Tính biến động lịch sử (HV %), ATR và biên độ dao động 24h % |
| `intel_get_coin_fundamentals` | Chỉ đọc | Xem thứ hạng, vốn hóa, nguồn cung và thông số cơ bản của coin |
| `intel_get_crypto_news` | Chỉ đọc | Lấy các dòng tin tức crypto mới nhất kèm đánh giá cảm xúc |
| `intel_get_news_article_content` | Chỉ đọc | Trích xuất toàn văn nội dung từ URL bài báo crypto |
| `intel_search_web` | Chỉ đọc | Tìm kiếm web bên ngoài để điều tra tin tức vĩ mô hoặc sự kiện dự án |

### 5.6 Bàn làm việc, Tài khoản & Thông báo (`workspace_*`, `accounts_*`, `notify_*` — 12 tools)
| Tên Tool | Loại | Mô tả |
|---|---|---|
| `workspace_list_tabs` | Chỉ đọc | Liệt kê tất cả tab làm việc (`tabId`, tiêu đề, chế độ lưới grid, danh sách chart con, trạng thái active) |
| `workspace_switch_tab` | Thao tác UI | Chuyển tab làm việc đang active theo `tabId`, tiêu đề hoặc số thứ tự tab (1-based) |
| `workspace_create_tab` | Thao tác UI | Mở một tab làm việc mới kèm tùy chọn `symbol`, `exchange`, `timeframe` và `title` |
| `workspace_close_tab` | Thao tác UI | Đóng một tab làm việc theo `tabId` hoặc số thứ tự (từ chối đóng tab cuối cùng) |
| `workspace_set_layout` | Thao tác UI | Đổi bố cục lưới của tab active (`Single`, `SplitVertical`, `SplitHorizontal`, `Grid3`, `Grid2x2`) |
| `workspace_switch_symbol` | Thao tác UI | Đổi cặp giao dịch (`symbol`) và tùy chọn đổi sàn cung cấp dữ liệu (`OKX`, `Binance`, `Bybit`) ngay trên phiên biểu đồ hiện tại |
| `workspace_list_sessions` | Chỉ đọc | Liệt kê tất cả phiên biểu đồ đang mở trên toàn bộ tab (`sessionId`, sàn, cặp tiền, khung thời gian, tiêu đề tab) |
| `workspace_get_session_snapshot` | Chỉ đọc | Lấy snapshot tổng hợp gồm phiên, chỉ báo đang gắn và trạng thái zoom *(chỉ có trên HTTP / AI Copilot)* |
| `accounts_list` | Chỉ đọc | Liệt kê danh sách tài khoản AI đã cấu hình *(chỉ có trên HTTP / AI Copilot)* |
| `accounts_get_active` | Chỉ đọc | Lấy thông tin tài khoản AI đang kích hoạt *(chỉ có trên HTTP / AI Copilot)* |
| `accounts_switch_active` | Đổi trạng thái | Chuyển tài khoản AI đang dùng theo tên hoặc ID *(chỉ có trên HTTP / AI Copilot)* |
| `notify_send` | Thông báo | Gửi cảnh báo lên thanh trạng thái và kênh Telegram Bot định dạng HTML |

