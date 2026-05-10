---
name: tao-bai-viet
description: Tạo bài viết blog HTML hoàn chỉnh cho website NPP Lan Thành — đúng cấu trúc HTML, đúng CSS class, ảnh xác minh có attribution, schema JSON-LD, mobile responsive.
---

# Skill: Tạo bài viết blog NPP Lan Thành

Khi user yêu cầu viết bài, thực hiện **đúng thứ tự** các bước sau.

---

## Bước 1 — Tìm ảnh trước khi viết

Chạy quy trình trong `.claude/skills/tim-anh.md`:
1. Xác định cần bao nhiêu ảnh (hero + mỗi section lớn)
2. WebSearch từng ảnh trên Unsplash với từ khóa tiếng Anh
3. Truy cập URL để xác minh photo ID và tên photographer
4. Ghi lại bảng: Photo ID | Photographer | URL xác minh

**Không được** dùng photo ID chưa xác minh. Nếu không tìm được ảnh phù hợp cho 1 section, ghi rõ thay vì đoán.

---

## Bước 2 — Soạn nội dung

**Hook (mở bài):** Đánh vào nỗi đau hoặc câu hỏi thực tế của chủ quán bia.

**Thân bài:**
- Chia section rõ ràng với H2, H3
- Mỗi luận điểm có dẫn chứng, số liệu, ví dụ cụ thể
- Độ dài tối thiểu 2000 chữ cho cluster, 3500+ cho pillar
- Dùng component CSS có sẵn (xem Bước 4) để trực quan hóa nội dung

**Kết bài:** CTA liên hệ NPP Lan Thành + cảnh báo pháp lý rượu bia.

---

## Bước 3 — Schema JSON-LD (BẮT BUỘC)

Mỗi bài phải có 3 schema blocks trong `<head>`:

```html
<!-- 1. Article -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "image": "https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1200&h=630&q=80",
  "author": { "@type": "Organization", "name": "NPP Lan Thành" },
  "publisher": {
    "@type": "Organization", "name": "NPP Lan Thành",
    "logo": { "@type": "ImageObject", "url": "https://trinhngo-da.github.io/npp-lanthanh/assets/favicon.svg" }
  },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "mainEntityOfPage": "https://trinhngo-da.github.io/npp-lanthanh/blog/{slug}.html"
}
</script>

<!-- 2. FAQPage — 3 câu hỏi thực tế từ nội dung bài -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
}
</script>

<!-- 3. BreadcrumbList -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://trinhngo-da.github.io/npp-lanthanh/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://trinhngo-da.github.io/npp-lanthanh/blog.html" },
    { "@type": "ListItem", "position": 3, "name": "Tiêu đề bài", "item": "https://trinhngo-da.github.io/npp-lanthanh/blog/{slug}.html" }
  ]
}
</script>
```

---

## Bước 4 — Cấu trúc HTML BẮT BUỘC

### Layout tổng thể

```
<head> — meta, schema, CSS links, inline <style> cho component riêng của bài
<body>
  <div id="readProgress">
  Age gate
  Header (copy từ bài cũ — không thay đổi)
  <section class="art-page-hero"> — hero image + tiêu đề + breadcrumb
  <div class="art-layout">          ← ĐÚNG (không phải art-body-wrap)
    <article class="art-content" id="artContent">
      ... nội dung ...
      <div class="art-related">
        <h3>Bài viết liên quan</h3>
        <div class="related-grid">  ← ĐÚNG (không phải art-related-grid)
          ...
        </div>
      </div>
    </article>
    <aside class="art-sidebar">    ← ĐÚNG (sau article, không phải trước)
      <div class="sidebar-toc">
        <h4>Mục lục bài viết</h4>
        <ul class="toc-list" id="tocList">
          <li><a href="#section-id">1. Tên section</a></li>
        </ul>
      </div>
      <div class="sidebar-cta">
        <h4>🍺 Đặt hàng sỉ ngay</h4>
        <p>Heineken, Tiger, Larue, Bia Việt, Strongbow — giao hàng đảm bảo chuỗi lạnh, khu vực TP.HCM</p>
        <a href="tel:0918878188">📞 0918 878 188</a>
      </div>
    </aside>
  </div>
  Footer (xem template dưới)
  Scripts
</body>
```

