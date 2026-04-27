---
description: Legal compliance and social responsibility requirements. These are non-negotiable – must appear on every page build.
alwaysApply: true
---

# Pháp lý & Trách nhiệm xã hội – BẮT BUỘC

Đây là yêu cầu **pháp lý bắt buộc** theo Luật Phòng chống tác hại rượu bia 2019 và các nghị định liên quan.

## Cảnh báo nhà nước (phải hiển thị rõ ràng)

Ba cảnh báo sau **phải xuất hiện** tại section "Trách nhiệm" và footer:

1. **"Người dưới 18 tuổi không được uống rượu, bia."**
2. **"Đã uống rượu, bia – Không lái xe."**
3. **"Phụ nữ mang thai không nên uống rượu, bia."**

Hiển thị với: icon phù hợp + text rõ ràng, màu accent đỏ `#E07070` hoặc `#b91c1c`, border-left đỏ.

## Age Gate (xác nhận độ tuổi)

Mọi trang đều phải có popup xác nhận tuổi:
- Hiển thị khi user lần đầu truy cập (kiểm tra `sessionStorage`)
- Nút "Tôi đủ 18 tuổi" → vào trang
- Nút "Chưa đủ tuổi" → redirect ra khỏi trang (vd: google.com)
- **Không được bỏ** age gate dù client yêu cầu

## Footer pháp lý (mọi trang)

Footer **luôn phải có**:
```html
<span>⚠️ Người dưới 18 tuổi không được uống rượu bia</span>
<span>🚗 Đã uống rượu bia – Không lái xe</span>
<span>🤰 Phụ nữ mang thai không nên uống rượu bia</span>
```
Kèm: thông tin GPKD của NPP Lan Thành.

## Giải pháp "An toàn về nhà"

Section này giúp người dùng về nhà an toàn sau khi uống:

| Dịch vụ | Link |
|---------|------|
| Grab | `https://grab.com` |
| Xanh SM | `https://xanh.sm` |
| Be | `https://be.com.vn` |
| Taxi nội địa | `tel:1080` |
| Tài xế lái xe hộ | `tel:19001234` |

## Bảng phạt nồng độ cồn (NĐ 168/2024/NĐ-CP)

| Mức | Nồng độ | Ô tô | Xe máy | Hình phạt bổ sung |
|-----|---------|------|--------|-------------------|
| 1 | 0 < BAC ≤ 0.25 mg/L | 6–8 triệu | 2–3 triệu | Tước GPLX 10–12 tháng |
| 2 | 0.25 < BAC ≤ 0.4 mg/L | 16–18 triệu | 4–5 triệu | Tước GPLX 16–18 tháng |
| 3 | BAC > 0.4 mg/L | 30–40 triệu | 6–8 triệu | Tước GPLX 22–24 tháng |

Bảng này phải hiển thị dạng `<table>` có thể cuộn ngang trên mobile (`overflow-x: auto`).

## Quảng cáo có trách nhiệm

- **KHÔNG** quảng bá bia như là giải pháp cho căng thẳng / áp lực
- **KHÔNG** nhắm vào đối tượng dưới 18 tuổi
- Mọi hình ảnh người uống bia: người trưởng thành, bối cảnh xã hội tích cực
