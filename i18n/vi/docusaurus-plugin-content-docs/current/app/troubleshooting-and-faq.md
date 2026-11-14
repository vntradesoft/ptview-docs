---
sidebar_position: 9
title: Xử Lý Sự Cố & FAQ
---

# Xử Lý Sự Cố & Câu Hỏi Thường Gặp (FAQ)

Giải đáp nhanh các vấn đề thường gặp về mạng, Proxy, xuất file chẩn đoán lỗi, cập nhật kênh Stable/Beta và bản quyền trên **PtView Workstation**.

---

## 1. Lỗi Mạng, Bị Chặn Sàn & Cấu Hình Proxy

### Biểu đồ không tải nến hoặc một số sàn báo lỗi kết nối
Một số nhà mạng hoặc mạng công ty có thể chặn truy cập API/WebSocket của các sàn crypto.

1. Mở **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Network**.
2. Bật tùy chọn **Use HTTP / SOCKS5 Proxy**.
3. Điền **Host**, **Port** (và Username / Password nếu proxy có xác thực).
4. Bấm **Save** — PTView sẽ áp dụng ngay cho cả kết nối REST và WebSocket của toàn bộ sàn mà **không cần khởi động lại ứng dụng**.

:::tip Kiểm Tra Nhanh Qua Telegram
Nếu bạn có gắn Bot Telegram, nút **Test Connection** trong **Settings → Notifications** cũng tự động đi qua Proxy để bạn kiểm tra đường truyền ngay lập tức.
:::

---

## 2. Xuất Gói Chẩn Đoán Lỗi (Diagnostics `.zip`)

Khi gặp lỗi cần gửi bộ phận kỹ thuật kiểm tra, bạn có thể xuất gói chẩn đoán an toàn chỉ với 1 chạm:

1. Chọn **Help → Export Diagnostics** trên thanh menu (hoặc vào **Settings → Advanced**).
2. Chọn thư mục lưu file `.zip`.
3. Hệ thống tự động gom log ứng dụng (`app-*.log`, `app-error-*.log`), log AI/MCP và thông tin môi trường — đồng thời công cụ `SecretRedactor` **tự động che toàn bộ API key, token và tên user máy tính** trước khi nén.

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

### Có cần nhập API Key sàn giao dịch để xem biểu đồ không?
**Không.** Dữ liệu thị trường công khai (nến OHLCV, giá, sổ lệnh L2, Open Interest, Funding Rate trên `OKX`, `Binance` và `Bybit`) hoạt động hoàn toàn miễn phí và **không cần API key**.

### Dùng AI Copilot có tốn phí không?
PTView không thu thêm phí sử dụng AI. Bạn tự gắn khóa API của riêng mình (**Bring Your Own Key**):
- **Lựa chọn miễn phí**: Google Gemini API (gói Free), một số model miễn phí trên OpenRouter, hoặc chạy **Ollama** 100% cục bộ trên máy cá nhân.
- **Lựa chọn trả phí / hạn mức cao**: OpenAI, DeepSeek, Anthropic hoặc Gemini gói trả phí.

### Sau khi hết 28 ngày dùng thử Pro thì điều gì xảy ra?
Ứng dụng sẽ nhẹ nhàng chuyển về phiên bản **Community** (miễn phí trọn đời):
- Mọi workspace, nét vẽ và cài đặt vẫn được giữ nguyên.
- Bạn tiếp tục sử dụng **tối đa 2 biểu đồ song song**, **5 chỉ báo mỗi biểu đồ**, đầy đủ `OKX`, `Binance`, `Bybit` và AI Copilot tiêu chuẩn.
- *(Việc mở bán gói **Pro** hiện đang tạm dừng. Các mã bản quyền đã cấp trước đó vẫn hoạt động bình thường tại **Settings → License**.)*

### Làm sao quay lại kênh Stable từ kênh Beta?
1. Mở **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) → **Updates**.
2. Chuyển **Update Channel** từ `Beta` về `Stable`.
3. Đảm bảo tùy chọn **Allow channel downgrade** đang bật, sau đó bấm **Check for Updates Now**.

### Làm thế nào để liên hệ hỗ trợ hoặc báo lỗi?
- **Email hỗ trợ**: [support@ptview.app](mailto:support@ptview.app) (thắc mắc sử dụng, góp ý, quyền riêng tư hoặc liên hệ hỗ trợ chung)
- **Báo lỗi & Đề xuất tính năng**: Tạo issue tại [GitHub Issues](https://github.com/vntradesoft/ptview-releases/issues)
- **Trang chủ chính thức**: [ptview.app](https://ptview.app)
