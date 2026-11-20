---
sidebar_position: 3
title: Advanced Indicator Techniques
---

# Advanced Indicator Techniques

Learn how to leverage nested child indicators, multi-buffer outputs, color index buffers, channel fills, and zero-allocation patterns in `PTView.SDK`.

---

## 1. Composition with Child Indicators

Complex indicators often reuse standard moving averages or oscillators. Instead of re-implementing math from scratch, `IndicatorBase` supports creating or attaching child indicators:

```csharp
public sealed class MacdCustomIndicator : IndicatorBase
{
    private IIndicator? _fastEma;
    private IIndicator? _slowEma;
    private IIndicator? _signalEma;

    protected override void OnInit()
    {
        int fastPeriod = GetParam("FastPeriod", 12);
        int slowPeriod = GetParam("SlowPeriod", 26);
        int signalPeriod = GetParam("SignalPeriod", 9);

        // Child indicators inherit parent context and timeframe
        _fastEma = CreateChildIndicator<ExponentialMovingAverageIndicator>(
            "fast",
            new IndicatorParameter("Period", "Period", typeof(int), fastPeriod));

        _slowEma = CreateChildIndicator<ExponentialMovingAverageIndicator>(
            "slow",
            new IndicatorParameter("Period", "Period", typeof(int), slowPeriod));
    }
}
```

Child indicators are automatically reset during `Reset()` and cleaned up during `Dispose()`.

---

## 2. Dynamic Segment Coloring via ColorIndex Buffer

To change the color of an indicator line dynamically (for example, green when rising and red when falling), configure a `ColorIndexPlotId` and supply a `ColorPalette`:

```csharp
public sealed class TrendSlopeIndicator : IndicatorBase
{
    public const string PlotLine = "line";
    public const string PlotColorIndex = "color_idx";

    public override IndicatorMetadata Metadata { get; } = IndicatorMetadata.Create(
        id: "Sample.TrendSlope",
        name: "Trend Slope Indicator",
        shortName: "Slope",
        description: "Dynamic color moving average",
        type: IndicatorType.Overlay,
        parameters: [new IndicatorParameter("Period", "Period", typeof(int), 20)],
        plots:
        [
            new IndicatorPlot(
                id: PlotLine,
                displayName: "Slope Line",
                style: PlotStyle.Line,
                color: ColorRgba.PtBlue,
                lineWidth: 2,
                colorIndexPlotId: PlotColorIndex,
                colorPalette: new Dictionary<int, ColorRgba>
                {
                    [0] = ColorRgba.PtGreen, // 0 = Rising (Bullish)
                    [1] = ColorRgba.PtRed,   // 1 = Falling (Bearish)
                    [2] = ColorRgba.PtMuted      // 2 = Neutral
                })
        ]);
```

In `Calculate(input)`, write to both buffers:
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

        // Assign palette index: 0 for Bullish, 1 for Bearish
        int colorIdx = currentValue >= previousValue ? 0 : 1;
        _colorBuffer?.SetValue(index, colorIdx);
    }
```

---

## 3. Shaded Area Fills (`IndicatorFill`)

To shade the region between two plots (such as Bollinger Bands channels or Donchian Channels):

```csharp
    fills:
    [
        new IndicatorFill(
            id: "channel_fill",
            displayName: "Channel Background",
            plotId1: "UpperBand",
            plotId2: "LowerBand",
            color: ColorRgba.PtBlue.WithOpacity(0.15),
            bearishColor: ColorRgba.PtRed.WithOpacity(0.15))
    ]
```

---

## 4. Zero-Allocation Hot Path Best Practices

1. **Avoid LINQ in `Calculate()`**: Never use `.Where()`, `.Select()`, `.Average()`, or `.ToList()` inside `Calculate`. Use straightforward `for` loops or index access.
2. **Reuse Buffer Instances**: Retrieve buffer references once during `OnInit()` and store them in private fields.
3. **Check `input.IsIncremental`**: If maintaining stateful running averages or exponential smoothing multipliers, store state in variables and be mindful of active candle tick updates.

