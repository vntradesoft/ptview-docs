---
sidebar_position: 1
title: Điều Khoản Sử Dụng (EULA) & Miễn Trừ Rủi Ro
---

# Thỏa Thuận Giấy Phép Sử Dụng (EULA), Miễn Trừ Rủi Ro & Tuân Thủ

:::info Thông Tin Phiên Bản Quy Định
- **Phiên bản Quy định:** `1.0.1`
- **Ngày hiệu lực:** `12/11/2026`
- **Nguồn tài liệu:** Đồng bộ trực tiếp từ thỏa thuận pháp lý bên trong ứng dụng **PtView Workstation** (`LegalDocumentsCatalog`).
:::

---

## 1. Bản Quyền & Giấy Phép Sử Dụng Phần Mềm (EULA)

Bản quyền (c) 2026 PtView. Bảo lưu mọi quyền (All rights reserved).

**PtView Workstation** ("Phần mềm") là phần mềm thương mại có bản quyền, được cấp phép sử dụng cho bạn theo các điều khoản dưới đây (không phải chuyển nhượng quyền sở hữu mã nguồn):

- **Quyền sử dụng:** Khi bạn tuân thủ đầy đủ Thỏa thuận này, PTView cấp cho bạn quyền cá nhân, không độc quyền, không chuyển nhượng để cài đặt và vận hành Phần mềm trên máy tính cá nhân của bạn.
- **Các hành vi nghiêm cấm:** Bạn **không** được phép dịch ngược (`decompile`, `reverse engineer`), tháo gỡ mã nhị phân, chỉnh sửa trái phép, xóa bỏ thông tin bản quyền, hoặc tự ý đóng gói lại / bán lại bộ cài đặt Phần mềm dưới bất kỳ hình thức nào khi chưa có sự đồng ý bằng văn bản của PTView.
- **Mở rộng qua `PTView.SDK`:** Các chỉ báo (`Indicator`) hoặc Plugin được phát triển độc lập thông qua giao diện công khai `PTView.SDK` (giấy phép MIT) thuộc quyền sở hữu của tác giả viết plugin đó.

---

## 2. Tuyên Bố Miễn Trừ Rủi Ro Tài Chính, Giao Dịch & AI Copilot

:::warning Quan Trọng — Vui Lòng Đọc Kỹ Trước Khi Sử Dụng
- **Không phải Lời khuyên Đầu tư Tài chính:** Toàn bộ dữ liệu thị trường, biểu đồ nến, chỉ báo kỹ thuật, công cụ vẽ và các phản hồi phân tích từ trợ lý AI Copilot / MCP trong PTView chỉ phục vụ mục đích tra cứu thông tin, học tập và nghiên cứu kỹ thuật. Không có bất kỳ nội dung nào trong Phần mềm được xem là lời khuyên đầu tư, tư vấn tài chính hay khuyến nghị mua/bán.
- **Rủi ro Cao của Thị trường Tài sản Số:** Giao dịch tiền mã hóa (Crypto), giao ngay (Spot) và hợp đồng tương lai vĩnh cửu (`Perpetual Futures` / Đòn bẩy) tiềm ẩn rủi ro mất vốn rất lớn. Bạn hoàn toàn tự chịu trách nhiệm trước mọi quyết định giao dịch cũng như mọi khoản lãi/lỗ phát sinh.
- **Giới hạn của Trí tuệ Nhân tạo (AI Copilot):** Các mô hình ngôn ngữ lớn (Gemini, OpenAI, DeepSeek, Ollama...) có thể phát sinh sai số ("ảo giác" AI), nhận định sai cấu trúc thị trường hoặc vẽ các mốc Hỗ trợ/Kháng cự không chính xác. Người dùng bắt buộc phải tự kiểm chứng độc lập trước khi ra quyết định.
- **Cung cấp Nguyên trạng ("AS IS"):** Dữ liệu giá thời gian thực và lịch sử phụ thuộc vào kết nối mạng và API công khai của 3 sàn giao dịch được hỗ trợ (OKX, Binance, Bybit). PTView không bảo đảm dữ liệu luôn liên tục hoặc không có độ trễ, và được miễn trừ toàn bộ trách nhiệm pháp lý đối với mọi thiệt hại trực tiếp hay gián tiếp phát sinh từ việc sử dụng Phần mềm.
- **Tuyên bố Độc lập với Sàn giao dịch:** PtView Workstation là phần mềm độc lập và không liên kết, không được bảo trợ hay là đối tác chính thức của OKX, Binance hoặc Bybit. Mọi tên gọi và nhãn hiệu sàn giao dịch thuộc quyền sở hữu của các bên tương ứng.
:::

