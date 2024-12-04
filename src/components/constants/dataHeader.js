export const navLinksDefault = [
    { path: "/", label: "Trang chủ" },
    { path: "/tong-quan", label: "Tổng quan" },
    { path: "/danh-sach-lop", label: "Danh sách lớp" },
    { path: "/doi-ngu-gia-su", label: "Đội ngũ giảng viên" },
    {
        path: "/gioi-thieu", label: "Giới thiệu", children: [
            { path: "/cach-thuc-nhan-lop", label: "Cách thức nhận lớp" },
            { path: "/chinh-sach-hoan-phi", label: "Chính sách hoàn phí" },
            { path: "/hop-dong", label: "Hợp đồng" }
        ]
    },
    { path: "/lien-he", label: "Liên hệ" },
];
