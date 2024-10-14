// currencyFormatter.js

export function formatCurrency(amount) {
  if (isNaN(amount) || amount < 0) {
    return "Số tiền không hợp lệ";
  }

  // Chuyển đổi số thành chuỗi và định dạng với dấu phẩy
  const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${formattedAmount} ₫/buổi`;
}
