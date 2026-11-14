---
sidebar_position: 4
title: Đóng Gói & Triển Khai Plugin
---

# Đóng Gói & Triển Khai Plugin

PTView ứng dụng mô hình thực thi plugin cô lập, trong đó các plugin được khai báo qua file định nghĩa (`plugin.json`), cài đặt giao diện khởi chạy `IPTViewPlugin`, và sao chép vào thư mục plugin của bàn làm việc.

---

## Cấu Trúc Thư Mục Plugin

Mỗi plugin được đặt trong một thư mục riêng biệt bên trong thư mục dữ liệu người dùng:

```
%LocalAppData%\PTView\plugins\
└── <PluginId>\
    ├── plugin.json
    ├── MyIndicators.dll
    └── (các thư viện phụ thuộc .dll nếu có)
```

---

## 1. Khởi Tạo File Khai Báo `plugin.json`

File manifest cho biết các thông tin nhận diện, phiên bản và đường dẫn file thực thi chính:

```json
{
  "id": "com.mycompany.advancedindicators",
  "name": "Bộ Chỉ Báo Kỹ Thuật Nâng Cao",
  "version": "1.0.0",
  "minSdkVersion": "0.1.0",
  "description": "Bộ chỉ báo tùy biến dành cho PtView Workstation",
  "author": "Trader Systems",
  "entryPointDll": "MyIndicators.dll",
  "entryPointClass": "MyCompany.Plugins.EntryPlugin"
}
```

### Giải Thích Các Trường Trong Manifest
- `id` (bắt buộc): Mã định danh duy nhất (dạng tên miền ngược hoặc slug).
- `name` (bắt buộc): Tên hiển thị thân thiện trên giao diện.
- `version` (bắt buộc): Phiên bản theo chuẩn Semantic Versioning (`1.0.0`).
- `minSdkVersion` (tùy chọn): Phiên bản `PTView.SDK` tối thiểu cần để tương thích.
- `entryPointDll` (bắt buộc): File `.dll` chứa lớp cài đặt `IPTViewPlugin`.
- `entryPointClass` (tùy chọn): Tên lớp đầy đủ nếu trong file `.dll` có nhiều lớp triển khai plugin.

---

## 2. Triển Khai Interface `IPTViewPlugin`

```csharp
using PTView.SDK.Plugins;

namespace MyCompany.Plugins;

public sealed class EntryPlugin : IPTViewPlugin
{
    private IPluginContext? _context;

    public PluginMetadata Metadata { get; } = new(
        Id: "com.mycompany.advancedindicators",
        Name: "Bộ Chỉ Báo Kỹ Thuật Nâng Cao",
        Version: new Version(1, 0, 0),
        Description: "Bộ sưu tập chỉ báo kỹ thuật tùy biến",
        Author: "Trader Systems",
        IsBuiltIn: false);

    public Task InitializeAsync(IPluginContext context, CancellationToken ct = default)
    {
        _context = context;

        // Đăng ký các chỉ báo kỹ thuật vào hệ thống
        context.RegisterIndicator<CustomSimpleMovingAverage>();
        context.RegisterIndicator<CustomTrendOscillator>();

        context.LogInfo("Đã đăng ký thành công 2 chỉ báo vào hệ thống.");
        return Task.CompletedTask;
    }

    public Task StartAsync(CancellationToken ct = default)
    {
        _context?.LogInfo("Plugin đã được kích hoạt.");
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken ct = default)
    {
        _context?.LogInfo("Plugin đã tạm dừng.");
        return Task.CompletedTask;
    }

    public void Dispose()
    {
        // Giải phóng tài nguyên unmanaged nếu có
    }
}
```

---

## 3. Cơ Chế Cô Lập Tiến Trình (`PluginWorker`)

PTView bảo vệ bàn làm việc của bạn trước các rủi ro từ mã nguồn bên ngoài:
- **Kiến Trúc Hộp Cát (Sandbox)**: Khi chạy các plugin ngoài trong chế độ Pro, bàn làm việc sẽ khởi chạy một tiến trình con riêng biệt (`PTView.PluginWorker.exe`).
- **Lớp Giáp Bảo Vệ Ứng Dụng**: Nếu một chỉ báo bên thứ ba gặp lỗi bộ nhớ `StackOverflowException` hoặc bị crash, chỉ có tiến trình worker con bị dừng lại. Ứng dụng bàn làm việc chính vẫn giữ nguyên toàn bộ các tab đồ thị và kết nối lệnh đang mở, đồng thời hiển thị hộp thoại đề xuất khởi động lại worker mà không làm mất phiên làm việc của bạn.

