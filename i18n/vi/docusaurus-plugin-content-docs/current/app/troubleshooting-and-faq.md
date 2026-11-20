---
sidebar_position: 9
title: Xử Lý Sự Cố & FAQ
---

# Xử Lý Sự Cố & Câu Hỏi Thường Gặp (FAQ)

Giải đáp nhanh các vấn đề thường gặp về mạng, Proxy, xuất file chẩn đoán lỗi, cập nhật kênh Stable/Beta và bản quyền trên **PtView Workstation**.

---

## 1. Lỗi Mạng, Bị Chặn Sàn & Cấu Hình Proxy

![Cấu Hình HTTP và SOCKS5 Proxy trong Cài Đặt Mạng](/img/screenshots/network-proxy-settings.png)

### Biểu đồ không tải nến hoặc một số sàn báo lỗi kết nối
Một số nhà mạng hoặc mạng công ty có thể chặn truy cập API/WebSocket của các sàn crypto.

1. Mở **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Network**.
2. Bật tùy chọn **Use HTTP / SOCKS5 Proxy**.
3. Điền **Host**, **Port** (và Username / Password nếu proxy có xác thực).
4. Bấm **Save** — PTView sẽ áp dụng ngay cho toàn bộ kết nối REST/WebSocket của sàn, Telegram và đồng bộ **Remote Care** mà **không cần khởi động lại ứng dụng**.

:::tip Kiểm Tra Nhanh Qua Telegram
Nếu bạn có gắn Bot Telegram, nút **Test Connection** trong **Settings → Notifications** cũng tự động đi qua Proxy để bạn kiểm tra đường truyền ngay lập tức.
:::

---

## 2. Xuất Gói Chẩn Đoán Lỗi (Diagnostics `.zip`)

Khi gặp lỗi cần gửi bộ phận kỹ thuật kiểm tra, bạn có thể xuất gói chẩn đoán an toàn chỉ với 1 chạm:

1. Chọn **Help → Export Diagnostics** trên thanh menu (hoặc vào **Settings → Advanced**).
2. Chọn thư mục lưu file `.zip`.
3. Hệ thống tự động gom log ứng dụng (`app-*.log`, `app-error-*.log`), log AI/MCP và thông tin môi trường — đồng thời công cụ `SecretRedactor` **tự động che toàn bộ khóa API AI, Token Telegram và tên user máy tính** trước khi nén.

---

## 2B. Hỗ Trợ Từ Xa & Đồng Bộ Nhanh (`Help → Hỗ trợ từ xa (Remote Care)...`)

PTView tích hợp sẵn hộp thoại **Remote Care** giúp bạn cập nhật tức thì các sàn giao dịch / nguồn tin mới và gửi yêu cầu hỗ trợ kỹ thuật nhanh chóng mà không cần tự nén file:

![Hộp Thoại Hỗ Trợ Từ Xa (Remote Care & Support)](/img/screenshots/remote-care-dialog.png)

1. Chọn **Help → Hỗ trợ từ xa (Remote Care)...** trên thanh menu.
2. **Quyền riêng tư & Đồng bộ cấu hình**: Xem **Machine ID** của máy (bấm **Sao chép** khi cần gửi cho bộ phận hỗ trợ), bật/tắt đồng bộ thiết bị & check-in Remote Care bất kỳ lúc nào (hoặc tại **Cài đặt → Chung → Quyền riêng tư & Chẩn đoán**), và bấm **Đồng bộ ngay** để làm mới tức thì danh sách sàn, trạng thái bảo trì hoặc link nguồn tin mới nhất (vẫn bấm được ở chế độ ẩn danh ngay cả khi đã tắt check-in).
3. **Thanh thông báo bảo trì**: Bạn có thể bật hoặc tắt tùy chọn **Hiển thị thanh thông báo hệ thống / bảo trì sàn trong ứng dụng** bất cứ lúc nào.
4. **Gửi chẩn đoán hỗ trợ (`CARE-XXXXXX`)**: Nhập ngắn gọn vấn đề đang gặp (ví dụ: *"Nến trên biểu đồ không tải"* hoặc *"Nguồn tin RSS không cập nhật"*) rồi bấm **Gửi chẩn đoán hỗ trợ**.
   - PTView tự động che toàn bộ khóa API AI, Token Telegram, mật khẩu và đường dẫn cá nhân trước khi gửi nhật ký lỗi gần nhất.
   - Hệ thống trả về mã **`CARE-XXXXXX`** và tự động sao chép vào clipboard để bạn gửi cho đội ngũ hỗ trợ.

:::tip Hoạt Động Qua Proxy, Bảo Mật & Quyền Riêng Tư
- **Tự động tương thích Proxy công ty / VPN**: Nếu mạng của bạn đi qua proxy doanh nghiệp, hãy bật **HTTP / SOCKS5 Proxy** tại **Settings → Network**, nhập Host/Port và tài khoản (hỗ trợ cả `username` lẫn `DOMAIN\username`), bấm **Test Connection** rồi bấm **Save**. PTView tự động xử lý lỗi xác thực `407` trên các cổng proxy doanh nghiệp (tự chuyển đổi linh hoạt giữa NTLM, Basic và Windows SSO) và định tuyến toàn bộ Sàn giao dịch, Remote Care, Cập nhật ứng dụng, Bản quyền, AI, Tin tức và Telegram qua Proxy.
- **Bảo mật thông tin đăng nhập cục bộ**: Mật khẩu Proxy được ẩn bằng ký tự bảo mật trên giao diện, mã hóa trên ổ đĩa bằng **Windows DPAPI** (chỉ giải mã được trên đúng tài khoản Windows của máy bạn), và tự động che mờ trong toàn bộ file log, báo cáo lỗi cũng như gói chẩn đoán hỗ trợ.
- **Chỉ gửi khi bạn chủ động bấm**: Tính năng gửi chẩn đoán Remote Care chỉ hoạt động khi bạn **chủ động bấm nút Gửi** — ứng dụng không bao giờ tự ý tải nhật ký máy bạn lên mạng.
:::