### ❌ Các lỗi cấu trúc đã xảy ra — KHÔNG LẶP LẠI

| Sai | Đúng |
|-----|------|
| `div.art-body-wrap` | `div.art-layout` |
| `aside.art-toc` đặt TRƯỚC article | `aside.art-sidebar` đặt SAU article |
| `div.toc-title` | `div.sidebar-toc > h4` |
| `ul` (không có class) | `ul.toc-list` |
| `div.art-related-grid` | `div.related-grid` |
| `footer.footer > div.footer-inner` | `footer > div.footer-top` |

### Reading progress bar (đầu `<body>`)

```html
<div id="readProgress"></div>
<style>
  #readProgress {
    position: fixed; top: 63px; left: 0; height: 3px; width: 0%;
    background: linear-gradient(90deg, var(--green), #00A844);
    z-index: 850; transition: width .1s linear;
  }
</style>
```

### Hero section

```html
<section class="art-page-hero">
  <img src="https://images.unsplash.com/{PHOTO_ID}?auto=format&fit=crop&w=1400&q=80"
       alt="Mô tả ảnh"
       loading="eager"
       onerror="this.src='https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1400&q=80'" />
  <div class="art-page-hero-content">
    <div class="art-page-inner">
      <nav class="art-breadcrumb">
        <a href="../index.html">Trang chủ</a> &rsaquo;
        <a href="../blog.html">Blog</a> &rsaquo;
        <span>Tên bài viết ngắn</span>
      </nav>
      <span class="art-page-cat bcard-cat c-vanhanh">Vận hành</span>
      <h1 class="art-page-title">Tiêu đề đầy đủ</h1>
      <div class="art-page-meta">
        <span>✍️ NPP Lan Thành</span>
        <span>📅 DD/MM/YYYY</span>
        <span>⏱ X phút đọc</span>
      </div>
    </div>
  </div>
  <p class="img-credit" style="position:absolute;bottom:8px;right:16px;color:rgba(255,255,255,0.7);font-size:11px;">
    Ảnh: <a href="https://unsplash.com/photos/{ID}" target="_blank" rel="noopener" style="color:rgba(255,255,255,0.8);">Tên Photographer</a> / Unsplash
  </p>
</section>
```

### Figure ảnh trong bài (có attribution)

```html
<figure class="article-figure" data-aos="zoom-in">
  <img src="https://images.unsplash.com/{ID}?auto=format&fit=crop&w=900&q=80"
       alt="Mô tả nội dung"
       loading="lazy"
       onerror="this.src='https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80'" />
  <figcaption>
    Mô tả ảnh liên quan đến nội dung —
    Ảnh: <a href="https://unsplash.com/photos/{ID}" target="_blank" rel="noopener">{Tên Photographer}</a> / Unsplash
  </figcaption>
</figure>
```

CSS cho figure (thêm vào `<style>` nội tuyến nếu chưa có trong style.css):
```css
.article-figure { margin: 28px 0; border-radius: 12px; overflow: hidden; }
.article-figure img { width: 100%; height: auto; display: block; border-radius: 12px; }
.article-figure figcaption { font-size: 12px; color: #718096; margin-top: 8px; text-align: center; font-style: italic; line-height: 1.5; }
.article-figure figcaption a { color: #4CAF78; text-decoration: none; }
```

### CTA box (cuối bài, trước related)

```html
<div class="art-cta-box" data-aos="fade-up">
  <div class="cta-icon">🍺</div>
  <h3>NPP Lan Thành — Đặt hàng sỉ Heineken, Tiger, Larue</h3>
  <p>Giao hàng đảm bảo chuỗi lạnh, hỗ trợ kỹ thuật tận nơi. Liên hệ ngay để nhận báo giá tốt nhất.</p>
  <a href="tel:0918878188" class="cta-btn-main">Gọi ngay: 0918 878 188</a>
  <a href="../index.html#about" class="cta-btn-sec">Xem thông tin đặt hàng</a>
</div>
```

