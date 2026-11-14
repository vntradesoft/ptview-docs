---
sidebar_position: 3
title: Chỉ Báo Kỹ Thuật & Phân Tích
---

# Chỉ Báo Kỹ Thuật & Phân Tích Biểu Đồ

PtView Workstation tích hợp sẵn **hơn 40 chỉ báo kỹ thuật phổ biến**, tính toán theo thời gian thực ngay trên từng tick nến mà vẫn giữ CPU nhẹ nhàng.

![Tìm Kiếm Chỉ Báo Nhanh và Navigator](/img/screenshots/indicators-browser.png)

---

## 1. Hai Cách Thêm Chỉ Báo Lên Biểu Đồ

1. **Tìm Chỉ Báo Nhanh (<kbd>Ctrl</kbd> + <kbd>I</kbd>)**: Nhấn <kbd>Ctrl</kbd> + <kbd>I</kbd> hoặc bấm nút **Indicators** trên thanh công cụ, gõ tên như `EMA`, `RSI`, `MACD`, `SuperTrend` rồi nhấn <kbd>Enter</kbd>.
2. **Bảng Navigator (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>)**: Duyệt danh sách theo nhóm (**Trend**, **Oscillators**, **Volatility**, **Volume**, **Bill Williams**, và **Plugin ngoài**), sau đó nhấp đúp để gắn lên biểu đồ.

:::note Hạn Mức Chỉ Báo (Community vs. Pro)
- **Bản Community (Miễn phí)**: Tối đa **5 chỉ báo/biểu đồ** (hiển thị nhãn `X/5` gọn nhẹ trên góc biểu đồ).
- **Bản Pro / Dùng thử 28 ngày**: **Không giới hạn** số lượng chỉ báo và hỗ trợ chạy plugin C# `PTView.SDK` bên ngoài.
:::

---

## 2. Quản Lý, Kéo-Thả Thứ Tự & Tùy Biến Màu Sắc

Mở **Indicator Manager** ngay từ danh sách chỉ báo trên biểu đồ:
- **Kéo-Thả Sắp Xếp Thứ Tự**: Kéo thả để đổi thứ tự các khung chỉ báo phụ (ví dụ đưa RSI lên trên MACD).
- **Chỉnh Tham Số & Giao Diện**: Nhấp đúp trực tiếp lên đường chỉ báo (hoặc bấm biểu tượng bánh răng) để sửa chu kỳ, hệ số, nguồn giá (`Close`, `Open`, `High`, `Low`, `HL2`, `HLC3`), độ dày nét, kiểu nét, màu sắc và độ mờ vùng tô mây/dải (Ichimoku Cloud, Bollinger Bands).
- **Chỉ Báo Lồng Ghép (Child Indicator)**: Có thể gắn thêm đường trung bình động (như EMA/SMA) tính trực tiếp trên giá trị của một chỉ báo khác (ví dụ EMA mượt hóa đường RSI).
- **Ẩn / Hiện Tạm Thời**: Bấm biểu tượng con mắt để ẩn tạm đường chỉ báo mà không mất cấu hình đã chỉnh.

---

## 3. Các Nhóm Chỉ Báo Tích Hợp Sẵn

| Nhóm | Các Chỉ Báo Tiêu Biểu |
|---|---|
| **Xu Hướng (Trend)** | SMA, EMA, DEMA, TEMA, Hull Moving Average (HMA), VWMA, SuperTrend, Parabolic SAR, Ichimoku Cloud, Alligator |
| **Dao Động (Oscillators)** | RSI, MACD, Stochastic, Stochastic RSI, CCI, Awesome Oscillator (AO), Accelerator Oscillator (AC), DeMarker, Momentum, Williams %R |
| **Biến Động (Volatility)** | Bollinger Bands, Bollinger BandWidth, Donchian Channels, Keltner Channels, ATR, Moving Average Envelopes |
| **Khối Lượng (Volume)** | On-Balance Volume (OBV), Volume Spike, Money Flow Index (MFI), Accumulation/Distribution, VWAP |
| **Bill Williams** | Fractals, Gator Oscillator, Market Facilitation Index |

:::tip Nhờ AI Copilot Gắn Chỉ Báo Nhanh
Khi mở **AI Copilot** (<kbd>Ctrl</kbd> + <kbd>J</kbd>), bạn có thể gõ: *"Thêm EMA 20 màu xanh dương, EMA 50 màu vàng và RSI 14 ở khung dưới"* — AI sẽ tự gắn và chỉnh màu đúng theo yêu cầu.
:::
