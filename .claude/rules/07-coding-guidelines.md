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

## Hình ảnh — Quy tắc toàn site

**Nguyên tắc bất biến: TẤT CẢ ảnh phải là ảnh thật (photography), không dùng illustration, anime, vector, graphic.**

### Ảnh sản phẩm (trang chủ, product page)
1. Ảnh thật từ Heineken Vietnam / nhà cung cấp
2. Wikimedia Commons (ảnh Heineken, Tiger, Strongbow có sẵn)
3. CSS bottle mock với brand colors (chỉ dùng khi hoàn toàn không có ảnh thật)

### Ảnh bài viết blog (hero + section figures)
Dùng skill `.claude/skills/tim-anh.md` — quy trình 5 bước:
1. **WebSearch** tìm ảnh Unsplash với từ khóa tiếng Anh chính xác
2. **Xác minh** photo ID bằng cách truy cập `unsplash.com/photos/{id}`
3. **Lấy tên photographer** để ghi attribution
4. **Format `<figure>` + `<figcaption>`** với link attribution đầy đủ
5. **Kiểm tra đồng bộ** với bài đã có — tất cả phải cùng style ảnh thật

### Attribution bắt buộc cho mọi ảnh Unsplash
```html
<figure class="article-figure">
  <img src="https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=900&q=80"
       alt="Mô tả nội dung" loading="lazy"
       onerror="this.src='https://images.unsplash.com/photo-{FALLBACK}?auto=format&fit=crop&w=900&q=80'" />
  <figcaption>
    Mô tả ảnh —
    Ảnh: <a href="https://unsplash.com/photos/{ID}" target="_blank" rel="noopener">{Tên Photographer}</a> / Unsplash
  </figcaption>
</figure>
```

### KHÔNG được dùng
- `picsum.photos` — seed ngẫu nhiên, không kiểm soát nội dung
- `via.placeholder.com` hoặc placeholder màu xám
- Photo ID Unsplash chưa xác minh bằng WebSearch
- Ảnh không liên quan (bài bia mà hiện ghế, gym, người lạ)

### onerror fallback: dùng Unsplash beer đã xác minh
```html
<!-- Fallback đã xác minh — ảnh bia Heineken thật -->
onerror="this.src='https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80'"
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
- [ ] Mọi ảnh blog đã xác minh photo ID qua WebSearch (không dùng ID từ trí nhớ)
- [ ] Mọi ảnh blog có attribution `<figcaption>` với tên photographer + link Unsplash
- [ ] Style ảnh đồng bộ với bài đã xuất bản (tất cả ảnh thật, không illustration)
