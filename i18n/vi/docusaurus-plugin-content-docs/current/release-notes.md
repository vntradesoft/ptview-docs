---
sidebar_position: 3
title: Nhật Ký Phát Hành (Release Notes)
---

# Nhật Ký Phát Hành (Release Notes)

Theo dõi các tính năng mới, cải tiến hiệu năng, sửa lỗi và thay đổi API của **`PTView.SDK`** qua từng phiên bản **PtView Workstation**.

---

## `v0.2.1` — Bản Vá Ổn Định / Stable Hotfix (14/11/2026)

:::tip Bản Vá Chính Thức (Stable Hotfix)
`v0.2.1` khắc phục triệt để tình trạng tiêu đề cửa sổ, hộp thoại About và một số chuỗi giao diện cũ vẫn hiển thị chữ `"Beta"` khi nâng cấp từ bản Beta lên bản Stable.
:::

- **Hiển Thị Đúng Nhãn Stable:** Tiêu đề cửa sổ (`WindowTitle`), nhãn kênh trong `AboutDialog` và môi trường telemetry nay xác định trực tiếp từ phiên bản thực tế của file chạy thay vì đọc từ cấu hình kênh cập nhật trong `settings.json`.
- **Dọn Sạch Chuỗi Beta Cũ:** Loại bỏ các chuỗi hardcode `"Platinum Trade Community Beta"` và `"Beta Preview"` còn sót trong bộ ngôn ngữ EN/VI.

---

## `v0.2.0` — Kênh Ổn Định / Stable (14/11/2026)

:::tip Bản Phát Hành Chính Thức (Stable)
`v0.2.0` là phiên bản **Stable** chính thức, tổng hợp toàn bộ tính năng từ chuỗi `0.2.0-beta` cùng các nâng cấp mới về AI Copilot, Biểu đồ và Bản địa hóa.
:::

### AI Copilot: `@` Mention, 21 Gợi Ý Quick Ask & Bản Địa Hóa
- **Tự Động Gợi Ý Ngữ Cảnh `@` Mention:** Gõ `@` trong khung chat AI (hoặc chọn từ menu `+`) để đính kèm nhanh mã giao dịch, khung thời gian và ngữ cảnh biểu đồ vào câu hỏi.
- **21 Gợi Ý Quick Ask Kết Hợp MCP:** Mở rộng Quick Ask với 21 mẫu câu hỏi chuyên sâu dùng công cụ MCP kèm bộ lọc theo danh mục.
- **Bản Địa Hóa Tiếng Việt:** Việt hóa các lệnh slash command, phản hồi và nhãn giao diện liên quan trong AI Chat.

### Biểu Đồ: Tải Lịch Sử, Tự Động Cuộn 3/4 & Cảm Ứng Context Menu
- **Tải Lịch Sử Nến & Auto-Scroll 3/4:** Khắc phục các trường hợp tải nến lịch sử, bổ sung chế độ tự động cuộn 3/4 khung nhìn và công cụ chẩn đoán biểu đồ.
- **Chạm Giữ Mở Context Menu:** Hỗ trợ chạm giữ (press-and-hold) trên màn hình cảm ứng để mở menu ngữ cảnh biểu đồ và chạm ra ngoài để đóng.

---

## `v0.2.0-beta.7` — Kênh Beta (13/11/2026)

:::note Bản Phát Hành Trải Nghiệm Sớm (Beta)
`v0.2.0-beta.7` là bản phát hành trải nghiệm sớm trên **Kênh Beta (Pre-release)**. Người dùng chọn kênh **Beta** trong **Settings -> Updates** sẽ nhận bản cập nhật delta tự động từ `v0.2.0-beta.6`.
:::

