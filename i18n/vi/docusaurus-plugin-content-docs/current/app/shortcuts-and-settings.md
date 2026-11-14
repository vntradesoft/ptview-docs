---
sidebar_position: 6
title: Phím Tắt & Cài Đặt Hệ Thống
---

# Bảng Phím Tắt & Cài Đặt Hệ Thống

Làm chủ PTView nhanh chóng với hệ thống phím tắt chuẩn và tùy chỉnh giao diện, kênh cập nhật, kết nối sàn và nhật ký hệ thống trong **Settings** (<kbd>Ctrl</kbd> + <kbd>P</kbd>).

---

## 1. Bảng Phím Tắt Đầy Đủ

### Cửa Sổ, Bảng Điều Khiển & Không Gian Làm Việc
| Phím Tắt | Chức Năng |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | Mở Tab làm việc mới |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Đóng Tab làm việc hiện tại |
| <kbd>Ctrl</kbd> + <kbd>Tab</kbd> | Chuyển sang Tab tiếp theo |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | Chuyển về Tab trước |
| <kbd>Ctrl</kbd> + <kbd>1</kbd> .. <kbd>9</kbd> | Nhảy trực tiếp đến Tab 1-9 |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | Thêm khung biểu đồ vào tab (tối đa 4) |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> | Đóng khung biểu đồ con đang chọn |
| <kbd>Alt</kbd> + <kbd>1</kbd> | Chế độ 1 biểu đồ đơn |
| <kbd>Alt</kbd> + <kbd>2</kbd> | Bố cục chia 2 biểu đồ dọc (1x2) |
| <kbd>Alt</kbd> + <kbd>3</kbd> | Bố cục chia 2 biểu đồ ngang (2x1) |
| <kbd>Alt</kbd> + <kbd>4</kbd> | Bố cục chia 3 biểu đồ (1+2) |
| <kbd>Alt</kbd> + <kbd>5</kbd> | Bố cục lưới 4 biểu đồ (2x2) |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Lưu Workspace |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | Nạp Workspace |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Tìm Kiếm Mã Giao Dịch Nhanh |
| <kbd>Ctrl</kbd> + <kbd>I</kbd> | Tìm & Gắn Chỉ Báo Nhanh |
| <kbd>Ctrl</kbd> + <kbd>M</kbd> | Bật/Tắt bảng **Market Watch** |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | Bật/Tắt bảng **Navigator** |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | Bật/Tắt cửa sổ số liệu **Data Window** |
| <kbd>Ctrl</kbd> + <kbd>J</kbd> | Bật/Tắt khung chat **AI Copilot** |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Chụp Ảnh Màn Hình Kèm Watermark |
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | Mở **Cài Đặt / Options** |
| <kbd>F1</kbd> | Mở Bảng Tra Cứu Phím Tắt |
| <kbd>F11</kbd> | Chế Độ Toàn Màn Hình |

### Phóng To, Thu Nhỏ & Điều Hướng Biểu Đồ
| Phím Tắt | Chức Năng |
|---|---|
| <kbd>Alt</kbd> + Kéo chuột | **Box Zoom** — Khoanh vùng phóng to trực tiếp |
| <kbd>Alt</kbd> + <kbd>Z</kbd> | Hoàn tác bước Zoom vừa rồi |
| <kbd>Ctrl</kbd> + <kbd>+</kbd> / Cuộn lên | Phóng to nến |
| <kbd>Ctrl</kbd> + <kbd>-</kbd> / Cuộn xuống | Thu nhỏ nến |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | Đặt lại Zoom & Tự động căn trục giá |
| <kbd>Home</kbd> / <kbd>End</kbd> | Nhảy về cây nến cũ nhất / mới nhất |

### Quản Lý Nét Vẽ Kỹ Thuật
| Phím Tắt | Chức Năng |
|---|---|
| <kbd>Alt</kbd> + <kbd>D</kbd> | Ẩn/Hiện Thanh Công Cụ Vẽ |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> | Mở Hộp Thoại Quản Lý Nét Vẽ |
| <kbd>Delete</kbd> | Xóa nét vẽ đang chọn |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> / <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Hoàn tác / Làm lại thao tác vẽ |

---

## 2. Tổng Quan Các Mục Cài Đặt (<kbd>Ctrl</kbd> + <kbd>P</kbd>)

![Hộp Thoại Cài Đặt PTView](/img/screenshots/settings-dialog.png)

Mở Cài đặt qua **Tools → Options**, biểu tượng bánh răng góc phải toolbar hoặc phím <kbd>Ctrl</kbd> + <kbd>P</kbd>:

- **Appearance**: Đổi **Giao diện** (`Dark`, `Midnight`, `CyberNavy`, `Light`), **Màu nhấn (Accent Color)**, đồng bộ theme Windows và nút điều khiển cửa sổ.
- **Chart**: Chọn sàn/cặp coin/khung giờ mặc định, dung lượng bộ đệm lịch sử nến (`5,000`–`50,000+`), giới hạn FPS và đường dẫn giá hiện tại.
- **Exchanges & Markets**: Bật/tắt các sàn hỗ trợ (`OKX`, `Binance`, `Bybit`), lọc loại thị trường (`Spot`, `Perp`, `Delivery`) và gắn API key sàn (nếu cần).
- **Network**: Cấu hình **HTTP / SOCKS5 Proxy** (có hiệu lực tức thì cho toàn bộ kết nối REST và WebSocket của sàn mà không cần khởi động lại).
- **General**: Đổi **Ngôn ngữ** (`English` / `Tiếng Việt`), tự động khôi phục workspace, bật **Developer Mode**, và **Privacy & Diagnostics** (bật/tắt gửi báo cáo crash ẩn danh).
- **Notifications**: Bật âm thanh cảnh báo và gắn **Telegram Bot** (hỗ trợ nút **Auto Detect** tự tìm Chat ID và **Test Connection** đi qua Proxy).
- **Updates**: Chuyển đổi qua lại giữa kênh **Stable** và **Beta**, bật tự động tải ngầm, cho phép hạ phiên bản khi chuyển kênh, hoặc bấm **Check for Updates Now**.
- **License (Bản quyền)**: Theo dõi số ngày dùng thử Pro 28 ngày, sao chép Machine ID, kích hoạt Pro tự động online hoặc nhập mã bản quyền offline, và chuyển đổi phiên bản.
- **Advanced** *(Bật Developer Mode ở tab General)*: Điều chỉnh mức ghi log `app-*.log`, bật/tắt log REST/Socket/Raw của `CryptoClients.Net` lúc runtime, và xuất gói chẩn đoán **Diagnostics `.zip`** đã che thông tin nhạy cảm.
- **About System**: Xem phiên bản ứng dụng hiện tại, thông số hệ thống và liên kết nhanh tới Releases, SDK, Docs.
