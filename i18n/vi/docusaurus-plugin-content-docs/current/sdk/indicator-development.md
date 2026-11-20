---
sidebar_position: 2
title: Phát Triển Chỉ Báo Kỹ Thuật
---

# Hướng Dẫn Phát Triển Chỉ Báo Kỹ Thuật

Mỗi chỉ báo kỹ thuật trong `PTView.SDK` kế thừa từ lớp trừu tượng `IndicatorBase` và triển khai thuộc tính `Metadata`, phương thức khởi tạo `OnInit()` và hàm tính toán `Calculate(IndicatorInput input)`.

---

## Cấu Trúc Tổng Quan Của Một Chỉ Báo

```csharp
public abstract class IndicatorBase : IIndicator
{
    // 1. Khai báo thuộc tính Metadata mô tả định danh, tham số, các đường vẽ và màu sắc
    public abstract IndicatorMetadata Metadata { get; }

    // 2. Phương thức khởi tạo được gọi khi chỉ báo được nạp hoặc khi người dùng đổi tham số
    protected virtual void OnInit() { }

    // 3. Phương thức đặt lại trạng thái khi chuỗi nến được xóa hoặc tải lại
    protected virtual void OnReset() { }

    // 4. Hàm tính toán được gọi tuần tự qua các nến lịch sử và gọi gia tăng với nến đang chạy
    public abstract void Calculate(IndicatorInput input);
}
```

---

## Bước 1: Khai Báo Metadata, Tham Số & Đường Nét (Plots)

Sử dụng hàm tiện ích `IndicatorMetadata.Create` để thiết lập thông số cho chỉ báo:

```csharp
public sealed class SimpleMovingAverageIndicator : IndicatorBase
{
    public const string Id = "Sample.SMA";
    public const string ParamPeriod = "Period";
    public const string PlotSma = "sma";

    public override IndicatorMetadata Metadata { get; } = IndicatorMetadata.Create(
        id: Id,
        name: "Simple Moving Average",
        shortName: "SMA",
        description: "Tính toán đường trung bình động giản đơn qua N cây nến.",
        type: IndicatorType.Overlay, // Overlay để vẽ đè lên đồ thị chính, hoặc SeparatePane để vẽ phân vùng phụ
        parameters:
        [
            new IndicatorParameter(
                name: ParamPeriod,
                displayName: "Chu Kỳ",
                valueType: typeof(int),
                defaultValue: 20,
                description: "Số lượng nến lịch sử tính toán",
                minValue: 1,
                maxValue: 500)
        ],
        plots:
        [
            new IndicatorPlot(
                id: PlotSma,
                displayName: "Đường SMA",
                style: PlotStyle.Line,
                color: ColorRgba.PtBlue,
                lineWidth: 2)
        ],
        category: "Trend",
        iconKey: "Icon.LineChart");
```

---

## Bước 2: Đọc Tham Số Trong Phương Thức `OnInit()`

Khi bàn làm việc khởi tạo chỉ báo (hoặc mỗi khi người dùng thay đổi giá trị tham số trong hộp thoại UI), phương thức `OnInit()` sẽ được kích hoạt. Hãy sử dụng `GetParam<T>()` và `GetPlotBuffer()` để lấy dữ liệu:

```csharp
    private int _period = 20;
    private IIndicatorBuffer? _smaBuffer;

    protected override void OnInit()
    {
        _period = GetParam(ParamPeriod, 20);
        _smaBuffer = GetPlotBuffer(PlotSma);
    }
```

---

## Bước 3: Triển Khai Hàm Tính Toán `Calculate(IndicatorInput input)`

Đối tượng `IndicatorInput` cung cấp:
- `input.Candles`: Danh sách nến bất biến toàn bộ chuỗi lịch sử.
- `input.CurrentIndex`: Vị trí chỉ số nến hiện tại đang cần tính (từ $0$ đến $N - 1$).
- `input.IsIncremental`: Mang giá trị `false` khi quét lịch sử nến và `true` khi cập nhật tick giá của nến đang hình thành.
- `input.TimeFrame`: Khung thời gian hiện tại của biểu đồ (`1m`, `5m`, `1h`, v.v.).
- `input.GetCandle(barsAgo)`: Hàm tiện ích lấy nến lịch sử cách nến hiện tại `barsAgo` vị trí.

```csharp
    public override void Calculate(IndicatorInput input)
    {
        if (_smaBuffer == null)
            return;

        int index = input.CurrentIndex;

        // Giai đoạn tích lũy ban đầu: Chưa đủ số nến theo chu kỳ
        if (index < _period - 1)
        {
            _smaBuffer.SetValue(index, null);
            return;
        }

        // Tính tổng giá trị đóng cửa trong chu kỳ
        double sum = 0.0;
        for (int i = index - _period + 1; i <= index; i++)
        {
            sum += (double)input.Candles[i].Close;
        }

        _smaBuffer.SetValue(index, sum / _period);
    }
```

---

## Các Phương Thức Ghi Bộ Đệm (Buffer)

Giao diện `IIndicatorBuffer` hỗ trợ các thao tác ghi giá trị sau:

- `buffer.SetValue(index, double? value)`: Gán hoặc ghi đè giá trị tại một vị trí nến nhất định. Truyền `null` nếu tại vị trí nến đó chỉ báo chưa có giá trị hợp lệ.
- `buffer.GetValue(index)`: Đọc giá trị đã tính tại cây nến có chỉ số `index`.
- `buffer.GetLastValue()`: Lấy giá trị của cây nến mới nhất.

