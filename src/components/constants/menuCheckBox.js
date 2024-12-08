import { LIST_OF_SUBJECTS } from "../../constants/MainConstants"

export const menuCheckBox = [
	{
		title: "Chọn môn học",
		key: "subjects",
		link: false,
		submenu: [...LIST_OF_SUBJECTS],
	},
	{
		title: "Chọn khu vực",
		link: false,
		key: "areas",
		submenu: [
			"Hà Đông",
			"Cầu Giấy",
			"Tây Hồ",
			"Hoàng Mai",
			"Đống Đa",
			"Hai Bà Trưng",
			"Thanh Xuân",
			"Ba Đình",
			"Long Biên",
			"Nam Từ Liêm",
			"Bắc Từ Liêm",
			"Gia Lâm",
			"Mê Linh",
			"Chương Mỹ",
			"Ứng Hòa",
			"Sơn Tây",
			"Phú Xuyên",
			"Thanh Oai",
			"Thường Tín"
		],
	},

];
