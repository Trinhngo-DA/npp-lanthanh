// NPP Lan Thành – Order Form Handler
// Hướng dẫn deploy:
// 1. Tạo Google Sheet mới tại sheets.google.com
// 2. Vào Extensions → Apps Script → xóa code cũ, paste toàn bộ file này
// 3. Click Deploy → New deployment → Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copy URL sau khi deploy
// 5. Dán URL vào index.html dòng: const APPS_SCRIPT_URL = '...'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Tạo header nếu sheet trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Thời gian', 'Tên liên hệ', 'Số điện thoại', 'Loại hình KD',
        'Địa chỉ giao hàng',
        'Heineken (thùng)', 'Tiger (thùng)', 'Larue (thùng)',
        'Bia Việt (thùng)', 'Strongbow (thùng)',
        'Tổng (thùng)', 'Ghi chú'
      ]);
      sheet.getRange(1, 1, 1, 12).setFontWeight('bold').setBackground('#007A33').setFontColor('#ffffff');
    }

    const qty_heineken  = parseInt(data.qty_heineken)  || 0;
    const qty_tiger     = parseInt(data.qty_tiger)     || 0;
    const qty_larue     = parseInt(data.qty_larue)     || 0;
    const qty_biaviet   = parseInt(data.qty_biaviet)   || 0;
    const qty_strongbow = parseInt(data.qty_strongbow) || 0;
    const total = qty_heineken + qty_tiger + qty_larue + qty_biaviet + qty_strongbow;

    sheet.appendRow([
      new Date(),
      data.ho_ten       || '',
      data.dien_thoai   || '',
      data.loai_hinh    || '',
      data.dia_chi      || '',
      qty_heineken,
      qty_tiger,
      qty_larue,
      qty_biaviet,
      qty_strongbow,
      total,
      data.ghi_chu      || ''
    ]);

    // Format cột thời gian
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat('dd/MM/yyyy HH:mm');

    // Gửi email thông báo
    MailApp.sendEmail({
      to: 'trinhngo0357@gmail.com',
      subject: `🍺 Đơn hàng mới – ${data.ho_ten} (${data.dien_thoai})`,
      htmlBody: `
        <div style="font-family:sans-serif;max-width:480px">
          <h2 style="color:#007A33">🍺 Đơn hàng mới – NPP Lan Thành</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px;color:#666">Tên liên hệ</td><td style="padding:6px;font-weight:bold">${data.ho_ten}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding:6px;color:#666">Số điện thoại</td><td style="padding:6px;font-weight:bold">${data.dien_thoai}</td></tr>
            <tr><td style="padding:6px;color:#666">Loại hình KD</td><td style="padding:6px">${data.loai_hinh}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding:6px;color:#666">Địa chỉ</td><td style="padding:6px">${data.dia_chi || '–'}</td></tr>
          </table>
          <h3 style="color:#007A33;margin-top:16px">Sản phẩm đặt hàng</h3>
          <table style="width:100%;border-collapse:collapse">
            ${qty_heineken  > 0 ? `<tr><td style="padding:5px">🟢 Heineken Lager</td><td style="padding:5px;font-weight:bold;text-align:right">${qty_heineken} thùng</td></tr>` : ''}
            ${qty_tiger     > 0 ? `<tr style="background:#f5f5f5"><td style="padding:5px">🐯 Tiger Beer</td><td style="padding:5px;font-weight:bold;text-align:right">${qty_tiger} thùng</td></tr>` : ''}
            ${qty_larue     > 0 ? `<tr><td style="padding:5px">🌊 Larue Special</td><td style="padding:5px;font-weight:bold;text-align:right">${qty_larue} thùng</td></tr>` : ''}
            ${qty_biaviet   > 0 ? `<tr style="background:#f5f5f5"><td style="padding:5px">🇻🇳 Bia Việt</td><td style="padding:5px;font-weight:bold;text-align:right">${qty_biaviet} thùng</td></tr>` : ''}
            ${qty_strongbow > 0 ? `<tr><td style="padding:5px">🍎 Strongbow Cider</td><td style="padding:5px;font-weight:bold;text-align:right">${qty_strongbow} thùng</td></tr>` : ''}
            <tr style="border-top:2px solid #007A33"><td style="padding:8px;font-weight:bold">TỔNG</td><td style="padding:8px;font-weight:bold;text-align:right;color:#007A33">${total} thùng / tháng</td></tr>
          </table>
          ${data.ghi_chu ? `<p style="margin-top:12px;padding:10px;background:#f0faf4;border-radius:6px"><strong>Ghi chú:</strong> ${data.ghi_chu}</p>` : ''}
          <p style="margin-top:16px;color:#999;font-size:12px">Đơn hàng đã được lưu vào Google Sheets tự động.</p>
        </div>
      `
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
