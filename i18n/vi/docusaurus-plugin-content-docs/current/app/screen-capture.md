---
sidebar_position: 7
title: Chụp Ảnh Màn Hình & Watermark
---

# Chụp Ảnh Màn Hình & Watermark Thương Hiệu

PTView tích hợp sẵn công cụ chụp ảnh màn hình chuyên biệt cho Trader: chụp nhanh biểu đồ đang xem hoặc toàn bộ cửa sổ làm việc, tự động gắn thanh chân trang hiển thị logo PTView, sàn, cặp giao dịch, loại thị trường, khung giờ và dấu thời gian.

![Hộp Thoại Tùy Chọn Chụp Ảnh Màn Hình](/img/screenshots/snapshot-options.png)

---

## 1. Các Cách Chụp Ảnh Nhanh

- **Phím Tắt (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>)**: Chụp tức thì biểu đồ đang chọn kèm watermark và chép thẳng vào Clipboard (`Ctrl+V` dán ngay vào Telegram, Discord, Facebook, X).
- **Nút Máy Ảnh Trên Thanh Công Cụ**:
  - **Bấm thường**: Mở hộp thoại **Snapshot Options** để tùy chọn vùng chụp, độ phân giải và nơi lưu.
  - **<kbd>Ctrl</kbd> + Bấm chuột**: Chế độ lưu nhanh — chụp ngay biểu đồ hiện tại và mở hộp thoại lưu file `.png`/`.jpg`.
- **Menu Chuột Phải Biểu Đồ**: Chuột phải lên nền nến → **Capture Screenshot**.
- **Thanh Menu**: Chọn **Tools → Screenshot**.

---

## 2. Tùy Chỉnh Trong Snapshot Options

1. **Vùng Chụp (Capture Target)**:
   - **Active Chart Pane Only**: Chỉ chụp riêng vùng biểu đồ đang chọn (bao gồm nến, chỉ báo, sub-pane RSI/MACD và các nét vẽ).
   - **Full Workstation Window**: Chụp toàn bộ giao diện gồm Market Watch, Navigator, thanh công cụ và tất cả các khung biểu đồ.
2. **Kích Thước & Độ Phân Giải**:
   - **Original Size**: Giữ nguyên độ phân giải gốc 1:1 trên màn hình.
   - **Custom Size**: Nhập chiều rộng / chiều cao tùy ý (hỗ trợ tối đa **16,384 × 16,384 px**). Nếu chỉ nhập 1 chiều, PTView tự tính chiều còn lại để không méo ảnh.
3. **Đích Xuất Ảnh**:
   - **Copy to Clipboard**: Dán nhanh vào mọi ứng dụng chat.
   - **Save to Image File**: Lưu thành file **PNG** (`.png`) sắc nét hoặc **JPEG** (`.jpg`).

---

## 3. Watermark Tự Thích Ứng 4 Theme

Mỗi ảnh xuất ra đều có thanh chân trang tối giản (`[Logo] PtView Workstation | OKX • BTC/USDT (Perp) • 15m    2026-11-11 14:30:00`) tự đổi màu theo theme bạn đang dùng:

| Theme | Màu Nền Footer | Đường Viền | Chữ Thương Hiệu | Thông Tin Cặp Coin | Thời Gian |
|---|---|---|---|---|---|
| **Dark** | `#181B22` | `#2A2E39` | `#9CA3AF` | `#D1D4DC` | `#6B7280` |
| **Midnight** | `#0B0B0E` | `#27272A` | `#A1A1AA` | `#D4D4D8` | `#71717A` |
| **CyberNavy** | `#0E1420` | `#1E293B` | `#94A3B8` | `#CBD5E1` | `#64748B` |
| **Light** | `#F4F5F7` | `#E0E3EB` | `#4B5563` | `#1F2937` | `#6B7280` |

:::tip Mẹo Xuất Ảnh 4K Siêu Nét
Khi muốn đăng bài phân tích chất lượng cao, hãy chọn **Custom Size** trong Snapshot Options và đặt `3840 × 2160` — PTView tự động dùng logo độ phân giải cao 256px để ảnh nét căng.
:::
