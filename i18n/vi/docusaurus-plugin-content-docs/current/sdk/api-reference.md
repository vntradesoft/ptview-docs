---
sidebar_position: 5
title: Tra Cứu API SDK Chi Tiết
---

# Bảng Tra Cứu API `PTView.SDK` Chi Tiết

Tài liệu tra cứu kỹ thuật toàn diện cho các kiểu dữ liệu, interface và model trong `PTView.SDK`.

---

## 1. Các Hợp Đồng Chỉ Báo (`PTView.SDK.Indicators`)

### `IIndicator`
Giao diện cốt lõi mà mọi chỉ báo kỹ thuật bắt buộc phải triển khai.
- `IndicatorMetadata Metadata { get; }`: Thuộc tính chứa định danh, thông số cấu hình và các nét vẽ.
- `void Initialize(IndicatorContext context)`: Khởi tạo ngữ cảnh làm việc và bộ đệm đầu ra.
- `void Reset()`: Làm sạch các bộ đệm tính toán và đặt lại trạng thái ban đầu.
- `void Calculate(IndicatorInput input)`: Thực hiện tính toán giá trị cho cây nến tại chỉ số `input.CurrentIndex`.

### `IndicatorBase`
Lớp trừu tượng tiện ích cài đặt sẵn các hành vi chung của `IIndicator`.
- `T GetParam<T>(string name, T defaultValue)`: Đọc giá trị tham số cấu hình tại runtime.
- `IIndicatorBuffer? GetPlotBuffer(string plotId)`: Lấy tham chiếu đến bộ đệm tương ứng với nét vẽ.
- `IIndicatorBuffer RegisterBuffer(string id, IndicatorBufferType type, int capacity)`: Đăng ký thêm bộ đệm tính toán phụ.
- `TChild CreateChildIndicator<TChild>(string subId, params IndicatorParameter[] parameters)`: Tạo và lồng ghép chỉ báo con.
- `virtual void OnInit()`: Callback khởi tạo khi nạp hoặc khi đổi tham số.
- `virtual void OnReset()`: Callback đặt lại trạng thái.

### `IndicatorInput`
Đối tượng dữ liệu truyền vào hàm `Calculate`.
- `IReadOnlyList<Candle> Candles`: Danh sách nến lịch sử bất biến.
- `int CurrentIndex`: Vị trí chỉ số cây nến hiện tại đang xử lý.
- `bool IsIncremental`: `true` nếu là cập nhật tick cho nến đang hình thành; `false` nếu là quét nến lịch sử.
- `TimeFrame TimeFrame`: Khung thời gian hiện tại của biểu đồ.
- `Candle? GetCandle(int barsAgo = 0)`: Hàm tiện ích lấy nến cách hiện tại `barsAgo` nến.

### `IIndicatorBuffer`
Bộ lưu trữ chuỗi thời gian cho các giá trị đồ thị.
- `double? this[int index]`: Truy cập giá trị trực tiếp theo chỉ số nến.
- `void SetValue(int index, double? value)`: Gán giá trị tại chỉ số nến (tự động mở rộng kích thước nếu cần).
- `double? GetValue(int index)`: Đọc giá trị tại chỉ số nến (trả về `null` nếu vượt ngưỡng).
- `double? GetLastValue()`: Lấy giá trị của cây nến cuối cùng.
- `void Clear()`: Xóa sạch toàn bộ dữ liệu trong bộ đệm.

---

## 2. Các Mô Hình Dữ Liệu Thị Trường (`PTView.SDK.Models`)

### `Candle` (readonly record struct)
- `long OpenTimeMs`: Mốc thời gian mở nến tính bằng UTC Unix milliseconds.
- `decimal Open`: Giá mở cửa.
- `decimal High`: Giá cao nhất.
- `decimal Low`: Giá thấp nhất.
- `decimal Close`: Giá đóng cửa.
- `decimal Volume`: Khối lượng giao dịch cơ sở.
- `bool IsClosed`: Cây nến đã đóng hay vẫn đang hình thành.
- `DateTime OpenTimeUtc`: Thời gian mở nến đã chuyển đổi sang `DateTime` UTC.
- `Candle UpdateTick(decimal price, decimal addedVolume, bool isClosed)`: Tạo một thực thể nến mới với giá và khối lượng được cập nhật theo tick.

### `CompactCandle` (readonly record struct, 48 bytes)
- Cấu trúc bộ nhớ 48 byte tối ưu (`OpenTimeMs`, `Open`, `High`, `Low`, `Close`, `Volume` dưới dạng số thực `double`).
- Dùng cho việc lưu trữ dữ liệu lịch sử nhị phân tốc độ cao và truyền thẳng vào GPU.

### `TimeFrame` (readonly record struct)
- Các đối tượng tĩnh có sẵn: `OneMinute` (`1m`), `ThreeMinutes` (`3m`), `FiveMinutes` (`5m`), `FifteenMinutes` (`15m`), `ThirtyMinutes` (`30m`), `OneHour` (`1h`), `TwoHours` (`2h`), `FourHours` (`4h`), `SixHours` (`6h`), `TwelveHours` (`12h`), `OneDay` (`1d`), `OneWeek` (`1w`).
- `TimeFrame FromCode(string code)`: Phân tích cú pháp chuỗi khung thời gian tùy ý (ví dụ: `"45m"`, `"3d"`).

### `ColorRgba` (readonly record struct)
- Biểu diễn màu sắc 32-bit: `byte R`, `byte G`, `byte B`, `byte A = 255`.
- Bảng màu chuẩn PtView: `PtBlue`, `PtOrange`, `PtAmber`, `PtPurple`, `PtGreen`, `PtRed`, `PtTeal`, `PtSalmon`, `PtYellow`, `PtMuted`, `PtCyan`, `PtBurgundy`.
- Các hàm tiện ích: `FromHex(string)`, `FromRgb(r, g, b)`, `FromArgb(a, r, g, b)`, `WithOpacity(double)`.

---

## 3. Vòng Đời Plugin (`PTView.SDK.Plugins`)

### `IPTViewPlugin`
- `PluginMetadata Metadata { get; }`: Thông tin nhận diện và phiên bản plugin.
- `Task InitializeAsync(IPluginContext context, CancellationToken ct)`: Khởi tạo plugin.
- `Task StartAsync(CancellationToken ct)`: Kích hoạt chạy plugin.
- `Task StopAsync(CancellationToken ct)`: Dừng plugin.

### `IPluginContext`
- `Version SdkVersion { get; }`: Phiên bản SDK runtime hiện tại của ứng dụng.
- `void RegisterIndicator<TIndicator>()`: Đăng ký factory của chỉ báo.
- `void LogInfo(string message)`: Ghi log thông tin vào hệ thống.
- `void LogError(string message, Exception? ex)`: Ghi log lỗi vào hệ thống.

