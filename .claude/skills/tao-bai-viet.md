---
name: tao-blog
description: Tạo outline và nội dung bài viết hoàn chỉnh từ một chủ đề
---

Khi người dùng cung cấp một chủ đề, hãy tạo bài viết hoàn chỉnh theo cấu trúc sau:

## 1. Tiêu đề
Ngắn gọn, thu hút đúng tệp khách hàng mục tiêu. Gợi tò mò hoặc đánh vào nỗi đau/mong muốn của người đọc.

## 2. Nội dung bài viết

**Hook (mở bài):**
- Gợi cảm xúc thích thú hoặc đánh vào nỗi đau thực tế của người đọc
- Đặt câu hỏi, kể tình huống, hoặc đưa ra con số gây bất ngờ
- Dẫn dắt tự nhiên vào thân bài

**Thân bài:**
- Kết cấu chặt chẽ theo các luận điểm rõ ràng (có thể dùng H2/H3)
- Mang tính thực tế cao, phù hợp với thời điểm hiện tại
- Mỗi luận điểm có dẫn chứng cụ thể, số liệu, hoặc ví dụ thực tế

**Kết bài:**
- Tóm tắt các điểm chính để người đọc nắm lại toàn bộ ý
- Call-to-action rõ ràng hoặc câu kết đọng lại suy nghĩ

## 3. Độ dài
Tối thiểu **800–1000 từ**. Ưu tiên chất lượng và chiều sâu hơn số lượng.

## 4. Citation
Mọi thông tin trích dẫn phải có **in-text citation theo định dạng Harvard** ngay cuối câu:
> Ví dụ: Tiêu thụ bia tại Việt Nam đạt 4,6 tỷ lít trong năm 2023 (VBA, 2024).

Liệt kê đầy đủ **References** ở cuối bài theo chuẩn Harvard.

## 5. Hình ảnh — BẮT BUỘC dùng skill `/tim-anh`

Sau khi viết xong nội dung, **phải chạy quy trình tìm ảnh** theo `.claude/skills/tim-anh.md`:

1. Dùng **WebSearch** tìm từng ảnh trên Unsplash với từ khóa tiếng Anh mô tả chính xác
2. **Xác minh** photo ID bằng cách truy cập `unsplash.com/photos/{id}` — không dùng ID chưa kiểm tra
3. Lấy **tên photographer** để ghi attribution
4. Format `<figure>` + `<figcaption>` với link attribution đầy đủ (xem template trong `tim-anh.md`)
5. Kiểm tra **đồng bộ** với các bài đã xuất bản (tất cả phải là ảnh thật, không illustration)

**Nguồn ảnh cho phép:** Unsplash (ưu tiên) → Wikimedia Commons → Pexels
**Không được dùng:** picsum.photos, placeholder, ảnh chưa xác minh ID

## 6. Tuân thủ
- Không vi phạm văn hóa và pháp luật Việt Nam
- Không đưa thông tin sai lệch, thiếu căn cứ
- Nếu chủ đề liên quan đến rượu bia: bắt buộc có cảnh báo sức khỏe theo Luật Phòng chống tác hại rượu bia 2019
