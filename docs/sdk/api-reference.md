---
sidebar_position: 5
title: SDK API Reference
---

# `PTView.SDK` API Reference

A comprehensive technical reference for the public types, contracts, and data models in `PTView.SDK`.

---

## 1. Indicator Contracts (`PTView.SDK.Indicators`)

### `IIndicator`
The core interface implemented by all indicators.
- `IndicatorMetadata Metadata { get; }`: Static metadata describing parameters and plots.
- `void Initialize(IndicatorContext context)`: Called on setup.
- `void Reset()`: Clears internal calculation buffers and state.
- `void Calculate(IndicatorInput input)`: Computes indicator output for bar `input.CurrentIndex`.

### `IndicatorBase`
Convenient abstract base class implementing `IIndicator`.
- `T GetParam<T>(string name, T defaultValue)`: Retrieves runtime parameter value.
- `IIndicatorBuffer? GetPlotBuffer(string plotId)`: Retrieves buffer registered for plot.
- `IIndicatorBuffer RegisterBuffer(string id, IndicatorBufferType type, int capacity)`: Registers custom scratchpad buffer.
- `TChild CreateChildIndicator<TChild>(string subId, params IndicatorParameter[] parameters)`: Creates scoped child indicator.
- `virtual void OnInit()`: Initialization callback.
- `virtual void OnReset()`: Reset callback.

### `IndicatorInput`
Bar series input data passed to `Calculate`.
- `IReadOnlyList<Candle> Candles`: Immutable candlestick history.
- `int CurrentIndex`: Current bar index being evaluated.
- `bool IsIncremental`: True if updating forming candle tick; false during initial history sweep.
- `TimeFrame TimeFrame`: Active chart timeframe interval.
- `Candle? GetCandle(int barsAgo = 0)`: Helper to fetch historical candle.

### `IIndicatorBuffer`
Time-series storage for bar plot values.
- `double? this[int index]`: Direct index accessor.
- `void SetValue(int index, double? value)`: Sets value at index (auto-expands).
- `double? GetValue(int index)`: Gets value or null if out of range.
- `double? GetLastValue()`: Gets latest computed value.
- `void Clear()`: Empties buffer.

---

## 2. Market Data Models (`PTView.SDK.Models`)

### `Candle` (readonly record struct)
- `long OpenTimeMs`: UTC Unix millisecond timestamp.
- `decimal Open`: Opening price.
- `decimal High`: Highest price.
- `decimal Low`: Lowest price.
- `decimal Close`: Closing price.
- `decimal Volume`: Base currency volume.
- `bool IsClosed`: Finalized vs active forming candle.
- `DateTime OpenTimeUtc`: Converted UTC DateTime.
- `Candle UpdateTick(decimal price, decimal addedVolume, bool isClosed)`: Computes tick delta.

### `CompactCandle` (readonly record struct, 48 bytes)
- Serialized 48-byte memory layout (`OpenTimeMs`, `Open`, `High`, `Low`, `Close`, `Volume` as double).
- Zero-alloc binary history caching and GPU interop.

### `TimeFrame` (readonly record struct)
- Predefined static instances: `OneMinute` (`1m`), `ThreeMinutes` (`3m`), `FiveMinutes` (`5m`), `FifteenMinutes` (`15m`), `ThirtyMinutes` (`30m`), `OneHour` (`1h`), `TwoHours` (`2h`), `FourHours` (`4h`), `SixHours` (`6h`), `TwelveHours` (`12h`), `OneDay` (`1d`), `OneWeek` (`1w`).
- `TimeFrame FromCode(string code)`: Parses custom strings (e.g. `"45m"`, `"3d"`).

### `ColorRgba` (readonly record struct)
- 32-bit color representation: `byte R`, `byte G`, `byte B`, `byte A = 255`.
- PtView standard palette: `PtBlue`, `PtOrange`, `PtAmber`, `PtPurple`, `PtGreen`, `PtRed`, `PtTeal`, `PtSalmon`, `PtYellow`, `PtMuted`, `PtCyan`, `PtBurgundy`.
- Helper methods: `FromHex(string)`, `FromRgb(r, g, b)`, `FromArgb(a, r, g, b)`, `WithOpacity(double)`.

---

## 3. Plugin Lifecycle (`PTView.SDK.Plugins`)

### `IPTViewPlugin`
- `PluginMetadata Metadata { get; }`: Identity and version.
- `Task InitializeAsync(IPluginContext context, CancellationToken ct)`: Plugin bootstrap.
- `Task StartAsync(CancellationToken ct)`: Plugin activation.
- `Task StopAsync(CancellationToken ct)`: Plugin teardown.

### `IPluginContext`
- `Version SdkVersion { get; }`: Current host SDK runtime version.
- `void RegisterIndicator<TIndicator>()`: Registers indicator factory.
- `void LogInfo(string message)`: Emits platform log entry.
- `void LogError(string message, Exception? ex)`: Emits error entry.

