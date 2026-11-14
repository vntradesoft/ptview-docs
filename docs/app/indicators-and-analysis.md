---
sidebar_position: 3
title: Indicators & Analysis
---

# Technical Indicators & Analysis

PtView Workstation includes **40+ built-in technical indicators** computed in real time with smooth incremental updates on every candle tick.

![Quick Indicator Search and Navigator](/img/screenshots/indicators-browser.png)

---

## 1. Two Ways to Add Indicators

1. **Quick Indicator Search (<kbd>Ctrl</kbd> + <kbd>I</kbd>)**: Press <kbd>Ctrl</kbd> + <kbd>I</kbd> or click **Indicators** on the main toolbar, type e.g. `EMA`, `RSI`, `MACD`, `SuperTrend`, and press <kbd>Enter</kbd>.
2. **Navigator Panel (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>)**: Browse indicators grouped by category (**Trend**, **Oscillators**, **Volatility**, **Volume**, **Bill Williams**, and **Custom SDK Plugins**). Double-click any indicator to attach it.

:::note Community vs. Pro Indicator Quota
- **Community Edition**: Up to **5 active indicators per chart** (a subtle `X/5` quota badge appears in the chart header).
- **Pro Edition / 28-Day Trial**: **Unlimited** active indicators per chart and full support for external `PTView.SDK` C# plugins.
:::

---

## 2. Managing, Reordering & Customizing Indicators

Open the **Indicator Manager** from the chart overlay badge or **Chart → Indicators**:
- **Drag-and-Drop Reordering**: Drag sub-pane indicators (like RSI or MACD) up or down to rearrange sub-pane order cleanly.
- **Edit Parameters & Colors**: Double-click any indicator plot line (or click the gear icon) to customize periods, multipliers, price source (`Close`, `Open`, `High`, `Low`, `HL2`, `HLC3`), line width, stroke style, colors, and cloud/band fill opacity.
- **Child / Composite Indicators**: Apply an indicator (such as an EMA or SMA) directly onto another indicator's output series (e.g. a smoothed moving average over RSI).
- **Show / Hide / Remove**: Toggle visibility with the eye icon without deleting your custom parameters, or click the trash icon to remove it.

---

## 3. Built-In Indicator Categories

| Category | Popular Included Indicators |
|---|---|
| **Trend** | Simple Moving Average (SMA), Exponential Moving Average (EMA), DEMA, TEMA, Hull Moving Average (HMA), VWMA, SuperTrend, Parabolic SAR, Ichimoku Cloud, Alligator |
| **Oscillators** | RSI, MACD, Stochastic, Stochastic RSI, CCI, Awesome Oscillator (AO), Accelerator Oscillator (AC), DeMarker, Momentum, Williams %R |
| **Volatility** | Bollinger Bands, Bollinger BandWidth, Donchian Channels, Keltner Channels, Average True Range (ATR), Moving Average Envelopes |
| **Volume** | On-Balance Volume (OBV), Volume Profile / Spike, Money Flow Index (MFI), Accumulation/Distribution, VWAP |
| **Bill Williams** | Fractals, Gator Oscillator, Market Facilitation Index |

:::tip Ask AI Copilot to Configure Indicators
With **AI Copilot** (<kbd>Ctrl</kbd> + <kbd>J</kbd>), you can simply type: *"Add EMA 20 in blue, EMA 50 in gold, and RSI(14) below the chart"* and PTView attaches and styles them automatically.
:::
