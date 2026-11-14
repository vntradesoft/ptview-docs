---
sidebar_position: 2
title: Developing Custom Indicators
---

# Developing Custom Indicators

Every custom indicator in `PTView.SDK` inherits from `IndicatorBase` and implements the `Metadata` property, `OnInit()` lifecycle hook, and `Calculate(IndicatorInput input)` method.

---

## Anatomy of an Indicator

```csharp
public abstract class IndicatorBase : IIndicator
{
    // 1. Static Metadata defining identity, plots, parameters, and fills
    public abstract IndicatorMetadata Metadata { get; }

    // 2. Lifecycle hook called when the indicator is initialized or parameters change
    protected virtual void OnInit() { }

    // 3. Reset hook called when the series is cleared or reloaded
    protected virtual void OnReset() { }

    // 4. Computation hook called sequentially for historical bars and incrementally for live bars
    public abstract void Calculate(IndicatorInput input);
}
```

---

## Step 1: Defining Metadata, Parameters & Plots

Use `IndicatorMetadata.Create` to define your indicator's characteristics:

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
        description: "Calculates an unweighted moving average over N bars.",
        type: IndicatorType.Overlay, // Overlay on price chart, or IndicatorType.SeparatePane for sub-chart
        parameters:
        [
            new IndicatorParameter(
                name: ParamPeriod,
                displayName: "Period",
                valueType: typeof(int),
                defaultValue: 20,
                description: "Number of lookback bars",
                minValue: 1,
                maxValue: 500)
        ],
        plots:
        [
            new IndicatorPlot(
                id: PlotSma,
                displayName: "SMA Line",
                style: PlotStyle.Line,
                color: ColorRgba.PtBlue,
                lineWidth: 2)
        ],
        category: "Trend",
        iconKey: "Icon.LineChart");
```

---

## Step 2: Retrieving Parameters in `OnInit()`

When the workstation initializes your indicator (or whenever the user edits parameters in the UI), `OnInit()` is invoked. Use `GetParam<T>()` and `GetPlotBuffer()`:

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

## Step 3: Implementing `Calculate(IndicatorInput input)`

The `Calculate` method receives an `IndicatorInput` containing:
- `input.Candles`: Read-only list of all historical candles.
- `input.CurrentIndex`: Index of the bar currently being calculated (from $0$ to $N - 1$).
- `input.IsIncremental`: `false` during historical backfill; `true` when updating the live forming candle.
- `input.TimeFrame`: Active chart timeframe (`1m`, `5m`, `1h`, etc.).
- `input.GetCandle(barsAgo)`: Helper to access historical candles relative to `CurrentIndex`.

```csharp
    public override void Calculate(IndicatorInput input)
    {
        if (_smaBuffer == null)
            return;

        int index = input.CurrentIndex;

        // Warm-up period: Not enough bars to compute SMA
        if (index < _period - 1)
        {
            _smaBuffer.SetValue(index, null);
            return;
        }

        // Compute rolling sum
        double sum = 0.0;
        for (int i = index - _period + 1; i <= index; i++)
        {
            sum += (double)input.Candles[i].Close;
        }

        _smaBuffer.SetValue(index, sum / _period);
    }
```

---

## Setting Buffer Values

`IIndicatorBuffer` provides multiple methods to store output:

- `buffer.SetValue(index, double? value)`: Sets or overwrites the value at an exact bar index. Pass `null` if the indicator cannot produce a value at that bar (e.g. during warm-up).
- `buffer.GetValue(index)`: Reads the value previously computed for bar `index`.
- `buffer.GetLastValue()`: Retrieves the value at the latest bar.

