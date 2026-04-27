# Plan Phát Triển Nội Dung — NPP Lan Thành

> **Mục tiêu:** Biến website từ "trang giới thiệu công ty" thành **trung tâm tri thức ngành bia B2B** cho chủ quán/đại lý — sử dụng nội dung để thu hút traffic và chuyển thành đơn hàng.
>
> **Mô hình tham chiếu:** [Tomorrow Marketers](https://www.tomorrowmarketers.org/) (đã phân tích).
>
> **Thời gian thực hiện:** 24 tuần (~6 tháng).
>
> **Lưu ý pháp lý:** Mọi nội dung phải tuân thủ Luật phòng chống tác hại rượu bia 2019 — không nhắm dưới 18 tuổi, không quảng bá bia là giải pháp căng thẳng, mọi trang đều có age gate + 3 cảnh báo pháp lý (xem `.claude/rules/06-legal-safety.md`).

---

## Triết lý: Pillar-Cluster Content Model

```
        ┌─── Cluster Article 1 ───┐
        ├─── Cluster Article 2 ───┤
PILLAR ─┼─── Cluster Article 3 ───┤  (mọi cluster link về pillar)
        ├─── Cluster Article 4 ───┤  (pillar link đến tất cả cluster)
        └─── Cluster Article 5 ───┘
```

**Nguyên tắc:**
- **Pillar** = bài tổng quan dài (3000-5000 từ), bao quát chủ đề lớn → target từ khoá rộng (volume cao, khó SEO)
- **Cluster** = bài chi tiết ngắn hơn (1000-1800 từ), đào sâu 1 vấn đề cụ thể → target từ khoá long-tail (volume thấp, dễ SEO)
- **Internal link 2 chiều:** Pillar trỏ đến mọi cluster, mọi cluster trỏ về pillar
- **Kết quả:** Google hiểu website là **chuyên gia toàn diện** ở chủ đề → đẩy ranking cả cụm

---

## Đối tượng (Buyer Persona)

1. **Chủ quán nhậu/quán bia hơi mới mở** (1-2 năm) — cần tư vấn vận hành
2. **Chủ nhà hàng/khách sạn** — cần ổn định nguồn cung, giá tốt
3. **Đại lý phân phối cấp 2** — cần kiến thức bán hàng, marketing
4. **Chủ quán cà phê/coffee bar** mở rộng menu bia — cần hiểu sản phẩm

---

# GIAI ĐOẠN 1 — HẠ TẦNG NỘI DUNG (Tuần 1-2)

## Mục tiêu
Xây cấu trúc website blog hoàn chỉnh, có thể đăng bài lên Google Search trong 24h.

## 1.1 — Cấu trúc URL & file (Ngày 1-2)

```
/                          → Homepage (đã có)
/blog.html                 → Trang index blog (list bài)
/blog/{slug}.html          → Bài viết riêng từng cái
/tai-lieu.html             → Trang tải ebook/template
/case-study.html           → Trang index case study
/case-study/{slug}.html    → Case study riêng
/sitemap.xml               → Sitemap cho Google
/robots.txt                → Cho phép Google crawl
```

**Lý do dùng file riêng (không dynamic):** Đang dùng GitHub Pages, không có server-side. Mỗi bài = 1 file HTML. Có ~50 bài là OK.

## 1.2 — Template bài viết blog (Ngày 3-4)

Tạo `blog/_template.html` chứa khung chuẩn cho mọi bài:
- Header sticky giữ nguyên
- **Hero** bài viết: ảnh banner + tiêu đề + tác giả + ngày + thời gian đọc
- **Table of Contents** (TOC) — auto generate từ heading H2
- **Body** — typography đẹp, hình minh hoạ, blockquote
- **Box CTA** giữa bài: *"Cần báo giá sỉ? Gọi 0918 878 188"*
- **Box "Bài viết liên quan"** ở cuối → Internal link đến cluster cùng pillar
- **Sticky CTA** floating mobile: nút gọi + nút đặt hàng
- **Schema.org markup**: `Article` JSON-LD cho SEO

## 1.3 — Trang index `/blog.html` (Ngày 5)

- Filter theo 5 trụ cột (Vận hành / Marketing / Tài chính / Pháp lý / Thị trường)
- Search box (chỉ search local)
- Card layout 3 cột desktop, 2 cột tablet, 1 cột mobile
- "Bài nổi bật" ở đầu (3 pillar mới nhất)
- Pagination khi >12 bài

## 1.4 — SEO Infrastructure (Ngày 6)

- `sitemap.xml` — auto cập nhật mỗi lần thêm bài
- `robots.txt` — cho phép tất cả bot index
- **Google Search Console** — verify ownership, submit sitemap
- **Google Analytics 4** — tracking traffic
- **Google Business Profile** — update địa chỉ, ảnh, giờ mở cửa (local SEO mạnh)

## 1.5 — Menu Navigation update (Ngày 7)

Thêm dropdown "Kiến thức" vào header:
```
Trang chủ | Sản phẩm | Kiến thức ▾ | Case Study | Tài liệu | Đặt hàng
                          ├─ Blog
                          ├─ Theo trụ cột
                          └─ Mới nhất
```

## Deliverable Giai đoạn 1
- 1 file `blog.html`, 1 file `_template.html`, 1 file `tai-lieu.html`, 1 file `case-study.html`
- `sitemap.xml` + `robots.txt`
- GA4 + Search Console hoạt động
- 1 bài blog test (để verify hệ thống chạy đúng)

---

# GIAI ĐOẠN 2 — SẢN XUẤT NỘI DUNG PILLAR-CLUSTER (Tuần 3-12)

## Cấu trúc 5 Pillar + 25 Cluster (tổng 30 bài / 10 tuần)

### 🏛️ PILLAR 1 — "Cẩm nang vận hành quán bia A-Z 2026" (4000 từ)
> Target keyword: *"vận hành quán bia"* | *"quản lý quán nhậu"*

| # | Cluster Article | Long-tail keyword |
|---|-----------------|-------------------|
| 1.1 | Cách bảo quản bia đúng nhiệt độ 2-4°C — Giảm 40% bia hỏng | *"bảo quản bia bao nhiêu độ"* |
| 1.2 | Quản lý kho bia FIFO — Tránh hết hạn, mất vốn | *"quản lý kho bia"* |
| 1.3 | Setup hệ thống ly tách + máy rửa cho quán bia 100 khách | *"thiết bị quán bia"* |
| 1.4 | Đào tạo nhân viên phục vụ — 7 kỹ năng bắt buộc | *"đào tạo nhân viên quán nhậu"* |
| 1.5 | POS & phần mềm tính tiền cho quán bia: KiotViet vs Sapo vs iPOS | *"phần mềm quán nhậu"* |

### 🏛️ PILLAR 2 — "Bí quyết tăng doanh số bia 30% tại điểm bán" (4500 từ)
> Target keyword: *"tăng doanh số quán nhậu"* | *"marketing quán bia"*

| # | Cluster Article | Long-tail keyword |
|---|-----------------|-------------------|
| 2.1 | 10 mẫu trưng bày bia Heineken bắt mắt — Có ảnh thực tế | *"trưng bày bia trong quán"* |
| 2.2 | Combo bia + mồi nhậu lợi nhuận cao — 15 công thức | *"combo bia mồi"* |
| 2.3 | Chiến dịch khuyến mãi bia mùa Tết 2026 — Template áp dụng được ngay | *"khuyến mãi bia tết"* |
| 2.4 | Chạy Facebook Ads cho quán nhậu — Ngân sách 2 triệu/tháng | *"quảng cáo quán nhậu facebook"* |
| 2.5 | Loyalty program quán bia — Giữ chân khách quen | *"chương trình khách hàng thân thiết quán nhậu"* |

### 🏛️ PILLAR 3 — "Tính toán tài chính mở quán bia 2026 — Vốn, lãi, thuế" (4000 từ)
> Target keyword: *"mở quán bia cần bao nhiêu vốn"* | *"chi phí mở quán nhậu"*

| # | Cluster Article | Long-tail keyword |
|---|-----------------|-------------------|
| 3.1 | Mở quán bia hơi cần bao nhiêu vốn — Bóc tách 100 triệu, 300 triệu, 1 tỷ | *"vốn mở quán bia hơi"* |
| 3.2 | Margin bia chuẩn ngành — % lãi gộp từng loại bia | *"margin bia bao nhiêu"* |
| 3.3 | Cách tính P/L hàng tháng quán bia — File Excel mẫu | *"file tính lãi lỗ quán nhậu"* |
| 3.4 | Thuế quán nhậu — Hộ kinh doanh vs Doanh nghiệp, cái nào lợi hơn? | *"thuế quán nhậu"* |
| 3.5 | Quản lý dòng tiền quán bia — Tránh "lãi giấy nhưng âm tiền" | *"quản lý tiền mặt quán bia"* |

### 🏛️ PILLAR 4 — "Toàn bộ giấy phép cần có để mở quán bia hợp pháp 2026" (3500 từ)
> Target keyword: *"giấy phép kinh doanh rượu bia"* | *"thủ tục mở quán nhậu"*

| # | Cluster Article | Long-tail keyword |
|---|-----------------|-------------------|
| 4.1 | Hồ sơ xin giấy phép kinh doanh rượu bia 2026 — Step-by-step | *"thủ tục giấy phép bán rượu bia"* |
| 4.2 | Xin giấy chứng nhận ATTP cho quán nhậu — 5 bước | *"giấy phép vệ sinh quán ăn"* |
| 4.3 | PCCC cho quán bia — Quy định mới + checklist tự kiểm tra | *"pccc quán nhậu"* |
| 4.4 | Nghị định 168/2024 nồng độ cồn — Chủ quán cần lưu ý gì? | *"nồng độ cồn ảnh hưởng quán nhậu"* |
| 4.5 | Quy định quảng cáo rượu bia 2026 — Được làm gì, không được làm gì | *"quảng cáo rượu bia bị cấm"* |

### 🏛️ PILLAR 5 — "Toàn cảnh thị trường bia Việt Nam 2026 — Báo cáo phân tích" (5000 từ)
> Target keyword: *"thị trường bia việt nam"* | *"phân tích bia heineken tiger"*

| # | Cluster Article | Long-tail keyword |
|---|-----------------|-------------------|
| 5.1 | Heineken vs Tiger — Nhãn nào bán chạy hơn ở phân khúc quán nhậu? | *"heineken tiger so sánh"* |
| 5.2 | Larue Special — Tệp khách hàng & khu vực phù hợp | *"bia larue ngon không"* |
| 5.3 | Strongbow Cider — Mở rộng tệp khách nữ cho quán nhậu | *"strongbow giá sỉ"* |
| 5.4 | Bia Việt — Sản phẩm chủ lực bình dân, lời nhiều hay ít? | *"bia việt giá sỉ"* |
| 5.5 | Bia không cồn — Xu hướng 2026, có nên nhập về quán không? | *"bia không cồn việt nam"* |

## Lịch sản xuất 10 tuần (Tuần 3-12)

| Tuần | Pillar | Cluster đăng cùng | Tổng bài |
|------|--------|-------------------|----------|
| 3 | **Pillar 1** | 1.1, 1.2 | 3 |
| 4 | — | 1.3, 1.4, 1.5 | 3 |
| 5 | **Pillar 2** | 2.1, 2.2 | 3 |
| 6 | — | 2.3, 2.4, 2.5 | 3 |
| 7 | **Pillar 3** | 3.1, 3.2 | 3 |
| 8 | — | 3.3, 3.4, 3.5 | 3 |
| 9 | **Pillar 4** | 4.1, 4.2 | 3 |
| 10 | — | 4.3, 4.4, 4.5 | 3 |
| 11 | **Pillar 5** | 5.1, 5.2 | 3 |
| 12 | — | 5.3, 5.4, 5.5 | 3 |

**Mỗi pillar đăng kèm 2 cluster cùng tuần** → Google thấy ngay cụm chủ đề có chiều sâu, không phải pillar đứng lẻ loi 1 tuần.

## Quy chuẩn bài viết (BẮT BUỘC)
- **H1 chỉ 1 lần** = tiêu đề bài
- **H2** chia chương lớn (5-7 chương)
- **H3** chia mục con
- **Mỗi 300 từ** có 1 ảnh hoặc bảng
- **Internal link**: pillar→cluster (tối thiểu 5), cluster→pillar (tối thiểu 1)
- **External link**: tối thiểu 2 nguồn uy tín (Bộ Y tế, Tổng cục thuế, Heineken corporate)
- **Box CTA giữa bài**: liên hệ đặt hàng
- **FAQ schema** ở cuối: 3-5 câu hỏi thường gặp
- **Meta description**: 150-160 ký tự, có keyword chính

## Deliverable Giai đoạn 2
- 5 pillar (~20.000 từ)
- 25 cluster (~35.000 từ)
- ~50 ảnh minh hoạ + 10 infographic
- Internal link map hoàn chỉnh

---

# GIAI ĐOẠN 3 — LEAD MAGNET (Tuần 13-14)

## Triết lý
Mỗi pillar tạo ra 1 lead magnet tương ứng → User đọc xong pillar, muốn đào sâu hơn → Để lại SĐT để nhận tài liệu.

## 5 Lead Magnet (mỗi pillar 1 cái)

| Pillar | Lead Magnet | Format |
|--------|-------------|--------|
| Pillar 1 (Vận hành) | **Ebook "Cẩm nang vận hành quán bia 2026"** | PDF 50-60 trang |
| Pillar 2 (Marketing) | **Bộ 10 mẫu Poster khuyến mãi bia** | ZIP file PSD/Canva |
| Pillar 3 (Tài chính) | **File Excel quản lý quán bia** (Kho + P/L + Dòng tiền) | XLSX |
| Pillar 4 (Pháp lý) | **Checklist 30 mục giấy phép quán nhậu** | PDF + form điền |
| Pillar 5 (Thị trường) | **Báo giá sỉ chi tiết Q1/2026** | PDF cập nhật hàng quý |

## Form & Backend

**Form thu lead** (gắn ở cuối mỗi pillar + trang `/tai-lieu/`):
```
[Họ tên]
[Số điện thoại]
[Loại hình KD ▾] (Quán nhậu/Nhà hàng/Đại lý/Khác)
[Quy mô ▾] (<50 thùng/tháng — 50-150 — >150)
[Email] (optional)
□ Tôi đồng ý nhận tin tức khuyến mãi
[Tải ngay ↓]
```

**Backend Apps Script:**
- Sheet riêng `Leads_Tailieu` (cột: timestamp, tên, sđt, loại, quy mô, email, lead_magnet_nào)
- Auto email kèm link Google Drive tài liệu
- Auto thông báo Telegram/Zalo (lead nóng → gọi ngay trong 1h)

## Phân loại lead — Quan trọng
- **Lead NÓNG NHẤT:** Lead magnet #5 (Báo giá sỉ) → ưu tiên gọi trong 30 phút
- **Lead ẤM:** Lead magnet #1-4 → email nurture trong 7 ngày sau đó

## Deliverable Giai đoạn 3
- 5 file lead magnet hoàn chỉnh
- Form thu lead + Apps Script backend riêng
- Email auto-reply template
- Trang `/tai-lieu/` hiển thị 5 lead magnet

---

# GIAI ĐOẠN 4 — CASE STUDY & SOCIAL PROOF (Tuần 15-16)

## Mục tiêu
Convert lead **ấm** thành **đơn hàng** bằng câu chuyện thật từ khách đang lấy hàng.

## 5 Case Study cần làm

| # | Đối tượng | Câu chuyện chính |
|---|-----------|------------------|
| CS1 | Quán nhậu mới mở (1 năm) | Từ 30 → 120 thùng/tháng nhờ tư vấn trưng bày |
| CS2 | Nhà hàng tiệc cưới | Ổn định nguồn cung mùa cao điểm 500+ thùng |
| CS3 | Đại lý cấp 2 huyện | Chuyển đổi từ NPP khác, lời tăng 15% |
| CS4 | Khách sạn 3 sao | Combo Heineken + Strongbow cho khách nữ |
| CS5 | Quán cà phê mở rộng menu | Thêm bia tăng AOV 40% |

## Cấu trúc mỗi Case Study
1. **Tóm tắt 3 dòng** — số liệu key (before/after)
2. **Giới thiệu khách** — ảnh quán + chủ quán + địa chỉ
3. **Thách thức** — vấn đề trước khi hợp tác
4. **Giải pháp** — NPP Lan Thành đã làm gì
5. **Kết quả** — số liệu cụ thể (doanh thu, sản lượng, lợi nhuận)
6. **Quote từ chủ quán** — câu nói trực tiếp + chữ ký
7. **CTA** — "Liên hệ để có kết quả tương tự"

## Lưu ý quan trọng
- **Phải xin phép & ký consent** trước khi đăng ảnh + tên thật
- Mỗi case study link đến **2-3 cluster article** liên quan (vd: CS1 link đến bài "Trưng bày bia")
- Hiển thị section "Khách hàng tiêu biểu" trên homepage (carousel logo + 1 quote)

## Deliverable Giai đoạn 4
- 5 case study chi tiết (1500-2000 từ/cái) tại `/case-study/`
- Section "Khách hàng nói gì" trên homepage
- Video testimonial 1-2 phút (optional, làm bằng điện thoại cũng OK)

---

# GIAI ĐOẠN 5 — PHÂN PHỐI & SEO (Tuần 17-24)

## 5.1 — SEO Technical (Tuần 17)

**Audit & fix:**
- Kiểm tra Page Speed (target >90 mobile, >95 desktop)
- Lazy load tất cả ảnh blog
- Compress ảnh sang WebP (giảm 70% size)
- Minify CSS/JS production
- Check Core Web Vitals trong Search Console
- Schema markup đủ: Article, Organization, LocalBusiness, FAQPage, BreadcrumbList

## 5.2 — SEO On-page (Tuần 18-19)

**Cho từng bài đã đăng:**
- Tối ưu title tag (50-60 ký tự, có keyword chính)
- Meta description hấp dẫn click (CTR target >3%)
- Optimize URL slug (ngắn, không dấu, chứa keyword)
- Alt text cho mọi ảnh
- Internal link audit — đảm bảo pillar-cluster đúng chuẩn
- Tạo **breadcrumb** ở mọi bài

## 5.3 — SEO Off-page / Backlinks (Tuần 20-22)

**Chiến thuật build backlink trắng:**
1. **Guest post** — viết bài cho 5-10 site F&B (CafeF, Brands Vietnam, AdMicro...)
2. **Forum signature** — tham gia diễn đàn chủ quán có link về site
3. **Group Facebook** — chia sẻ bài khi có người hỏi liên quan (KHÔNG spam)
4. **Local citation** — đăng ký Foody, Now, Tripadvisor (nếu có showroom)
5. **PR báo chí** — gửi case study cho báo địa phương (Bình Dương Online, Báo Pháp Luật)

## 5.4 — Email Marketing (Tuần 22-23)

**Setup MailerLite / SendinBlue (free tier <1000 leads):**
- **Newsletter hàng tháng** — tổng hợp 3 bài hot + 1 promo
- **Welcome series** 5 email cho lead mới (ngày 0, 3, 7, 14, 30)
- **Re-engagement** cho lead cũ (>90 ngày không tương tác)

## 5.5 — Social Distribution (Tuần 23-24)

**Fanpage Facebook NPP Lan Thành:**
- Đăng lại blog 3 lần/tuần (text snippet + ảnh + link)
- Live mỗi tháng 1 lần (tour kho, giới thiệu sản phẩm mới)
- Reply mọi comment trong 1 giờ

**Zalo OA:**
- Auto welcome message cho người add
- Broadcast khuyến mãi tháng 1 lần
- 1-1 chat support khi có inbox

**Tham gia 20 group F&B:**
- Đóng góp giá trị 80%, promote 20%
- Mỗi group share 1 bài/tuần (max)

## Deliverable Giai đoạn 5
- Page Speed >90, Schema đủ, sitemap submitted
- 20-30 backlink chất lượng
- Email list hoạt động, 3 chuỗi tự động chạy
- Fanpage 500+ follower, Zalo OA 200+ follower

---

# Tổng kết Timeline

| Giai đoạn | Thời gian | Output chính |
|-----------|-----------|--------------|
| 1. Hạ tầng | Tuần 1-2 | Blog system + SEO infra |
| 2. Content | Tuần 3-12 | 5 pillar + 25 cluster |
| 3. Lead Magnet | Tuần 13-14 | 5 magnet + form thu lead |
| 4. Case Study | Tuần 15-16 | 5 case study + social proof |
| 5. SEO & Phân phối | Tuần 17-24 | Backlink, email, social |

**Tổng:** 24 tuần (~6 tháng)

---

# KPI sau 6 tháng

| Chỉ số | Mục tiêu |
|--------|----------|
| Bài viết đã xuất bản | 30 bài (5 pillar + 25 cluster) |
| Traffic organic/tháng | 5.000-10.000 visitor |
| Lead/tháng | 50-150 |
| Tỷ lệ Lead → Đơn | 10-15% |
| Đơn từ kênh online/tháng | 5-20 đại lý mới |
| Backlink chất lượng | 30+ |
| Email list | 500-1.500 |

---

# Trạng thái thực hiện

- [ ] Giai đoạn 1 — Hạ tầng nội dung
- [ ] Giai đoạn 2 — Sản xuất Pillar-Cluster
- [ ] Giai đoạn 3 — Lead Magnet
- [ ] Giai đoạn 4 — Case Study
- [ ] Giai đoạn 5 — SEO & Phân phối

> **Cập nhật trạng thái:** Đánh dấu `[x]` khi hoàn thành từng giai đoạn.