### Nâng Cấp Khung Nhập AI Copilot, Model Picker & Cấu Hình Ban Đầu
- **Khung Nhập Chat Mới:** Bổ sung menu **`+`** (Lệnh `/`, Công cụ MCP `#`, Quick Ask `⚡`, Khóa Symbol/Timeframe) và tinh chỉnh khoảng cách thanh công cụ gọn gàng, không viền.
- **Chọn Nhanh Model (Model Picker):** Đổi model trực tiếp ở chân khung chat với danh sách preset có sẵn, tự động quét model từ API của nhà cung cấp và cache theo từng tài khoản.
- **Thống Kê Token Tháng (Monthly Usage):** Theo dõi tổng token tích lũy theo tháng và xem chi tiết theo từng nhà cung cấp ngay trong khung chat.
- **Yêu Cầu Cấu Hình Tài Khoản AI:** Loại bỏ tài khoản mặc định rỗng và hiển thị hướng dẫn cấu hình tài khoản AI trước khi bắt đầu trò chuyện.

### 77 Công Cụ MCP & Cảm Ứng Đa Điểm Trên Biểu Đồ
- **`workspace_switch_symbol` (77 Công Cụ MCP):** Mở rộng bộ công cụ MCP lên **77 công cụ**, hỗ trợ chuyển nhanh mã theo dạng `EXCHANGE:SYMBOL` và tự động đồng bộ ngữ cảnh hội thoại AI.
- **Cảm Ứng Đa Điểm & Zoom/Hit-Testing Kiểu TradingView:** Hỗ trợ chụm/tách hai ngón tay để zoom, vuốt cuộn biểu đồ có quán tính, chạm đúp trên màn hình cảm ứng và tối ưu độ chính xác khi zoom/chọn nét vẽ & chỉ báo.

---

## `v0.2.0-beta.6` — Kênh Beta (13/11/2026)

:::note Bản Phát Hành Trải Nghiệm Sớm (Beta)
`v0.2.0-beta.6` là bản phát hành trải nghiệm sớm trên **Kênh Beta (Pre-release)**. Người dùng chọn kênh **Beta** trong **Settings -> Updates** sẽ nhận bản cập nhật delta tự động từ `v0.2.0-beta.5`.
:::

### Mô Hình Lai Multi-Tab & Lưới 4 Biểu Đồ
- **Thanh Tab Làm Việc (Workspace Tab Strip):** Hỗ trợ mở nhiều Tab độc lập, mỗi Tab chứa lưới từ 1 đến 4 biểu đồ (`1 màn`, `2 chia dọc`, `2 chia ngang`, `3 màn`, `Lưới 2×2`) kèm vạch accent làm nổi bật tab đang chọn. Bản Community hỗ trợ tối đa **3 tab**; bản Pro **không giới hạn tab**.
- **Quản Lý Tab & Phím Tắt Tiêu Chuẩn:** Nhấp đúp tiêu đề Tab để đổi tên trực tiếp, chuột phải để **Đổi tên / Nhân bản / Đóng Tab**, hoặc giữ <kbd>Ctrl</kbd> + Nhấp đúp trong Market Watch để mở nhanh mã mới sang Tab mới. Bổ sung bộ phím tắt chuẩn (`Ctrl+T`, `Ctrl+W`, `Ctrl+Tab`, `Ctrl+1..9`, `Ctrl+N`, `Ctrl+Shift+W`, và `Alt+1..5` đổi nhanh bố cục lưới).
- **Đồng Bộ Mã & Con Trỏ 2 Chiều Trong Tab:** Bổ sung 2 nút icon vuông trên thanh Tab (và menu chuột phải) hỗ trợ song ngữ EN/VI:
  - **Đồng bộ mã (Sync Symbol):** Đổi mã giao dịch đồng loạt cho các ô trong cùng Tab nhưng giữ nguyên khung thời gian và chỉ báo riêng từng ô.
  - **Đồng bộ con trỏ 2 chiều (2D Sync Crosshair):** Đồng bộ đường dọc thời gian (kèm nhãn giờ) cho toàn bộ ô trong Tab và đường ngang giá (kèm nhãn giá) cho các ô đang xem cùng mã coin.

