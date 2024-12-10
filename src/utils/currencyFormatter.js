// currencyFormatter.js

import { PATH_FILE_URL } from "../constants/MainConstants";

export function formatCurrency(amount) {
  if (isNaN(amount) || amount < 0) {
    return "Số tiền không hợp lệ";
  }

  // Chuyển đổi số thành chuỗi và định dạng với dấu phẩy
  const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${formattedAmount} ₫/buổi`;
}

export function getIMG(img) {
  return img ? `${PATH_FILE_URL}/${img}` : "https://via.placeholder.com/150";
}