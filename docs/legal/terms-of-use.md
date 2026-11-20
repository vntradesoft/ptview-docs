---
sidebar_position: 1
title: Terms of Use (EULA) & Risk Disclaimer
---

# Terms of Use (EULA), Trading Risk Disclaimer & Compliance

:::info Policy Metadata
- **Policy Version:** `1.1.1`
- **Effective Date:** `2026-11-18`
- **Source:** Synchronized with the in-app agreement (`LegalDocumentsCatalog` in **PtView Workstation**).
:::

---

## 1. Proprietary Software License Grant (EULA)

Copyright (c) 2026 PtView. All rights reserved.

**PtView Workstation** ("the Software") is proprietary commercial software licensed, not sold, to you under the terms of this Agreement:

- **Grant of License:** Subject to your continuous compliance with this Agreement, PTView grants you a personal, revocable, non-exclusive, non-transferable license to install and run the Software on your personal workstation devices.
- **Restrictions:** You may **not** decompile, reverse-engineer, disassemble, modify, remove copyright/license notices, redistribute, sublicense, rent, or resell the Software binaries or built-in modules without prior written authorization from PTView.
- **Plugin SDK Exception:** Indicators and extensions developed independently using the public `PTView.SDK` contract (MIT-licensed) remain the property of their respective authors.
- **Remote Runtime Configuration & Regional Availability:** To comply with applicable regional laws, exchange terms of service, and operational stability, the Software periodically synchronizes cryptographically signed configuration manifests (`PTV-RC1` via Remote Care) that may enable, restrict, or pause supported exchanges, contract types (`SPOT`, `PERP`, `INVERSE`, `FUTURES`), curated public news feeds, maintenance banners, or commercial licensing gates.

---

## 2. Financial, Trading & AI Copilot Risk Disclaimer

:::warning Important — Please Read Carefully Before Using the Software
- **No Investment or Financial Advice:** All market data, candlestick charts, technical indicators, drawing tools, and AI Copilot / MCP responses provided within PTView are strictly for informational, educational, and technical research purposes only. Nothing in the Software constitutes financial, investment, legal, or tax advice.
- **High Risk of Digital Asset Trading:** Trading cryptocurrencies, spot pairs, perpetual futures (`PERP`), and derivatives involves substantial risk of loss and is not suitable for every investor. Leverage can work against you as well as for you. You are solely responsible for all trading decisions and any resulting financial gains or losses.
- **AI Copilot & Automated Tool Limitations:** AI models (including Gemini, OpenAI, DeepSeek, Ollama, or custom providers) can hallucinate, misinterpret market structures, or produce inaccurate support/resistance levels and indicators. Always verify market data independently before executing any trade.
- **Market Feed & Software "AS IS" Warranty Disclaimer:** Real-time WebSocket feeds and historical klines depend on third-party public exchange APIs available for your region and build configuration, as well as local network conditions. Supported exchanges and contract types may vary dynamically by jurisdiction and exchange terms. PTView makes no warranty that market data will be uninterrupted, delay-free, or error-free. In no event shall PTView or its authors be liable for any direct, indirect, incidental, or consequential trading losses or damages.
- **Exchange Non-Affiliation Notice:** PtView Workstation is independent software and is not affiliated with, endorsed by, sponsored by, or officially partnered with any third-party cryptocurrency exchange supported or displayed in the Software. All exchange names and trademarks belong to their respective owners.
:::

---

## 3. Data Storage, Local Credentials & Privacy Policy

- **Local-First Architecture:** Your chart workspaces, custom drawings, indicator templates, and user-configured **AI Provider API keys** and **Telegram Bot tokens** are stored strictly locally on your machine under your user data directory (`%LocalAppData%\PTView` or the `data\` folder for Portable builds).
- **Public Market Data Only (No Exchange Account Credentials):** PTView connects directly from your device solely to public market-data endpoints of supported exchanges and to your configured AI or Telegram endpoints. PTView never requests, accesses, or stores exchange trading account credentials or exchange API keys, and never transmits your local AI API keys, Telegram Bot tokens, or chart workspaces to any PTView server.
- **Remote Care Configuration Sync & Fleet Telemetry (`https://remote-care.ptview.app`; Enabled by Default, Opt-Out):** To deliver signed runtime configuration, regional compliance rules, and maintenance notices, the Software periodically transmits non-personal technical metadata: a pseudonymous hardware fingerprint (`MachineId` formatted as `PTM-...`), application version, running build channel (`Stable` or `Beta`), edition tier, OS version, UI locale, active configuration revision, enabled exchange names, and active news source count. This channel never transmits AI keys, Telegram tokens, workspaces, drawings, trading activity, or personal identity details. You can disable device telemetry and check-ins anytime under **Settings → General → Privacy & Diagnostics** or **Help → Remote Care & Support...** to stop transmitting your `MachineId`, OS/edition telemetry, and banners—the Software will only fetch anonymous global compliance manifests (`anon=1` without device identifiers) or use verified local cache when offline.
- **Voluntary Diagnostics Support Bundle (`Help → Remote Care & Support...`):** Only when you explicitly submit a support request inside the Remote Care dialog does the Software upload your issue summary, system environment snapshot, and up to the last `180` log lines (with AI API keys, Telegram tokens, credentials, and user profile paths automatically masked by `SecretRedactor`) to generate support ticket `CARE-...`.
- **Anonymous Crash & Error Telemetry (Sentry; Opt-Out):** By default, anonymous crash stack traces and deduplicated background errors are sent to Sentry with IP addresses, machine identifiers, credentials, and user profile paths automatically scrubbed. You can disable this anytime under **Settings → General → Privacy & Diagnostics**.
- **Compliance & Consent Audit Trail:** When you accept this Agreement inside the application, the Software records a verifiable local consent audit entry (timestamp, policy version, document SHA-256 hash, and environment metadata) in your local configuration folder to verify regulatory and license compliance.
- **Privacy Inquiries:** For questions regarding data handling or our [Privacy Policy](./privacy-policy.md), please contact [support@ptview.app](mailto:support@ptview.app).

---

## 4. Product Legal Classification, Settlement & Vietnam Compliance

- **Legal Classification:** PtView Workstation is proprietary packaged technical analysis and charting workstation software (VSIC `6201`). The Software is **not** a financial broker, money transmitter, custodian, or exchange.
- **Non-Custodial Architecture:** The Software does not hold user funds, provide managed trading accounts, or accept investment deposits in any capacity.
- **Commercial Licensing Settlement:** When commercial licensing is active, all software licenses transacted within Vietnam are billed and settled strictly in Vietnamese Dong (`VND`) via licensed banking institutions (`VietQR` / `Napas247`) in compliance with Decree `52/2024/ND-CP`. Cryptocurrency is not accepted as domestic legal tender.
- **Software Taxation:** Packaged software licenses are exempt from VAT (`0%` rate) under Vietnamese tax regulations (Circular `219/2013/TT-BTC`).

---

## 5. Contact, Support & Official Channels

- **Official Website:** [https://ptview.app](https://ptview.app)
- **Documentation Portal:** [https://docs.ptview.app](https://docs.ptview.app)
- **Support & Legal Email:** [support@ptview.app](mailto:support@ptview.app)
- **Issue Tracker:** [https://github.com/vntradesoft/ptview-releases/issues](https://github.com/vntradesoft/ptview-releases/issues)