---

## 3. Dữ Liệu Workspace, Cài Đặt & Log Lưu Ở Đâu?

| Hình Thức Cài Đặt | Thư Mục Lưu Dữ Liệu Người Dùng |
|---|---|
| **Bộ Cài Chuẩn (`Setup.exe`)** | `%LocalAppData%\PTView\` *(file chạy nằm riêng tại `%LocalAppData%\PTViewWorkstation\`)* |
| **Bản Di Động (`Portable.zip`)** | `<ThưMụcGiảiNén>\data\` |
| **Tùy Chỉnh Đường Dẫn** | Thiết lập biến môi trường `PTVIEW_DATA_DIR` |

Bên trong thư mục dữ liệu gồm có:
- `config\desktop-settings.json` — Toàn bộ tùy chọn, bố cục, proxy và cài đặt kênh cập nhật
- `workspaces\` — Các không gian làm việc đa biểu đồ, chỉ báo và nét vẽ đã lưu
- `logs\` — Nhật ký hệ thống (`app-*.log`) và nhật ký AI/MCP (`logs\Ai\`)
- `plugins\` — Các plugin `PTView.SDK` cài đặt thêm

:::note An Toàn Khi Cập Nhật Hoặc Hạ Phiên Bản
Nhờ tách biệt hoàn toàn thư mục phần mềm (`PTViewWorkstation`) và dữ liệu (`PTView`), việc nâng cấp hoặc chuyển qua lại giữa kênh **Stable** và **Beta** không bao giờ làm mất workspace, nét vẽ hay cấu hình của bạn.
:::

---

## 4. Câu Hỏi Thường Gặp (FAQ)

### Phần mềm có yêu cầu đăng nhập tài khoản sàn hoặc API Key sàn giao dịch không?
**Không.** PTView chỉ đọc dữ liệu thị trường công khai (nến OHLCV, giá, sổ lệnh L2, Open Interest, Funding Rate) và **không yêu cầu hay lưu trữ API key sàn giao dịch**. Thông tin xác thực duy nhất lưu cục bộ trên máy bạn là **khóa API AI** và **Token Bot Telegram** (khi bạn chủ động cấu hình).

### Dùng AI Copilot có tốn phí không?
PTView không thu thêm phí sử dụng AI. Bạn tự gắn khóa API của riêng mình (**Bring Your Own Key**):
- **Lựa chọn miễn phí**: Google Gemini API (gói Free), một số model miễn phí trên OpenRouter, hoặc chạy **Ollama** 100% cục bộ trên máy cá nhân.
- **Lựa chọn trả phí / hạn mức cao**: OpenAI, DeepSeek, Anthropic hoặc Gemini gói trả phí.

### Sau khi hết 28 ngày dùng thử Pro thì điều gì xảy ra?
Ứng dụng sẽ nhẹ nhàng chuyển về phiên bản **Community** (miễn phí trọn đời):
- Mọi workspace, nét vẽ và cài đặt vẫn được giữ nguyên.
- Bạn tiếp tục sử dụng **tối đa 2 biểu đồ song song**, **5 chỉ báo mỗi biểu đồ**, đầy đủ dữ liệu đa sàn khả dụng theo khu vực và AI Copilot tiêu chuẩn.
- *(Việc mở bán gói **Pro** hiện đang tạm dừng. Các mã bản quyền đã cấp trước đó vẫn hoạt động bình thường tại **Settings → License**.)*

### Làm sao để đổi Quốc gia / Khu vực hoặc tắt Tự động phát hiện (ví dụ khi đang bật VPN)?
Mặc định, mục **Quốc gia / Khu vực** để chế độ **Tự động phát hiện (Auto-Detect)** giúp nhận diện vùng của bạn dựa trên kết nối mạng và múi giờ/vùng cài đặt trên Windows (không thu thập danh tính cá nhân). Nếu bạn đang bật VPN sang nước khác hoặc muốn chọn cố định một quốc gia:
1. Mở **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Appearance** → **Language & TimeZone**.
2. Bấm vào danh sách **Quốc gia / Khu vực** và chọn quốc gia bất kỳ trong ~249 quốc gia toàn cầu, hoặc chuyển về **Tự động phát hiện** bất kỳ lúc nào.
3. Bấm **Save**.

### Làm sao quay lại kênh Stable từ kênh Beta?
1. Mở **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Updates**.
2. Chuyển **Update Channel** từ `Beta` về `Stable`.
3. Đảm bảo tùy chọn **Allow channel downgrade** đang bật, sau đó bấm **Check for Updates Now**.

### Làm thế nào để liên hệ hỗ trợ hoặc báo lỗi?
- **Email hỗ trợ**: [support@ptview.app](mailto:support@ptview.app) (thắc mắc sử dụng, góp ý, quyền riêng tư hoặc liên hệ hỗ trợ chung)
- **Báo lỗi & Đề xuất tính năng**: Tạo issue tại [GitHub Issues](https://github.com/vntradesoft/ptview-releases/issues)
- **Trang chủ chính thức**: [ptview.app](https://ptview.app)