---

## 3. Chính Sách Dữ Liệu, Bảo Mật Khóa API & Lưu Vết Tuân Thủ

- **Lưu trữ Cục bộ (Local-First):** Toàn bộ bố cục Workspace, hình vẽ trên biểu đồ, cấu hình chỉ báo và khóa API AI của bạn được lưu trữ cục bộ trên máy tính cá nhân (`%LocalAppData%\PTView` hoặc thư mục `data\` của bản Portable).
- **Kết nối Trực tiếp:** Phần mềm kết nối trực tiếp từ máy của bạn tới API công khai của 3 sàn (OKX, Binance, Bybit) và nhà cung cấp AI mà bạn cấu hình, không thu thập hay gửi khóa API cá nhân hoặc workspace giao dịch của bạn.
- **Báo cáo Sự cố Ẩn danh (Mặc định bật; Có thể tắt):** Theo mặc định, PTView gửi báo cáo lỗi (crash stack trace và lỗi nền) về Sentry sau khi đã tự động xóa địa chỉ IP, tên máy, khóa API/mật khẩu và đường dẫn tên người dùng. Bạn có thể tắt bất kỳ lúc nào tại **Cài đặt → Chung → Quyền riêng tư & Chẩn đoán**.
- **Lưu vết Chấp thuận Quy định (Consent Audit Trail):** Khi bạn nhấn Đồng ý với Thỏa thuận này trong ứng dụng (hoặc khi quy định được cập nhật lên phiên bản mới), hệ thống sẽ ghi nhận một bản ghi kiểm toán cục bộ (gồm thời gian UTC, phiên bản chính sách, mã băm SHA-256 của văn bản và chữ ký toàn vẹn) vào tệp nhật ký tuân thủ để làm căn cứ xác thực pháp lý.
- **Liên hệ về Quyền riêng tư:** Mọi thắc mắc liên quan đến dữ liệu hoặc [Chính sách Quyền riêng tư](./privacy-policy.md) vui lòng gửi về [support@ptview.app](mailto:support@ptview.app).

---

## 4. Định Danh Pháp Lý Sản Phẩm, Thanh Toán & Tuân Thủ Tại Việt Nam

- **Định danh Sản phẩm:** PtView Workstation là sản phẩm phần mềm công cụ phân tích kỹ thuật và biểu đồ thị trường thuộc nhóm ngành Xuất bản và Bán lẻ Phần mềm (Mã ngành VSIC `6201`). Phần mềm **không phải** là dịch vụ tài chính, chứng khoán, trung gian thanh toán hay sàn giao dịch tiền tệ.
- **Mô hình Phi Lưu ký (Non-Custodial):** Phần mềm không giữ tiền, không mở tài khoản giao dịch và không nhận ủy thác đầu tư dưới bất kỳ hình thức nào.
- **Phương thức Thanh toán Bản quyền:** Khi hoạt động mở bán bản quyền được bật, toàn bộ phí bản quyền thương mại tại Việt Nam được thanh toán hoàn toàn bằng Đồng Việt Nam (`VND`) qua chuyển khoản ngân hàng (`VietQR` / `Napas247`) tuân thủ quy định của Ngân hàng Nhà nước và Nghị định `52/2024/NĐ-CP`. Phần mềm không chấp nhận tiền mã hóa làm phương tiện thanh toán.
- **Chính sách Thuế:** Sản phẩm phần mềm không chịu thuế giá trị gia tăng (thuế suất VAT `0%`) theo quy định tại Thông tư `219/2013/TT-BTC` của Bộ Tài chính.

---

## 5. Thông Tin Liên Hệ, Hỗ Trợ & Kênh Chính Thức

- **Trang chủ chính thức:** [https://ptview.app](https://ptview.app)
- **Tài liệu hướng dẫn:** [https://docs.ptview.app](https://docs.ptview.app)
- **Email Hỗ trợ & Pháp lý:** [support@ptview.app](mailto:support@ptview.app)
- **Theo dõi lỗi (Issues):** [https://github.com/vntradesoft/ptview-releases/issues](https://github.com/vntradesoft/ptview-releases/issues)
