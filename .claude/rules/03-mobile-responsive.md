---
description: Mobile-first and responsive design rules. Mandatory for all UI work on this project.
globs: ["**/*.html", "**/*.css", "**/*.tsx", "**/*.jsx"]
alwaysApply: false
---

# Mobile-First & Responsive – BẮT BUỘC

Mọi UI đều phải thiết kế **mobile trước**, sau đó mở rộng lên tablet và desktop.

## Breakpoints chuẩn
```css
/* Mobile-first: viết style cho mobile trước, dùng min-width để override */
sm:  640px   /* Phablet */
md:  768px   /* Tablet */
lg:  1024px  /* Laptop */
xl:  1280px  /* Desktop */
```

## Grid responsive
| Component | Mobile (<640px) | Tablet (768px) | Desktop (1024px+) |
|-----------|-----------------|----------------|-------------------|
| News cards | 2 cột | 2 cột | 4 cột |
| Product cards | 3 cột | 3 cột | 5 cột |
| About section | 1 cột | 1 cột | 2 cột |
| Footer | 1 cột | 2 cột | 3 cột |

## Navigation
- **Mobile:** Hamburger menu (3 gạch ngang), khi click → slide-in từ trên xuống
- **Desktop (≥768px):** Full horizontal nav bar
- Menu animation: `slideDown 0.3s ease`

## Hero Carousel
- Chiều cao: `300px` mobile → `380px` tablet → `440px` desktop
- Font chữ: `clamp(22px, 4.5vw, 48px)` – tự responsive
- CTA button: full-width trên mobile, auto-width trên desktop

## Touch & Accessibility
- Mọi nút bấm/link: tối thiểu `44px × 44px` (touch target)
- Spacing giữa các tap targets: tối thiểu `8px`
- Carousel: hỗ trợ swipe trên mobile (có thể dùng touch events)

## Images
- Dùng `loading="lazy"` cho tất cả ảnh ngoài fold đầu tiên
- `object-fit: cover` cho card images để đảm bảo tỷ lệ đồng đều