### Footer (copy chính xác — KHÔNG tự ý đổi class)

```html
<footer>
  <div class="footer-top">
    <div>
      <div class="ft-logo">LAN THÀNH NPP</div>
      <p class="ft-desc">
        Nhà phân phối chính thức của Heineken Việt Nam.<br/>
        792 Phan Đăng Lưu, KP Tân An 3, P. Phú An, TP. HCM<br/>
        ĐT: <a href="tel:0918878188" style="color:rgba(255,255,255,.75);">0918 878 188</a>
        &nbsp;·&nbsp; Thứ 2–7: 07:00–12:00 &amp; 14:00–18:00
      </p>
    </div>
    <div class="ft-col">
      <h4>Kiến thức</h4>
      <ul>
        <li><a href="../blog.html">Blog ngành bia</a></li>
        <li><a href="../tai-lieu.html">Tài liệu &amp; Ebook</a></li>
        <li><a href="../case-study.html">Case Study</a></li>
      </ul>
    </div>
    <div class="ft-col">
      <h4>Liên hệ</h4>
      <ul>
        <li><a href="tel:0918878188">0918 878 188</a></li>
        <li><a href="mailto:trinhngo0357@gmail.com">trinhngo0357@gmail.com</a></li>
        <li><a href="../index.html">Trang chủ</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-legal">
    <div class="legal-badges">
      <span class="legal-badge">⚠️ Người dưới 18 tuổi không được uống rượu bia</span>
      <span class="legal-badge">🚗 Đã uống rượu bia – Không lái xe</span>
      <span class="legal-badge">🤰 Phụ nữ mang thai không nên uống rượu bia</span>
    </div>
  </div>
  <p class="footer-copy">© 2026 Lan Thành NPP – Nhà Phân Phối Chính Thức Heineken Việt Nam. Bảo lưu mọi quyền.</p>
</footer>
```

### Scripts (cuối body)

```html
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 50 });

  if (sessionStorage.getItem('av')) document.getElementById('ageGate').style.display = 'none';
  function passAge() {
    document.getElementById('ageGate').style.display = 'none';
    sessionStorage.setItem('av', '1');
  }

  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    document.getElementById('readProgress').style.width =
      (scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0) + '%';
  });

  function toggleNav() {
    document.getElementById('mobileNav').classList.toggle('open');
  }
</script>
```

---

## Bước 5 — Sau khi tạo file HTML

1. Cập nhật **blog.html** — đổi card "Sắp có" thành `<a href="...">` live
2. Cập nhật **sitemap.xml** — uncomment entry, set `<lastmod>` đúng ngày
3. Cập nhật **cross-links** trong các bài trước — đổi "Sắp có" thành link thật
4. Cập nhật **memory** — `content_roadmap.md` và `project_status.md`
5. Commit + push

---

## Bước 6 — Checklist cuối

- [ ] Ảnh hero: xác minh ID, có attribution, `loading="eager"`
- [ ] Ảnh section: xác minh ID, `<figure>` + `<figcaption>` + attribution
- [ ] Layout: `art-layout` → `art-content` + `art-sidebar` (sidebar ĐẶT SAU article)
- [ ] TOC: `sidebar-toc > h4` + `ul.toc-list`
- [ ] Footer: `footer > div.footer-top > div.ft-col`
- [ ] Related grid: `div.related-grid` (không phải `art-related-grid`)
- [ ] Schema: Article + FAQPage + BreadcrumbList
- [ ] Cảnh báo pháp lý trong bài và footer
- [ ] Age gate hoạt động (sessionStorage `'av'`)
- [ ] Reading progress bar `#readProgress` ở `top: 63px`
- [ ] Cross-links với bài đã live
