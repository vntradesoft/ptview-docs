---
sidebar_position: 4
title: Plugin Packaging & Deployment
---

# Plugin Packaging & Deployment

PTView utilizes an isolated plugin runtime model where plugins declare a manifest (`plugin.json`), implement the `IPTViewPlugin` entry point, and deploy into the workstation plugin directory.

---

## Plugin Directory Structure

Each plugin resides in its own isolated folder within the user data directory:

```
%LocalAppData%\PTView\plugins\
└── <PluginId>\
    ├── plugin.json
    ├── MyIndicators.dll
    └── (optional dependencies .dll)
```

---

## 1. Creating the `plugin.json` Manifest

The manifest tells the host platform how to identify, validate, and load the plugin assembly:

```json
{
  "id": "com.mycompany.advancedindicators",
  "name": "Advanced Algorithmic Indicators",
  "version": "1.0.0",
  "minSdkVersion": "0.1.0",
  "description": "Custom indicator collection developed for PtView Workstation",
  "author": "Trader Systems",
  "entryPointDll": "MyIndicators.dll",
  "entryPointClass": "MyCompany.Plugins.EntryPlugin"
}
```

### Manifest Schema Reference
- `id` (required): Unique reverse-domain or slug identifier.
- `name` (required): Human-readable display name.
- `version` (required): Semantic version string (`1.0.0`).
- `minSdkVersion` (optional): Minimum compatible `PTView.SDK` version.
- `entryPointDll` (required): Main assembly containing the `IPTViewPlugin` implementation.
- `entryPointClass` (optional): Fully qualified type name if multiple classes implement `IPTViewPlugin`.

---

## 2. Implementing `IPTViewPlugin`

```csharp
using PTView.SDK.Plugins;

namespace MyCompany.Plugins;

public sealed class EntryPlugin : IPTViewPlugin
{
    private IPluginContext? _context;

    public PluginMetadata Metadata { get; } = new(
        Id: "com.mycompany.advancedindicators",
        Name: "Advanced Algorithmic Indicators",
        Version: new Version(1, 0, 0),
        Description: "Custom indicator collection",
        Author: "Trader Systems",
        IsBuiltIn: false);

    public Task InitializeAsync(IPluginContext context, CancellationToken ct = default)
    {
        _context = context;

        // Register custom indicators into the platform
        context.RegisterIndicator<CustomSimpleMovingAverage>();
        context.RegisterIndicator<CustomTrendOscillator>();

        context.LogInfo("Successfully registered 2 custom indicators.");
        return Task.CompletedTask;
    }

    public Task StartAsync(CancellationToken ct = default)
    {
        _context?.LogInfo("Plugin started.");
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken ct = default)
    {
        _context?.LogInfo("Plugin stopped.");
        return Task.CompletedTask;
    }

    public void Dispose()
    {
        // Clean up unmanaged resources if any
    }
}
```

---

## 3. Out-of-Process Isolation (`PluginWorker`)

PTView protects the workstation from unstable third-party code:
- **Sandbox Architecture**: When running third-party plugins in Pro mode, the host launches a child process (`PTView.PluginWorker.exe`).
- **Memory & Crash Shield**: If an indicator throws a fatal `StackOverflowException` or crashes ungracefully, only the worker process terminates. The main workstation displays an alert dialog and offers to restart the worker without losing open charts or trading connections.

