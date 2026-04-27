---
description: Color palette, typography, and layout rules for the Lan Thành website. Apply whenever writing CSS or designing UI components.
globs: ["**/*.html", "**/*.css", "**/*.tsx", "**/*.jsx"]
alwaysApply: false
---

# Design System – NPP Lan Thành

## Bảng màu (Pastel × Heineken)

### Màu chính
```css
--green:         #007A33;   /* Heineken green – dùng cho ribbon, header border */
--green-dark:    #005824;   /* Hover states, headings nổi bật */
--green-primary: #4CAF78;   /* Nút bấm chính, section banner */
--green-light:   #F0FAF4;   /* Nền section xen kẽ (mint nhạt) */
```

### Màu nền section (xen kẽ theo thứ tự)
```css
--bg-main:     #FAFAF8;   /* Trắng ngà – nền mặc định */
--bg-mint:     #F0FAF4;   /* Xanh mint nhạt */
--bg-cream:    #FFF8EC;   /* Vàng kem */
--bg-lavender: #F4F0FA;   /* Tím lavender */
--bg-blue:     #EAF4FB;   /* Xanh lơ nhạt */
```

### Màu nhấn & văn bản
```css
--red-accent:  #E07070;   /* Cảnh báo, ngôi sao Heineken, giá cả */
--text-dark:   #2D3748;   /* Nội dung chính */
--text-muted:  #718096;   /* Mô tả, caption */
--green-deep:  #276749;   /* Tiêu đề nổi bật trên nền sáng */
```

### Gradient
```css
/* Hero banner overlay */
linear-gradient(135deg, rgba(0,60,20,.75), rgba(76,175,120,.45), transparent)

/* Nút CTA chính */
linear-gradient(135deg, #4CAF78, #2E9B5F)

/* Section hero background */
linear-gradient(135deg, #E8F5EE, #F0FAF9)
```

### Shadow pastel
```css
--shadow:    0 4px 24px rgba(76,175,120,0.12);
--shadow-lg: 0 12px 40px rgba(76,175,120,0.18);
```

## Typography

- **Font:** `Be Vietnam Pro` → `Nunito` → `Inter` (Google Fonts, theo thứ tự ưu tiên)
- **H1/H2:** `font-weight: 700–800`, `letter-spacing: -0.5px`
- **Chữ trên nền xanh lá:** màu `#fff`, `text-transform: uppercase`, `font-weight: 700+`
- **Body text:** `font-size: 14–15px`, `line-height: 1.7–1.8`

## Layout

- Sections phân chia bằng **ribbon** (dải băng) màu `--green`, text trắng, uppercase
- **border-radius:** card = `12–16px`, nút = `999px` (pill), ảnh = `12px`
- **box-shadow:** dùng `--shadow` kiểu pastel (tránh shadow xám đậm)
- **Max-width container:** `1280px`, `margin: 0 auto`
- **KHÔNG dùng** màu xanh `#008200` thuần túy – quá chói, phải pha pastel
