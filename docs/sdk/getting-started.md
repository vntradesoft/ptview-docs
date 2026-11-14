---
sidebar_position: 1
title: Getting Started with PTView.SDK
---

# Getting Started with `PTView.SDK`

`PTView.SDK` is the official, zero-dependency contract library for creating custom technical indicators and out-of-process plugins for **PtView Workstation**.

---

## Architectural Principles

1. **Zero External Dependencies**: `PTView.SDK` has no dependencies on WPF, Windows Forms, Newtonsoft.Json, or exchange network libraries. It targets pure `.NET 10`.
2. **Deterministic & Incremental**: Designed around `Calculate(IndicatorInput input)`. The engine invokes this sequentially for history bars and incrementally for real-time forming bars.
3. **Out-of-Process Isolation**: Plugins can run inside `PTView.PluginWorker` through an isolated IPC bridge. An unhandled exception or memory leak in a third-party plugin will never crash the core trading workstation.

---

## Installation & Setup

### Prerequisites
- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- Visual Studio 2026, JetBrains Rider, or VS Code with C# Dev Kit.

### 1. Create a Class Library
Open your terminal and create a new project:

```powershell
dotnet new classlib -n MyTradingIndicators -f net10.0
cd MyTradingIndicators
```

### 2. Add the `PTView.SDK` NuGet Package

```powershell
dotnet add package PTView.SDK
```

Alternatively, if building directly inside the PTView source tree or referencing a local build:
```xml
<ItemGroup>
  <PackageReference Include="PTView.SDK" Version="0.2.0-beta.1" />
</ItemGroup>
```

---

## Hello World Indicator

Here is a minimal, complete indicator that plots the typical price `(High + Low + Close) / 3`:

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
        description: "Computes the arithmetic average of High, Low, and Close for each bar.",
        type: IndicatorType.Overlay,
        parameters: [],
        plots:
        [
            new IndicatorPlot(PlotTypical, "Typical Price", PlotStyle.Line, ColorRgba.PtCyan, lineWidth: 2)
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

## Next Steps

- Follow the [Indicator Development Guide](indicator-development.md) to learn how to add configurable parameters, custom colors, and data buffers.
- Learn about [Advanced Indicators](advanced-indicators.md) for child indicators and multi-buffer state tracking.
- Discover how to package your library in [Plugin Packaging & Deployment](plugin-packaging.md).
