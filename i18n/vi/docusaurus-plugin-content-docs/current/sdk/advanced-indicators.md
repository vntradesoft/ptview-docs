---
sidebar_position: 3
title: Kỹ Thuật Chỉ Báo Nâng Cao
---

# Kỹ Thuật Lập Trình Chỉ Báo Nâng Cao

Tìm hiểu cách kết hợp chỉ báo con (Child Indicators), đổi màu đường vẽ linh hoạt qua ColorIndex Buffer, tạo vùng tô nền (Fills) và kỹ thuật lập trình không cấp phát bộ nhớ trong `PTView.SDK`.

---

## 1. Kết Hợp Chỉ Báo Con (Child Indicators)

Các chỉ báo phức tạp thường sử dụng lại các thuật toán trung bình động hoặc dao động kinh điển. Thay vì viết lại mã nguồn tính toán, lớp `IndicatorBase` cung cấp cơ chế tạo và đính kèm các chỉ báo con:

```csharp
public sealed class MacdCustomIndicator : IndicatorBase
{
    private IIndicator? _fastEma;
    private IIndicator? _slowEma;

    protected override void OnInit()
    {
        int fastPeriod = GetParam("FastPeriod", 12);
        int slowPeriod = GetParam("SlowPeriod", 26);

        // Chỉ báo con kế thừa ngữ cảnh và khung thời gian từ chỉ báo cha
        _fastEma = CreateChildIndicator<ExponentialMovingAverageIndicator>(
            "fast",
            new IndicatorParameter("Period", "Period", typeof(int), fastPeriod));

        _slowEma = CreateChildIndicator<ExponentialMovingAverageIndicator>(
            "slow",
            new IndicatorParameter("Period", "Period", typeof(int), slowPeriod));
    }
}
```

Các chỉ báo con sẽ tự động được gọi lệnh `Reset()` khi chuỗi nến được xóa và giải phóng tài nguyên trong hàm `Dispose()`.

---

## 2. Đổi Màu Đường Nét Động Qua Bộ Đệm ColorIndex

Để thay đổi màu sắc từng đoạn của đường vẽ (ví dụ: màu xanh khi đường dốc lên và màu đỏ khi đường dốc xuống), bạn chỉ cần chỉ định `ColorIndexPlotId` và cung cấp một `ColorPalette`:

```csharp
public sealed class TrendSlopeIndicator : IndicatorBase
{
    public const string PlotLine = "line";
    public const string PlotColorIndex = "color_idx";

    public override IndicatorMetadata Metadata { get; } = IndicatorMetadata.Create(
        id: "Sample.TrendSlope",
        name: "Trend Slope Indicator",
        shortName: "Slope",
        description: "Đường trung bình động đổi màu theo xu hướng",
        type: IndicatorType.Overlay,
        parameters: [new IndicatorParameter("Period", "Period", typeof(int), 20)],
        plots:
        [
            new IndicatorPlot(
                id: PlotLine,
                displayName: "Đường Xu Hướng",
                style: PlotStyle.Line,
                color: ColorRgba.PtBlue,
                lineWidth: 2,
                colorIndexPlotId: PlotColorIndex,
                colorPalette: new Dictionary<int, ColorRgba>
                {
                    [0] = ColorRgba.PtGreen, // 0 = Xu hướng Tăng (Bullish)
                    [1] = ColorRgba.PtRed,   // 1 = Xu hướng Giảm (Bearish)
                    [2] = ColorRgba.PtMuted      // 2 = Đi ngang (Neutral)
                })
        ]);
```

Trong hàm `Calculate(input)`, thực hiện ghi giá trị vào cả hai bộ đệm:
```csharp
    private IIndicatorBuffer? _lineBuffer;
    private IIndicatorBuffer? _colorBuffer;

    protected override void OnInit()
    {
        _lineBuffer = GetPlotBuffer(PlotLine);
        _colorBuffer = GetPlotBuffer(PlotColorIndex);
    }

    public override void Calculate(IndicatorInput input)
    {
        int index = input.CurrentIndex;
        double currentValue = ...;
        double previousValue = _lineBuffer?.GetValue(index - 1) ?? currentValue;

        _lineBuffer?.SetValue(index, currentValue);

        // Gán chỉ số bảng màu: 0 cho Tăng, 1 cho Giảm
        int colorIdx = currentValue >= previousValue ? 0 : 1;
        _colorBuffer?.SetValue(index, colorIdx);
    }
```

---

## 3. Tạo Vùng Đổ Bóng Tô Nền (`IndicatorFill`)

Để đổ màu cho khoảng trống giữa hai đường đồ thị (như dải Bollinger Bands hoặc Donchian Channels):

```csharp
    fills:
    [
        new IndicatorFill(
            id: "channel_fill",
            displayName: "Vùng Kênh Bollinger",
            plotId1: "UpperBand",
            plotId2: "LowerBand",
            color: ColorRgba.PtBlue.WithOpacity(0.15),
            bearishColor: ColorRgba.PtRed.WithOpacity(0.15))
    ]
```

---

## 4. Quy Tắc Tối Ưu Không Cấp Phát Bộ Nhớ (Zero-Allocation)

1. **Tuyệt Đối Không Dùng LINQ Trong `Calculate()`**: Không sử dụng `.Where()`, `.Select()`, `.Average()` hay `.ToList()` trong vòng lặp tính toán. Hãy dùng vòng lặp `for` truyền thống.
2. **Lưu Tham Chiếu Bộ Đệm (Buffer References)**: Gọi `GetPlotBuffer()` một lần duy nhất trong hàm `OnInit()` và lưu vào biến thành viên.
3. **Phân Biệt Cờ `input.IsIncremental`**: Khi duy trì các trạng thái tính lũy kế, hãy chú ý phân biệt giữa việc chốt nến đã đóng và cập nhật tick của nến đang chạy.