### Menu Charts, Context Menu & Cô Lập Tùy Chỉnh Từng Biểu Đồ
- **Đồng Bộ Menu `Charts` Với Menu Chuột Phải:** Sắp xếp lại menu **Charts** theo nhóm (`Thu phóng`, `Chủ đề màu nến`, `Về đầu / Đến cuối biểu đồ`, `Tải lại biểu đồ`, `Tự động tỷ lệ giá`, `Đường giá hiện tại`, `Chỉ báo → Quản lý chỉ báo...`, `Đối tượng vẽ → Danh sách đối tượng vẽ...`), đồng thời thêm submenu khung thời gian và nút tải lại biểu đồ.
- **Cô Lập Setting Hiển Thị & Drawing Manager Theo Từng Biểu Đồ:** Đổi màu nến (`CandlePreset`), đường giá hiện tại hay chế độ hiển thị dữ liệu chỉ tác động lên đúng biểu đồ đang chọn và lưu riêng trong Workspace; bổ sung tùy chọn **"Áp dụng cài đặt hiển thị cho tất cả biểu đồ đang mở"** trong **Settings -> Chart**.

### AI Copilot (76 Công Cụ MCP) & Tinh Chỉnh Giao Diện
- **76 Công Cụ MCP Quản Lý Multi-Tab:** Hỗ trợ AI Copilot thao tác tab, bố cục lưới và đồng bộ tab; cải thiện xử lý hủy stream và timeout mạng.
- **Giao Diện & Phân Quyền:** Thêm spinner tải dữ liệu đồng bộ theme, nạp bố cục shell trước khi hiện cửa sổ chính, đồng bộ màu nút cuộn về cuối, và kiểm soát chặt chỉ báo/bố cục Pro trên bản Community.

---

## `v0.2.0-beta.5` — Kênh Beta (12/11/2026)

- **Tăng Giới Hạn Chỉ Báo Bản Community:** Nâng số lượng chỉ báo tối đa trên mỗi biểu đồ của bản Community từ **3 lên 5**.
- **Báo Cáo Sự Cố & Hỗ Trợ:** Bổ sung hộp thoại **Report Issue** trong menu **Help**, các liên kết hỗ trợ và cập nhật EULA/Chính sách bảo mật (`v1.0.1`).

---

## `v0.2.0-beta.4` — Kênh Beta (11/11/2026)

:::note Bản Phát Hành Trải Nghiệm Sớm (Beta)
`v0.2.0-beta.4` là bản phát hành trải nghiệm sớm trên **Kênh Beta (Pre-release)**. Người dùng chọn kênh **Beta** trong **Settings -> Updates** sẽ nhận bản cập nhật delta tự động từ `v0.2.0-beta.3`.
:::

### Thống Nhất Thương Hiệu `PtView Workstation`
- **Tên Sản Phẩm & Phụ Đề Thống Nhất**: Chuẩn hóa đồng bộ tên **PtView Workstation** (*Multi-Exchange Crypto Trading Platform* / *Nền Tảng Giao Dịch Crypto Đa Sàn*) trên toàn bộ giao diện ứng dụng, hộp thoại, watermark ảnh chụp màn hình, văn bản pháp lý EULA, bộ cài đặt và tài liệu.

### Menu Help, Tab License & Hộp Thoại About
- **Tách Riêng Tab `License` Trong Settings**: Đưa phần kích hoạt bản quyền, theo dõi dùng thử Pro 28 ngày và Machine ID sang tab **Settings -> License** riêng biệt.
- **Mở Rộng Menu `Help` & Tinh Gọn `AboutDialog`**: Bổ sung lối tắt nhanh tới **Documentation**, **PTView.SDK**, **View License** và **Privacy Statement** ngay trong menu **Help**, đồng thời làm gọn hộp thoại **About**.

### Nâng Cấp Cổng Tài Liệu
- **Hướng Dẫn Mới**: Bổ sung bài hướng dẫn từng bước cho [Thiết Lập API Key AI](app/ai-api-keys-setup.md) và [Cài Đặt Telegram Bot](app/telegram-bot-setup.md) kèm ảnh chụp màn hình và sơ đồ trực quan song ngữ.

---

## `v0.2.0-beta.3` — Kênh Beta (11/11/2026)

