---
sidebar_position: 1
title: Giao Diện Workstation & Điều Hướng Biểu Đồ
---

# Giao Diện Workstation & Điều Hướng Biểu Đồ

PtView Workstation được bố trí thành các khu vực trực quan quen thuộc với Trader chuyên nghiệp. Mọi bảng điều khiển đều có thể ẩn/hiện, kéo chỉnh kích thước và tự động lưu lại giữa các phiên làm việc.

![Tổng Quan Giao Diện PtView Workstation](/img/screenshots/workstation-main.png)

---

## 1. Thanh Menu Trên Cùng & Thanh Công Cụ Chính (Toolbar)

![Thanh Menu và Thanh Công Cụ Chính](/img/screenshots/menu-and-toolbar.png)

### Thanh Menu Trên Cùng
| Menu | Chức Năng Chính |
|---|---|
| **File (Tệp)** | Tab làm việc mới (<kbd>Ctrl</kbd> + <kbd>T</kbd>), Thêm khung biểu đồ (<kbd>Ctrl</kbd> + <kbd>N</kbd>, kèm Menu con 5 loại chia bố cục <kbd>Alt</kbd> + <kbd>1..5</kbd>), Đóng Tab (<kbd>Ctrl</kbd> + <kbd>W</kbd>), Đóng khung biểu đồ (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd>), Lưu Workspace (<kbd>Ctrl</kbd> + <kbd>S</kbd>), Nạp Workspace (<kbd>Ctrl</kbd> + <kbd>O</kbd>), Thoát (<kbd>Alt</kbd> + <kbd>F4</kbd>) |
| **View (Xem)** | Bật/tắt **Market Watch** (<kbd>Ctrl</kbd> + <kbd>M</kbd>), **Navigator** (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>), **Data Window** (<kbd>Ctrl</kbd> + <kbd>D</kbd>), **AI Copilot** (<kbd>Ctrl</kbd> + <kbd>J</kbd>), Toàn màn hình (<kbd>F11</kbd>) |
| **Insert (Chèn)** | Tìm & gắn Chỉ báo nhanh (<kbd>Ctrl</kbd> + <kbd>I</kbd>), Công cụ vẽ |
| **Charts (Biểu đồ)** | Chọn khung thời gian, Loại biểu đồ (`Nến` / `Thanh` / `Đường`), **Box Zoom** (<kbd>Alt</kbd> + Kéo chuột), Hoàn tác Zoom (<kbd>Alt</kbd> + <kbd>Z</kbd>), Phóng to / Thu nhỏ / Đặt lại |
| **Tools (Công cụ)** | **AI Settings**, **Chụp ảnh màn hình** (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>), **Cài đặt / Options** (<kbd>Ctrl</kbd> + <kbd>P</kbd>) |
| **Help (Trợ giúp)** | Bảng Phím Tắt (<kbd>F1</kbd>), **Tài liệu hướng dẫn (Documentation)**, **PTView.SDK**, Mở thư mục Log, Xuất gói chẩn đoán `.zip`, **Xem giấy phép**, **Chính sách quyền riêng tư**, **Kiểm tra cập nhật / Khởi động lại để cập nhật**, Thông tin |

