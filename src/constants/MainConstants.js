export const LIST_OF_SUBJECTS = [
  "Toán",
  "Lý",
  "Hóa",
  "Văn",
  "Anh",
  "Sinh học",
  "Lịch sử",
  "Địa lý",
  "Tiếng Anh",
  "Tiếng Nhật",
  "Tiếng Trung (HSK)",
  "Tiếng Hàn",
  "Luyện thi đại học",
  "Luyện thi vào lớp 10",
  "Mỹ thuật",
  "Âm nhạc",
  "Lập trình cơ bản",
  "Khác"
];

export const CLASS_STATUS = {
  "pending": "Đang chờ",
  "studying": "Đang học",
  "finished": "Đã kết thúc",
  "canceled": "Đã hủy"
}

export const CLASS_STATUS_COLOR = {
  "pending": "bg-yellow-100 text-yellow-700",
  "studying": "bg-green-100 text-green-700",
  "finished": "bg-blue-100 text-blue-700",
  "canceled": "bg-red-100 text-red-700"
}

export const PATH_FILE_URL = process.env.REACT_APP_PATH_FILE