:::note Bản Phát Hành Trải Nghiệm Sớm (Beta)
`v0.2.0-beta.3` là bản phát hành trải nghiệm sớm trên **Kênh Beta (Pre-release)**. Người dùng chọn kênh **Beta** trong **Settings -> Updates** sẽ nhận bản cập nhật delta tự động (`~1.3 MB`) từ `v0.2.0-beta.2`.
:::

### Mở Rộng Đa Sàn (29 Sàn Giao Dịch)
- **Hỗ Trợ Đầy Đủ 29 Sàn CryptoClients.Net**: Mở rộng từ 3 sàn lên toàn bộ **29 sàn giao dịch** (`OKX`, `Binance`, `Bybit`, `Bitget`, `GateIo`, `Kucoin`, `Mexc`, `HTX`, `Kraken`, `Coinbase`, `HyperLiquid`, `BingX`, `Bitfinex`, `CryptoCom`, `Aster`, `Bitunix`, `BloFin`, `DeepCoin`, `WhiteBit`, `XT`, `Bitstamp`, `CoinW`, `Lighter`, `Toobit`, `Weex`, `LBank`, `Pionex`, `Tapbit`, `Upbit`), chuẩn hóa `InstrumentType` đồng nhất trên REST, WebSocket và danh mục mã giao dịch.
- **Setup Wizard & Cấu Hình Mặc Định**: Tự động nạp danh sách đầy đủ các sàn đã đăng ký trong Setup Wizard và cấu hình mặc định.

### AI Copilot Tác Vụ Theo Lịch (`/schedule`)
- **Lệnh `/schedule` & Bộ Chạy Nền**: Bổ sung lệnh `/schedule` trong AI Copilot cùng `AiScheduleService`, vòng lặp thực thi nền, popup quản lý lịch chạy và cài đặt lịch trình. Xem thêm [Hướng Dẫn AI Copilot](app/ai-copilot.md).

### Logging, Chẩn Đoán & Báo Cáo Lỗi Telemetry
- **Serilog Logging Toàn Ứng Dụng & Xuất Diagnostics**: Bổ sung file log xoay vòng `app-*.log` và `app-error-*.log` xuyên suốt các tầng Desktop, Application, MarketData, Exchanges, Indicators, PluginHost, PluginWorker, Storage và Charting, tích hợp `SecretRedactor` che thông tin nhạy cảm và nút xuất gói chẩn đoán `.zip`.
- **Developer Mode & Điều Khiển Log SDK Runtime**: Bổ sung chế độ **Developer Mode** và tab **Settings -> Advanced** tập trung cấu hình App/AI logs cùng công tắc bật/tắt log REST, Socket và Raw của `CryptoClients.Net` lúc runtime, đồng thời tối ưu `DebugLoggerProvider`/`AiFileLogger` tránh nhiễu log từ SDK sàn.
- **Sentry Crash Reporting**: Tích hợp `SentryTelemetryService` kèm `SecretRedactor` lọc PII/đường dẫn/khóa API, breadcrumbs, chống gửi trùng lỗi trong 5 phút và tùy chọn bật/tắt (opt-out) trong **Settings -> General**.

### Tinh Chỉnh Giao Diện
- **Hộp Thoại & Menu**: Cập nhật logo PNG sắc nét (`PtView_256x256.png`) với layout rounding trong `AboutDialog`, chuẩn hóa kiểu nút biểu tượng trong `IndicatorManagerDialog` và rút gọn nhãn chụp ảnh màn hình trong menu Tools.

---

## `v0.2.0-beta.2` — Kênh Beta (10/11/2026)

