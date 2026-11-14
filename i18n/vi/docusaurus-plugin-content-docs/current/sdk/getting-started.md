---
sidebar_position: 1
title: Bắt Đầu với PTView.SDK
---

# Bắt Đầu với `PTView.SDK`

`PTView.SDK` là bộ thư viện hợp đồng (contract library) chính thức, hoàn toàn không phụ thuộc thư viện bên ngoài, dùng để lập trình các chỉ báo phân tích kỹ thuật và plugin độc lập cho **PtView Workstation**.

---

## Các Nguyên Tắc Thiết Kế Cốt Lõi

1. **Zero Phụ Thuộc Bên Ngoài**: `PTView.SDK` hoàn toàn không phụ thuộc vào WPF, Windows Forms, Newtonsoft.Json hay các thư viện mạng của sàn giao dịch. Thư viện nhắm tới chuẩn C# thuần túy trên `.NET 10`.
2. **Xác Định & Tính Toán Từng Nến (Incremental)**: Xây dựng xung quanh hàm `Calculate(IndicatorInput input)`. Động cơ sẽ gọi hàm này tuần tự khi nạp chuỗi nến lịch sử và gọi gia tăng khi có tick giá mới trong phiên nến hiện tại.
3. **Cô Lập Tiến Trình Tuyệt Đối (Out-of-Process Isolation)**: Plugin có thể được thực thi trong một tiến trình độc lập (`PTView.PluginWorker`). Mọi sự cố phát sinh ngoại lệ không bắt được (unhandled exception) từ plugin bên thứ ba sẽ không làm gián đoạn ứng dụng giao dịch chính.

---

## Cài Đặt & Tạo Dự Án Đầu Tiên

### Yêu Cầu Môi Trường
- Cài đặt [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0).
- Trình biên dịch: Visual Studio 2026, JetBrains Rider, hoặc Visual Studio Code kèm C# Dev Kit.

### 1. Tạo Dự Án Class Library
Mở cửa sổ dòng lệnh (Terminal hoặc PowerShell) và gõ lệnh:

```powershell
dotnet new classlib -n MyTradingIndicators -f net10.0
cd MyTradingIndicators
```

### 2. Cài Đặt Gói NuGet `PTView.SDK`

```powershell
dotnet add package PTView.SDK
```

Hoặc thêm trực tiếp vào file `.csproj`:
```xml
<ItemGroup>
  <PackageReference Include="PTView.SDK" Version="0.2.0-beta.1" />
</ItemGroup>
```

---

## Viết Chỉ Báo Mẫu: Typical Price Indicator

Dưới đây là mã nguồn hoàn chỉnh của một chỉ báo tính toán mức giá tiêu biểu Typical Price `(High + Low + Close) / 3`:

```csharp
using PTView.SDK.Indicators;
using PTView.SDK.Models;

namespace MyTradingIndicators;

public sealed class TypicalPriceIndicator : IndicatorBase
{
    public const string Id = "MyIndicators.TypicalPrice";
    public const string PlotTypical = "typical";

    private IIndicatorBuffer? _outputBuffer;

    public override IndicatorMetadata Metadata { get; } = IndicatorMetadata.Create(
        id: Id,
        name: "Typical Price Indicator",
        shortName: "TypPrice",
        description: "Tính toán mức giá trung bình của Đỉnh, Đáy và Đóng cửa cho mỗi cây nến.",
        type: IndicatorType.Overlay,
        parameters: [],
        plots:
        [
            new IndicatorPlot(PlotTypical, "Giá Tiêu Biểu", PlotStyle.Line, ColorRgba.PtCyan, lineWidth: 2)
        ],
        category: "Price Action");

    protected override void OnInit()
    {
        _outputBuffer = GetPlotBuffer(PlotTypical);
    }

    public override void Calculate(IndicatorInput input)
    {
        if (_outputBuffer == null)
            return;

        int index = input.CurrentIndex;
        var candle = input.Candles[index];
        double typical = (double)(candle.High + candle.Low + candle.Close) / 3.0;

        _outputBuffer.SetValue(index, typical);
    }
}
```

---

## Các Bước Tiếp Theo

- Xem [Hướng Dẫn Phát Triển Chỉ Báo](indicator-development.md) để tìm hiểu cách thêm tham số cấu hình, màu sắc và bộ đệm dữ liệu.
- Khám phá [Kỹ Thuật Chỉ Báo Nâng Cao](advanced-indicators.md) để lồng ghép các chỉ báo con và bộ đệm đổi màu linh hoạt.
- Đọc [Đóng Gói & Triển Khai Plugin](plugin-packaging.md) để đưa bộ chỉ báo của bạn vào bàn làm việc PtView Workstation.

