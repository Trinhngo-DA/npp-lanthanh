---
description: Page structure, section order, and feature requirements for the Lan Thành website. Reference when building or extending any page.
alwaysApply: false
---

# Cấu trúc trang web – NPP Lan Thành

## Thứ tự sections bắt buộc (Homepage)

```
Age Gate (popup xác nhận 18+)
  ↓
Header (sticky)
  ↓
Hero Carousel
  ↓
Section: Tin tức & Sự kiện
  ↓
Section: Khám phá các nhãn hàng
  ↓
Section: Trách nhiệm với cộng đồng  ← KHÔNG được bỏ qua
  ↓
Section: Giới thiệu NPP Lan Thành
  ↓
Footer (pháp lý)
```

## Chi tiết từng section

### Age Gate
- Popup modal toàn màn hình, xuất hiện khi load trang lần đầu
- Hai nút: "Tôi đủ 18 tuổi" (xanh) và "Chưa đủ tuổi" (redirect google.com)
- Lưu trạng thái vào `sessionStorage` để không hiện lại trong cùng phiên

### Header
- Logo NPP Lan Thành (shield L+T) + Logo Heineken
- Nav links: Trang chủ, Tin tức, Sản phẩm, An toàn, Giới thiệu, Đặt hàng (CTA)
- `position: sticky; top: 0` với `border-bottom: 3px solid #007A33`
- Mobile: hamburger menu → slide-down nav

### Hero Carousel
- 3 slides: Tết campaign, Tiger Beer, NPP Lan Thành
- Full-width, autoplay 5 giây, prev/next arrows, dot indicators
- Gradient overlay xanh lá để text luôn đọc được trên mọi ảnh

### Tin tức & Sự kiện
- Ribbon header xanh + "Xem tất cả" link bên phải
- Grid: 4 cột desktop → 2 cột tablet/mobile
- Mỗi card: ảnh (140px) + tag màu + tiêu đề + mô tả ngắn + ngày

### Khám phá các nhãn hàng
- Ribbon header xanh + "Xem tất cả" link
- Grid: 5 cột desktop → 3 cột tablet/mobile
- Mỗi card: ảnh sản phẩm thật (ưu tiên) hoặc CSS bottle mock + tên + mô tả + badge

### Trách nhiệm với cộng đồng
- 3 warning cards (cảnh báo độ tuổi, lái xe, phụ nữ mang thai)
- Safe-home section: nút gọi Grab, Xanh SM, Be, Taxi 1080, Tài xế lái hộ
- Bảng phạt nồng độ cồn (NĐ 168/2024/NĐ-CP): 3 mức, ô tô + xe máy + hình phạt bổ sung

### Giới thiệu NPP Lan Thành
- Layout 2 cột desktop (text trái, map phải)
- Stats: 20+ năm, 500+ đại lý, 5 nhãn hàng
- Google Maps embed: `792 Phan Đăng Lưu, Phú An, Thuận An`
- Thông tin liên hệ: địa chỉ, hotline, email, giờ làm việc

### Footer
- Dark green gradient background
- 3 cột: Brand info + Navigation + Contact
- Legal badges (cảnh báo tuổi, lái xe, mang thai)
- Copyright line

## Sitemap mở rộng (tương lai)
- `/tin-tuc` – Trang danh sách bài viết
- `/san-pham` – Trang danh mục sản phẩm chi tiết
- `/ve-chung-toi` – Trang giới thiệu đầy đủ
- `/dat-hang` – Form đặt hàng / liên hệ nhập hàng
