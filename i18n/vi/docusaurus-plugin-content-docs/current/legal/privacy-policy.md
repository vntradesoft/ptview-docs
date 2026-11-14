---
sidebar_position: 2
title: Chính Sách Quyền Riêng Tư & Bảo Mật
---

# Chính Sách Quyền Riêng Tư & Bảo Vệ Dữ Liệu

:::info Thông Tin Phiên Bản Chính Sách
- **Phiên bản Chính sách:** `v1.0.1`
- **Ngày hiệu lực:** `2026-11-12`
- **Nguồn tài liệu:** Đồng bộ trực tiếp từ mục Chính sách Quyền riêng tư trong **PtView Workstation** (`LegalDocumentsCatalog.GetPrivacyPolicyText`).
:::

---

## 1. Kiến Trúc Lưu Trữ Cục Bộ (Local-First)

Toàn bộ bố cục Workspace, hình vẽ trên biểu đồ, cấu hình chỉ báo, cài đặt Telegram Bot và khóa API AI của bạn được lưu trữ cục bộ trên máy tính cá nhân (`%LocalAppData%\PTView` hoặc thư mục `data\` của bản Portable).

## 2. Kết Nối Trực Tiếp & Không Thu Thập Khóa API

- **Kết nối Trực tiếp:** Phần mềm kết nối trực tiếp từ máy của bạn tới API công khai của 3 sàn (OKX, Binance, Bybit) và nhà cung cấp AI mà bạn cấu hình.
- **Không thu thập khóa bí mật:** PTView không yêu cầu API key giao dịch của sàn, không lưu ký tài sản và không bao giờ thu thập hay gửi khóa API AI cá nhân hoặc workspace giao dịch của bạn về máy chủ trung gian.

## 3. Báo Cáo Sự Cố Ẩn Danh (Có Thể Tắt Bất Kỳ Lúc Nào)

- Theo mặc định, PTView gửi báo cáo lỗi (`crash stack trace` và lỗi nền) về **Sentry** để hỗ trợ phát hiện và khắc phục sự cố.
- **Tự động xóa thông tin nhạy cảm:** Hệ thống tự động xóa địa chỉ IP, tên/định danh máy, khóa API/mật khẩu và đường dẫn chứa tên người dùng trước khi gửi.
- **Quyền kiểm soát hoàn toàn:** Bạn có thể tắt tính năng này bất kỳ lúc nào tại **Cài đặt → Chung → Quyền riêng tư & Chẩn đoán**.

## 4. Lưu Vết Chấp Thuận Quy Định (Consent Audit Trail)

Khi bạn nhấn Đồng ý với Thỏa thuận EULA & Rủi ro trong ứng dụng, hệ thống sẽ ghi nhận một bản ghi kiểm toán cục bộ (gồm thời gian UTC, phiên bản chính sách, mã băm SHA-256 của văn bản và chữ ký toàn vẹn) vào tệp nhật ký tuân thủ cục bộ để làm căn cứ xác thực pháp lý.

## 5. Liên Hệ Về Quyền Riêng Tư

Mọi thắc mắc liên quan đến dữ liệu hoặc Chính sách Quyền riêng tư vui lòng gửi về [support@ptview.app](mailto:support@ptview.app).
