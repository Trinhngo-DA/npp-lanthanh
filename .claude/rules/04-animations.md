---
description: Scroll animation rules using AOS library. Apply to all sections and cards on the website.
globs: ["**/*.html", "**/*.tsx", "**/*.jsx"]
alwaysApply: false
---

# Scroll Animations – BẮT BUỘC

Mọi section khi scroll vào viewport **phải có hiệu ứng xuất hiện mượt mà**.

## Thư viện: AOS (Animate On Scroll)

```html
<!-- CSS – trong <head> -->
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />

<!-- JS – cuối <body> -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
  });
</script>
```

## Mapping hiệu ứng theo loại nội dung

| Loại element | AOS attribute | Delay |
|---|---|---|
| Card tin tức | `data-aos="fade-up"` | `0, 100, 200, 300ms` (tăng dần) |
| Card sản phẩm | `data-aos="fade-up"` | `0, 80, 160, 240, 320ms` |
| Ribbon / banner section | `data-aos="fade-in"` | `0ms` |
| Ảnh hero lớn | `data-aos="zoom-in"` | `0ms` |
| Stat / số liệu | `data-aos="flip-up"` | `0, 80, 160ms` |
| About text (trái) | `data-aos="fade-right"` | `0ms` |
| About map (phải) | `data-aos="fade-left"` | `0ms` |

## Ví dụ sử dụng

```html
<!-- Card tin tức -->
<div class="news-card" data-aos="fade-up" data-aos-delay="0">...</div>
<div class="news-card" data-aos="fade-up" data-aos-delay="100">...</div>
<div class="news-card" data-aos="fade-up" data-aos-delay="200">...</div>

<!-- Ribbon section -->
<div class="ribbon" data-aos="fade-in">...</div>

<!-- Stat cards -->
<div class="stat" data-aos="flip-up" data-aos-delay="0">...</div>
<div class="stat" data-aos="flip-up" data-aos-delay="80">...</div>
```

## Fallback (nếu không dùng AOS)

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
Kết hợp với `IntersectionObserver` để trigger animation khi element vào viewport.

## Lưu ý quan trọng
- `once: true` – animation chỉ chạy **một lần** khi scroll vào, không lặp lại
- Không dùng `duration` quá dài (>900ms) – trông chậm chạp
- Screenshot/testing: cần force-show tất cả AOS elements vì headless browser không scroll