### Trải Nghiệm Cập Nhật Tự Động & Kênh Phát Hành
- **Sửa Nhận Diện Cài Đặt Velopack**: Sửa lỗi xử lý dấu phân cách thư mục ở `AppPaths.DetermineIsVelopackInstalled` để bản cài đặt chuẩn được nhận diện chính xác là **Standard Installation** và chạy kiểm tra cập nhật nền khi khởi động.
- **Hộp Thoại Cập Nhật Tùy Biến (`UpdateAvailableDialog`)**: Bổ sung hộp thoại cập nhật đồng bộ theme kèm thanh tiến trình tải trực tiếp, huy hiệu kênh (`Stable` / `Beta`) và nút **Restart & Install** / **Later**.
- **Tự Động Tải Ngầm & Đồng Bộ Kênh**: Bổ sung tùy chọn `AutoDownloadUpdates` / `AutoRestartAfterUpdate`, đồng bộ kênh ngay lập tức với `VelopackUpdateService` và khóa đồng thời `SemaphoreSlim`.
- **Tab `Updates` Riêng Biệt**: Tách cài đặt cập nhật khỏi **General** thành tab **Settings -> Updates** riêng với nút đổi kênh, cho phép hạ phiên bản, URL feed tùy chỉnh và nút **Check for Updates Now**.

### Cải Tiến About & Settings
- **Cuộn Nội Dung `AboutDialog` & Hiện Đủ Huy Hiệu**: Bọc danh sách tính năng trong `ScrollViewer`, chuyển nhóm huy hiệu sang `WrapPanel` và bổ sung dòng hiển thị phiên bản hiện tại trong trang About của Settings.

---

## `v0.2.0-beta.1` — Kênh Beta (10/11/2026)

:::note Bản Phát Hành Trải Nghiệm Sớm (Beta)
`v0.2.0-beta.1` là bản phát hành trải nghiệm sớm trên **Kênh Beta (Pre-release)**. Người dùng chọn kênh **Beta** trong **Settings -> Updates** sẽ nhận bản cập nhật delta tự động từ `v0.1.0`.
:::

### Giao Diện Workstation & Lưu Trữ Workspace
- **Custom Window Chrome theo Theme**: Thay thế thanh tiêu đề gốc của Windows bằng thanh tiêu đề tùy biến đồng bộ với toàn bộ theme (Dark, Midnight OLED, CyberNavy, Light).
- **Lưu & Khôi Phục Trạng Thái Workspace**: Tự động lưu và khôi phục bố cục đa biểu đồ, danh sách chỉ báo, đối tượng vẽ và trạng thái giao diện giữa các phiên làm việc.
- **Cải Tiến Indicator Manager & Drawing Manager**:
  - Hỗ trợ kéo-thả (drag-and-drop) sắp xếp thứ tự chỉ báo, đồng bộ thứ tự sub-pane và ranh giới phân vùng.
  - Bổ sung control `LinePatternPicker`, hộp thoại chỉnh sửa bản vẽ tự thích ứng tab, kéo rộng cột và đồng bộ đầy đủ khóa ngôn ngữ EN/VI.
- **Tối Ưu Trải Nghiệm**: Hỗ trợ cuộn cảm ứng/flick trên các hộp thoại, sửa lỗi cắt icon bố cục 3/4 biểu đồ và chuẩn hóa kích thước nút tìm kiếm mã nhanh.

### Chụp Ảnh Màn Hình & Watermark Thương Hiệu
- **Watermark 4 Theme Tự Động**: Chụp nhanh biểu đồ đang chọn hoặc toàn bộ cửa sổ (`Ctrl+Shift+S` hoặc nút Camera trên thanh công cụ) kèm thanh chân trang hiển thị logo PTView, sàn giao dịch, cặp giao dịch, loại thị trường, khung thời gian và dấu thời gian.
- **Hộp Thoại Snapshot Options**: Tùy chọn vùng chụp, độ phân giải/DPI tùy chỉnh, sao chép clipboard hoặc lưu file `.png`/`.jpg`, và tự động ghép ảnh dài cho bảng báo cáo cuộn. Xem thêm [Chụp Ảnh & Watermark](app/screen-capture.md).