### Thanh Công Cụ Chính (Từ Trái Sang Phải)
1. **Chọn Sàn (Exchange Selector)**: Chuyển nhanh giữa `OKX`, `Binance` và `Bybit`.
2. **Tìm Mã Nhanh (<kbd>Ctrl</kbd> + <kbd>K</kbd>)**: Hiển thị cặp coin hiện tại + nhãn `Spot`/`Perp`. Bấm vào để tìm mọi cặp giao dịch trên tất cả các sàn.
3. **Cụm Khung Thời Gian**: Các nút bấm nhanh (`1m`, `5m`, `15m`, `30m`, `1h`, `4h`, `1d`) kèm nút mũi tên `v` để ghim thêm khung giờ tùy chọn (`3m`, `2h`, `6h`, `12h`, `3d`, `1w`, v.v.).
4. **Kiểu Biểu Đồ**: Chuyển nhanh giữa **Nến Nhật (Candlestick)**, **Biểu Đồ Thanh (Bar)** và **Biểu Đồ Đường (Line)**.
5. **Nút Chỉ Báo (<kbd>Ctrl</kbd> + <kbd>I</kbd>)**: Mở nhanh hộp thoại tìm và gắn chỉ báo kỹ thuật.
6. **Cụm Điều Khiển Zoom**: **Box Zoom** (<kbd>Alt</kbd> + Kéo chuột), **Phóng to** (<kbd>Ctrl</kbd> + <kbd>+</kbd>), **Thu nhỏ** (<kbd>Ctrl</kbd> + <kbd>-</kbd>), và **Đặt lại Auto-Fit** (<kbd>Ctrl</kbd> + <kbd>0</kbd>).
7. **Chia Bố Cục Đa Biểu Đồ**: Nút `+` (<kbd>Ctrl</kbd> + <kbd>N</kbd>) và chuyển đổi nhanh giữa **1 Biểu đồ** (<kbd>Alt</kbd> + <kbd>1</kbd>), **2 Chia dọc** (<kbd>Alt</kbd> + <kbd>2</kbd>), **2 Chia ngang** (<kbd>Alt</kbd> + <kbd>3</kbd>), **3 Biểu đồ** (<kbd>Alt</kbd> + <kbd>4</kbd>), và **Lưới 2×2** (<kbd>Alt</kbd> + <kbd>5</kbd>).
8. **Nhóm Phải**: **Chụp ảnh màn hình** (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>), **Mở AI Copilot** (<kbd>Ctrl</kbd> + <kbd>J</kbd>), và **Cài đặt** (<kbd>Ctrl</kbd> + <kbd>P</kbd>).

---

## 2. Bảng Market Watch & Navigator

![Bảng Market Watch và Navigator](/img/screenshots/marketwatch-navigator.png)

### Market Watch (<kbd>Ctrl</kbd> + <kbd>M</kbd>)
- Lọc theo **Sàn giao dịch** hoặc loại thị trường (**ALL**, **SPOT**, **PERP**, **INVERSE**).
- Bấm biểu tượng kính lúp để gõ tìm tên cặp coin ngay trong bảng giá.
- Hiển thị **Giá gần nhất**, **Thay đổi 24h %** (nhấp nháy xanh/đỏ theo tick), cùng các cột Cao/Thấp/Khối lượng 24h (chuột phải vào tiêu đề cột để bật/tắt).
- **Nhấp đúp** vào một dòng để mở ngay trên biểu đồ đang chọn, hoặc **chuột phải → Mở ở tab mới**.

### Navigator (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>)
- Liệt kê theo danh mục toàn bộ **hơn 40 chỉ báo tích hợp sẵn** và các plugin `PTView.SDK` đã cài (**Trend**, **Oscillators**, **Volatility**, **Volume**, **Bill Williams**).
- **Nhấp đúp** hoặc **chuột phải → Gắn vào biểu đồ** để thêm nhanh lên chart.

---

## 3. Khung Biểu Đồ, Phóng To (Zoom) & Data Window

![Khu Vực Biểu Đồ, Zoom và Data Window](/img/screenshots/chart-zoom.png)

