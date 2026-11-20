---
sidebar_position: 2
title: Chính Sách Quyền Riêng Tư & Bảo Mật
---

# Chính Sách Quyền Riêng Tư & Bảo Vệ Dữ Liệu

:::info Thông Tin Phiên Bản Chính Sách
- **Phiên bản Chính sách:** `v1.1.1`
- **Ngày hiệu lực:** `18/11/2026`
- **Nguồn tài liệu:** Đồng bộ trực tiếp từ mục Chính sách Quyền riêng tư trong **PtView Workstation** (`LegalDocumentsCatalog.GetPrivacyPolicyText`).
:::

---

## 1. Kiến Trúc Lưu Trữ Cục Bộ (Local-First)

Toàn bộ bố cục Workspace, hình vẽ trên biểu đồ, cấu hình chỉ báo cũng như **khóa API nhà cung cấp AI** và **Token Bot Telegram** do bạn tự cấu hình đều được lưu trữ hoàn toàn cục bộ trên máy tính cá nhân (`%LocalAppData%\PTView` hoặc thư mục `data\` của bản Portable).

## 2. Chỉ Đọc Dữ Liệu Công Khai & Kết Nối Trực Tiếp AI / Telegram

- **Chỉ đọc Dữ liệu Công khai từ Đa sàn:** Phần mềm kết nối trực tiếp từ máy của bạn tới các endpoint dữ liệu thị trường công khai của những sàn được hỗ trợ cho khu vực và phiên bản cài đặt của bạn.
- **Không yêu cầu API Key Sàn & Không thu thập khóa bí mật:** PTView không có chức năng đặt lệnh sàn, không yêu cầu tài khoản đăng nhập hay API key giao dịch của sàn, không lưu ký tài sản, và không bao giờ gửi **khóa API AI**, **Token Bot Telegram** hay workspace giao dịch của bạn về bất kỳ máy chủ PTView nào (câu hỏi AI chỉ gửi trực tiếp tới nhà cung cấp AI bạn cấu hình).

## 3. Đồng Bộ Cấu Hình Remote Care & Nhật Ký Thiết Bị (`https://remote-care.ptview.app`; Có Thể Tắt)

Để cấp phát cấu hình runtime ký số (`PTV-RC1`), áp dụng quy tắc tuân thủ theo khu vực (danh sách sàn và loại thị trường khả dụng theo pháp luật địa phương và điều khoản từng sàn), cập nhật nguồn tin công khai và hiển thị thông báo bảo trì, Phần mềm định kỳ gửi các thông số kỹ thuật phi định danh cá nhân tới dịch vụ Remote Care:

- Mã định danh phần cứng giả danh (`MachineId` dạng `PTM-...`)
- Phiên bản ứng dụng và kênh build đang chạy (`Stable` hoặc `Beta`)
- Gói phiên bản (`Edition`), phiên bản hệ điều hành và ngôn ngữ giao diện
- Số bản sửa đổi Remote Care đang áp dụng, tên các sàn đang bật và số nguồn tin đang bật

Kênh này tuyệt đối không thu thập hay truyền khóa API AI, Token Telegram, workspace, hình vẽ, lịch sử giao dịch, email hay danh tính cá nhân. Bạn có thể **tắt đồng bộ thiết bị & check-in Remote Care bất kỳ lúc nào** tại **Cài đặt → Chung → Quyền riêng tư & Chẩn đoán** hoặc **Trợ giúp → Hỗ trợ từ xa (Remote Care)...** để ngừng gửi `MachineId`, thông số hệ điều hành/gói bản quyền và ẩn thông báo banner; Phần mềm chỉ tải gói chính sách tuân thủ chung ẩn danh (`anon=1`, không kèm mã định danh thiết bị) hoặc dùng bản lưu cục bộ khi ngoại tuyến.

## 4. Gửi Gói Chẩn Đoán Hỗ Trợ Tự Nguyện (`Help → Remote Care & Support...`)

Chỉ khi bạn **chủ động nhập mô tả và bấm Gửi** trong hộp thoại Remote Care, PTView mới tải lên mô tả sự cố, tóm tắt môi trường và tối đa `180` dòng nhật ký gần nhất — sau khi công cụ `SecretRedactor` tự động che khóa API AI, Token Telegram, mật khẩu và đường dẫn tên người dùng — để tạo mã ticket hỗ trợ (`CARE-...`) cho đội ngũ kỹ thuật.

## 5. Báo Cáo Sự Cố Ẩn Danh (Sentry; Có Thể Tắt)

- Theo mặc định, PTView gửi báo cáo lỗi ẩn danh (`crash stack trace` và lỗi nền) về **Sentry** để hỗ trợ phát hiện và khắc phục sự cố.
- **Tự động xóa thông tin nhạy cảm:** Hệ thống tự động xóa địa chỉ IP, tên/định danh máy, khóa xác thực và đường dẫn chứa tên người dùng trước khi gửi.
- **Quyền kiểm soát hoàn toàn:** Bạn có thể tắt tính năng này bất kỳ lúc nào tại **Cài đặt → Chung → Quyền riêng tư & Chẩn đoán**.

## 6. Lưu Vết Chấp Thuận Quy Định (Consent Audit Trail)

Khi bạn nhấn Đồng ý với Thỏa thuận EULA & Rủi ro trong ứng dụng, hệ thống sẽ ghi nhận một bản ghi kiểm toán cục bộ (gồm thời gian UTC, phiên bản chính sách, mã băm SHA-256 của văn bản và chữ ký toàn vẹn) vào tệp nhật ký tuân thủ cục bộ để làm căn cứ xác thực pháp lý.

## 7. Liên Hệ Về Quyền Riêng Tư

Mọi thắc mắc liên quan đến dữ liệu hoặc Chính sách Quyền riêng tư vui lòng gửi về [support@ptview.app](mailto:support@ptview.app).
