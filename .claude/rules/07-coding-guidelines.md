---
description: Tech stack, coding standards, image sources, and performance rules for the Lan Thành project.
globs: ["**/*.html", "**/*.css", "**/*.js", "**/*.ts", "**/*.tsx"]
alwaysApply: false
---

# Coding Guidelines – NPP Lan Thành

## Tech Stack

- **Ưu tiên:** HTML/CSS/JS thuần (không có build step) – phù hợp cho static landing page
- **Scale up:** React/Next.js + TailwindCSS khi cần CMS hoặc nhiều trang
- **Animations:** AOS 2.3.1 via CDN (xem rule `04-animations.md`)
- **Maps:** Google Maps embed (không cần API key với format `maps.google.com/maps?q=...&output=embed`)
- **Fonts:** Google Fonts – `Be Vietnam Pro` (ưu tiên), `Nunito`, `Inter`

## Hình ảnh sản phẩm

**Ưu tiên theo thứ tự:**
1. Ảnh thật từ Heineken Vietnam / nhà cung cấp
2. Wikimedia Commons (ảnh Heineken, Tiger, Strongbow có sẵn)
3. CSS bottle mock với brand colors (fallback khi không có ảnh thật)

**KHÔNG được dùng:**
- Placeholder màu xám (`#ccc`, `via.placeholder.com`)
- Ảnh không liên quan đến ngữ cảnh bia/sự kiện

**Nguồn ảnh tin tức / hero:** `picsum.photos/seed/{id}/{w}/{h}` – reliable, không cần API key.

**Luôn có `onerror` fallback cho ảnh sản phẩm:**
```html
<img src="..." onerror="this.style.display='none';showFallback(this)" />
```

## Aesthetics (Thiết kế "đắt tiền")

- **Whitespace:** Padding section tối thiểu `48–52px` trên/dưới
- **Hover effects:**
  - Card: `translateY(-5px)` + `box-shadow` tăng
  - Button: `opacity: 0.9` hoặc `translateY(-2px)`
  - Product card: `translateY(-7px) scale(1.03)`
- **Transitions:** `0.2s–0.3s ease` cho mọi interactive element
- **KHÔNG dùng:** màu xám đậm, shadow đen nặng, font hệ thống mặc định

## Performance

```html
<!-- Lazy load tất cả ảnh ngoài fold đầu -->
<img loading="lazy" ... />

<!-- Font preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

- Ảnh hero (fold đầu): dùng `loading="eager"`
- Production: minify CSS/JS, compress images (WebP preferred)
- Carousel: `will-change: transform` trên `.c-track`

## Google Maps Embed

```html
<!-- Địa chỉ NPP Lan Thành (không cần API key) -->
<iframe
  src="https://maps.google.com/maps?q=792+Phan+%C4%90%C4%83ng+L%C6%B0u,+Ph%C3%BA+An,+Thu%E1%BA%ADn+An,+B%C3%ACnh+D%C6%B0%C6%A1ng&output=embed&hl=vi&z=16"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

## Cấu trúc file

```
/
├── index.html          # Trang chủ
├── CLAUDE.md           # Quick reference (tóm tắt)
├── .claude/
│   └── rules/          # Rule files chi tiết (thư mục này)
└── assets/             # (khi tách CSS/JS ra file riêng)
    ├── style.css
    └── main.js
```

## Checklist trước khi hoàn thành task

- [ ] Mobile responsive đã test (390px width)
- [ ] AOS animations đã gắn đúng loại
- [ ] Age gate hoạt động
- [ ] Footer có đủ 3 cảnh báo pháp lý
- [ ] Ảnh có `alt` text đầy đủ
- [ ] Touch targets ≥ 44px
- [ ] Không có placeholder màu xám
