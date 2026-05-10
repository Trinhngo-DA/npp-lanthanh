---
name: tim-anh
description: Tìm và xác minh hình ảnh thật từ Unsplash cho từng section của bài viết blog NPP Lan Thành. Dùng WebSearch để kiểm tra ID ảnh, lấy tên photographer, format HTML figure đúng chuẩn với attribution.
---

# Skill: Tìm ảnh thật cho bài viết blog

## Mục tiêu
Với mỗi bài viết (hoặc section cụ thể), tìm ảnh Unsplash **đã được xác minh nội dung**, đúng chủ đề, và format HTML hoàn chỉnh với ghi nguồn chuyên nghiệp.

---

## Quy trình bắt buộc (thực hiện đúng thứ tự)

### Bước 1 — Phân tích nhu cầu ảnh

Xác định:
- **Hero image**: ảnh banner đầu bài, phải thể hiện chủ đề tổng quan
- **Section images**: mỗi section cần ảnh để trực quan hóa (quy trình, không gian, con người, thiết bị)
- **Figure captions**: mỗi ảnh cần mô tả ngắn giải thích nội dung

### Bước 2 — Tìm kiếm trên Unsplash bằng WebSearch

Với **mỗi ảnh cần tìm**, thực hiện WebSearch theo công thức:

```
site:unsplash.com/photos [từ khóa tiếng Anh mô tả chính xác nội dung]
```

Ví dụ:
- Cần ảnh kho bia → `site:unsplash.com/photos beer warehouse storage shelves`
- Cần ảnh rót bia → `site:unsplash.com/photos bartender pouring beer glass`
- Cần ảnh nhân viên quán → `site:unsplash.com/photos restaurant staff service`
- Cần ảnh nhiệt độ lưu trữ → `site:unsplash.com/photos cold storage refrigerator`

**Sau khi có kết quả**, truy cập URL Unsplash của ảnh để xác nhận:
- Tên photographer (Attribution Name)
- Mô tả ảnh (để verify nội dung)
- URL chuẩn: `https://unsplash.com/photos/{photo-id}`

### Bước 3 — Xác minh nội dung ảnh

**BẮT BUỘC**: Trước khi dùng bất kỳ photo ID nào:
1. Truy cập `https://unsplash.com/photos/{id}` để xem mô tả
2. Xác nhận ảnh đúng nội dung (không phải ghế, gym, portrait ngẫu nhiên)
3. Nếu không truy cập được → tìm ID khác, không được dùng ID chưa xác minh

**Không bao giờ** dùng photo ID từ trí nhớ mà không WebSearch kiểm tra lại.

### Bước 4 — Format HTML chuẩn

Mỗi ảnh xuất ra theo template:

```html
<!-- Hero image -->
<div class="article-hero-img">
  <img
    src="https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1200&q=80"
    alt="{Mô tả nội dung ảnh bằng tiếng Việt}"
    loading="eager"
    onerror="this.src='https://images.unsplash.com/photo-{FALLBACK_ID}?auto=format&fit=crop&w=1200&q=80'"
  />
  <p class="img-credit">
    Ảnh: <a href="https://unsplash.com/photos/{ID}" target="_blank" rel="noopener noreferrer">{Tên Photographer}</a>
    trên <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
  </p>
</div>

<!-- Section figure (trong bài) -->
<figure class="article-figure">
  <img
    src="https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=900&q=80"
    alt="{Mô tả nội dung ảnh}"
    loading="lazy"
    onerror="this.src='https://images.unsplash.com/photo-{FALLBACK_ID}?auto=format&fit=crop&w=900&q=80'"
  />
  <figcaption>
    {Mô tả ngắn giải thích ảnh liên quan đến nội dung} —
    Ảnh: <a href="https://unsplash.com/photos/{ID}" target="_blank" rel="noopener noreferrer">{Tên Photographer}</a> / Unsplash
  </figcaption>
</figure>
```

### Bước 5 — Kiểm tra đồng bộ toàn site

Sau khi chọn xong ảnh, so sánh với style ảnh trong các bài đã có:
- `blog/van-hanh-quan-bia-az.html` — Pillar 1
- `blog/bao-quan-bia-dung-nhiet-do.html` — Cluster 1.1
- `blog/quan-ly-kho-bia-fifo.html` — Cluster 1.2

**Tiêu chí đồng bộ:**
- Tất cả phải là **ảnh thật** (photography), không dùng illustration, anime, vector, graphic design
- Tone màu: ưu tiên ảnh có tông xanh lá, vàng kem, hoặc neutral (đồng bộ với palette site)
- Chủ thể: người Châu Á > người Tây (phù hợp bối cảnh Việt Nam), nhưng ảnh quán bar/bia quốc tế vẫn ok
- Ánh sáng: bright & clean > dark moody (đồng bộ với thiết kế pastel của site)
- Nếu ảnh mới quá khác biệt (ví dụ quá dark, quá editorial) → tìm ảnh khác

---

## CSS cần thêm vào bài viết (nếu chưa có)

```css
.article-figure {
  margin: 28px 0;
  border-radius: 12px;
  overflow: hidden;
}
.article-figure img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}
.article-figure figcaption {
  font-size: 12px;
  color: #718096;
  margin-top: 8px;
  text-align: center;
  font-style: italic;
  line-height: 1.5;
}
.article-figure figcaption a {
  color: #4CAF78;
  text-decoration: none;
}
.img-credit {
  font-size: 11px;
  color: #718096;
  margin-top: 6px;
  text-align: right;
  font-style: italic;
}
.img-credit a {
  color: #4CAF78;
  text-decoration: none;
}
```

---

## Nguồn ảnh được dùng (theo thứ tự ưu tiên)

| Nguồn | Điều kiện dùng | Attribution cần thiết |
|-------|---------------|----------------------|
| **Unsplash** | Ưu tiên số 1, miễn phí commercial | Tên photographer + link |
| **Wikimedia Commons** | Ảnh có license CC BY hoặc CC0 | Theo license ghi sẵn trên trang |
| **Pexels** | Backup nếu Unsplash không có | "Photo by {name} on Pexels" |
| **Ảnh thật của NPP Lan Thành** | Ưu tiên tuyệt đối nếu user cung cấp | Ghi "Ảnh: NPP Lan Thành" |

**Không được dùng:**
- `via.placeholder.com` hoặc placeholder màu xám
- `picsum.photos` (seed ngẫu nhiên, không kiểm soát nội dung)
- Ảnh Unsplash không xác minh ID (risk ảnh sai nội dung)
- Ảnh có watermark hoặc không rõ license

---

## Output cuối cùng

Sau khi hoàn thành, xuất ra:

### Bảng tổng hợp ảnh

| Section | Photo ID | Photographer | URL xác minh | Ghi chú |
|---------|----------|-------------|-------------|---------|
| Hero | photo-xxx | Tên | unsplash.com/photos/xxx | ✅ verified |
| Section 2 | photo-yyy | Tên | unsplash.com/photos/yyy | ✅ verified |

### HTML đã format đầy đủ

Từng `<figure>` hoặc `<div class="article-hero-img">` hoàn chỉnh, sẵn sàng paste vào bài.