### AI Copilot & MCP Server Tích Hợp
- **Embedded HTTP MCP Server**: Tích hợp HTTP MCP server cục bộ (`http://127.0.0.1:47821/mcp`) có xác thực Bearer Token tại **AI Settings -> MCP (AI agent)**, cung cấp **71 công cụ** (bên cạnh 65 công cụ qua `PTView.Mcp.exe` stdio).
- **Chuẩn Hóa Tên Công Cụ MCP**: Thống nhất toàn bộ tên công cụ MCP theo tiền tố miền và dấu gạch dưới (ví dụ: `workspace_get_session_snapshot`, `chart_get_overlay_state`). Xem [MCP Server & Tham Chiếu 71 Công Cụ](app/mcp-server-and-tools.md).
- **Độ Tin Cậy AI Copilot & Thông Báo**: Cơ chế dự phòng xoay vòng nhiều API key khi gặp rate-limit, bản địa hóa thông báo lỗi Copilot, phân biệt nguồn chỉ báo/bản vẽ do User hay AI tạo, và tích hợp thông báo qua Telegram Bot.

### Biểu Đồ, Chỉ Báo & Công Cụ Vẽ
- **Box Zoom Area & Tương Tác Trục**: Bổ sung công cụ khoanh vùng phóng to (Box Zoom) và tương tác kéo-zoom trên trục giá/thời gian.
- **Nhãn Giá Trị Mới Nhất Trên Trục Giá**: Hiển thị nhãn nổi bật giá trị cuối của chỉ báo tại mép nến phải nhất trong khung nhìn và tùy chọn bật/tắt đường dẫn giá hiện tại.
- **Đồng Nhất Công Cụ Vẽ**: Chuẩn hóa mặc định Fibonacci, tô màu gradient vùng, đường xu hướng (trendline), khóa/ẩn bản vẽ (`lock_all_drawings`), hỗ trợ vẽ trên sub-pane chỉ báo và đồng bộ tức thì giữa thanh công cụ nổi với hộp thoại chỉnh sửa.

### Kết Nối Sàn, Bản Quyền & Tuân Thủ
- **Cập Nhật Proxy Thời Gian Thực**: Chuẩn hóa URI proxy và áp dụng thay đổi proxy trực tiếp cho cả REST và WebSocket client của các sàn mà không cần khởi động lại.
- **Dùng Thử Pro 28 Ngày & Bản Quyền**: Tích hợp tự động dùng thử Pro 28 ngày, xác thực license offline ECDSA P-256, huy hiệu hạn mức chỉ báo (`X/3`) và nhãn khám phá `PRO`.
- **Chuẩn Hóa Bản Quyền**: Thống nhất thông báo bản quyền `PtView` và cập nhật `ThirdPartyNotices.txt`.

### `PTView.SDK v0.2.0-beta.1` (Lưu ý Breaking Change)
- **Đổi Tên Hằng Số Bảng Màu**: Đổi tên các hằng số màu chuẩn trong `ColorRgba` từ `Tv*` sang `Pt*` (`PtBlue`, `PtOrange`, `PtAmber`, `PtPurple`, `PtGreen`, `PtRed`, `PtTeal`, `PtSalmon`, `PtYellow`, `PtMuted`, `PtCyan`, `PtBurgundy`). Tác giả plugin nâng cấp lên `0.2.0-beta.1` cần cập nhật lại các tham chiếu `ColorRgba`.
- Bổ sung file `LICENSE` (MIT) và tài liệu `README.md` / `README.vi.md` song ngữ cho `PTView.SDK`.

---

## `v0.1.0` — Kênh Stable (07/11/2026)

Phiên bản phát hành công khai đầu tiên của **PtView Workstation** và **`PTView.SDK v0.1.0`**:
- Engine biểu đồ WPF `DrawingVisual` 60 FPS thuần `.NET 10` (không sử dụng WebView2).
- Luồng dữ liệu thị trường đa sàn thời gian thực (`Binance`, `OKX`, `Bybit` Spot & Perpetual), lưu trữ lịch sử nến 1 phút dạng nhị phân và tự động bù dữ liệu thiếu (gap recovery).
- Engine chỉ báo kỹ thuật hỗ trợ tô vùng mây/dải (cloud & band fills), chỉ báo con lồng ghép (child composition) và cô lập plugin ngoài tiến trình qua `PTView.PluginWorker`.
- Tích hợp AI Copilot cơ bản, bộ công cụ vẽ kỹ thuật và đóng gói phát hành qua Velopack (`Setup.exe` / `Portable.zip`).