### Thao Tác Phóng To / Thu Nhỏ & Kéo Trục Linh Hoạt
- **Cuộn Con Lăn Chuột**: Phóng to / thu nhỏ trục thời gian ngay tại vị trí con trỏ.
- **Kéo Trục Giá (Bên Phải)**: Kéo giãn hoặc nén biên độ giá theo chiều dọc; nhấp đúp vào trục giá (hoặc bấm nút `A`) để tự động căn khít (**Auto-Fit**).
- **Kéo Trục Thời Gian (Bên Dưới)**: Kéo giãn hoặc thu hẹp khoảng cách các cây nến.
- **Box Zoom (<kbd>Alt</kbd> + Kéo Chuột)**: Bật nút Box Zoom trên toolbar (hoặc giữ phím <kbd>Alt</kbd> và khoanh một vùng chữ nhật trên chart) để phóng to đúng vùng giá đang quan tâm. Nhấn <kbd>Alt</kbd> + <kbd>Z</kbd> để lùi lại 1 bước zoom hoặc <kbd>Ctrl</kbd> + <kbd>0</kbd> để đặt lại toàn bộ.
- **Cảm Ứng Đa Điểm (Multi-Touch)**: Chụm/tách hai ngón tay để phóng to/thu nhỏ trục thời gian, vuốt để cuộn biểu đồ hoặc kéo trục giá có quán tính mượt mà, và chạm đúp trên màn hình cảm ứng để đặt lại/căn khít.

### Cửa Sổ Dữ Liệu Số — Data Window (<kbd>Ctrl</kbd> + <kbd>D</kbd>)
- Hiển thị chính xác giá trị tại cây nến con trỏ đang trỏ vào: **Open**, **High**, **Low**, **Close**, **Volume**, kèm giá trị số trực tiếp của từng đường chỉ báo đang chạy trên chart.

### Tab Làm Việc (Multi-Tab), Đồng Bộ Trong Tab & Tự Động Lưu
- **Nhiều Tab Làm Việc (Workspace Tabs)**: Tách riêng từng không gian theo dõi (ví dụ: Tab `BTC Đa Khung`, Tab `Altcoins`).
  - Bấm dấu **`+`** bên phải thanh Tab (hoặc nhấn <kbd>Ctrl</kbd> + <kbd>T</kbd>, hoặc giữ **<kbd>Ctrl</kbd> + Nhấp đúp** một mã trong **Market Watch**) để mở Tab mới. Bản Community (Miễn phí) mở tối đa **3 tab**; bản Pro **không giới hạn tab**.
  - **Nhấp đúp** vào tiêu đề Tab để đổi tên trực tiếp (<kbd>Enter</kbd> để lưu, <kbd>Esc</kbd> để hủy), hoặc **chuột phải** lên Tab để chọn **Đổi tên Tab**, **Nhân bản Tab** hoặc **Đóng Tab**.
- **Đồng Bộ Mã & Con Trỏ 2 Chiều Trong Tab**: Khi Tab đang chia 2–4 biểu đồ, 2 nút icon vuông sẽ hiện ở góc phải thanh Tab (và trong menu chuột phải trên Tab):
  - **Đồng bộ mã (Sync Symbol — icon mắt xích):** Khi bật, đổi cặp coin ở 1 ô sẽ tự động đổi theo ở các ô còn lại trong cùng Tab nhưng **vẫn giữ nguyên khung thời gian và chỉ báo riêng từng ô** — rất tiện khi soi đa khung (`1D / 4H / 1H / 15m`). Mặc định tắt để bạn mở nhiều cặp coin khác nhau trong cùng 1 Tab.
  - **Đồng bộ con trỏ (Sync Crosshair — icon tâm ngắm):** Khi bật, rê chuột ở 1 ô sẽ đồng bộ **đường dọc thời gian** sang tất cả các ô trong Tab và đồng bộ cả **đường ngang giá** sang các ô đang xem cùng mã coin.
- **Tự Động Lưu & Khôi Phục**: Toàn bộ các tab, bố cục lưới, trạng thái đồng bộ, mã coin, khung giờ, chỉ báo và nét vẽ được tự động lưu khi đóng ứng dụng và khôi phục nguyên trạng ở lần mở sau.
- Hỗ trợ **4 giao diện** (**Dark**, **Midnight OLED**, **CyberNavy**, **Light**) tùy chọn trong **Settings → General**.
