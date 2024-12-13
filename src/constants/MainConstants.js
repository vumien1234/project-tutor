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
  "waiting": "Đợi phản hồi",
  "studying": "Đang học",
  "finished": "Đã kết thúc",
  "canceled": "Đã hủy"
}

export const CLASS_STATUS_COLOR = {
  "pending": "bg-yellow-100 text-yellow-700",
  "waiting": "bg-yellow-100 text-yellow-700",
  "studying": "bg-green-100 text-green-700",
  "finished": "bg-blue-100 text-blue-700",
  "canceled": "bg-red-100 text-red-700"
}

export const CLASS_STATUS_TAG = {
  "pending": "warning",
  "accepted": "processing",
  "waiting_payment": "processing",
  "rejected": "error",
  "done": "success"
}

export const CLASS_STATUS_TEXT = {
  "pending": "Đang chờ",
  "accepted": "Đợi bạn xác nhận",
  "waiting_payment": "Chờ thanh toán",
  "rejected": "Đã từ chối",
  "done": "Đã hoàn thành"
}

export const PATH_FILE_URL = process.env.REACT_APP_PATH_FILE

export const DATE_OF_WEEK = [
  "T2",
  "T3",
  "T4",
  "T5",
  "T6",
  "T7",
  "CN"
]

export const SHIFT_OF_DAY = [
  "S",
  "C",
  "T"
]

export const DATE_OF_WEEK_TEXT = {
  "T2": "Thứ 2",
  "T3": "Thứ 3",
  "T4": "Thứ 4",
  "T5": "Thứ 5",
  "T6": "Thứ 6",
  "T7": "Thứ 7",
  "CN": "Chủ nhật"
}

export const SHIFT_OF_DAY_TEXT = {
  "S": "Sáng",
  "C": "Chiều",
  "T": "Tối"
}