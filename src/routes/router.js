import ClassDetail from "../modules/ClassList/ClassDetail";
import ClassList from "../modules/ClassList/ClassList";
import Contact from "../modules/contact/Contact";
import Home from "../modules/Home/Home";
import Login from "../modules/auth/Login/Login";
import Signup from "../modules/auth/Login/Register";
import Introduce from "../modules/introduce/Introduce";
import TutorList from "../modules/tutorList/TutorList";
import TeacherDetail from "../modules/tutorList/TeacherDetail";
import Profile from "../modules/profile/Profile";
import UserInfor from "../modules/profile/UserInfor";
import Password from "../modules/profile/Password";
import Overview from "../modules/overview/Overview";
import ReceiveClass from "../modules/receiveClass/ReceiveClass";
import Calendar from "../modules/calendar/Calendar";
import Course from "../modules//course/Course";
import RegisterClass from "../modules/registerClass/RegisterClass";
import Confirm from "../modules/confirm/Confirm";
import Note from "../modules/note/Note";

const injectProps = (props, Component) => {
    return <Component {...props} />;
};

export const routes = {
    home: {
        exact: false,
        path: "/",
        component: (props) => injectProps(props, Home),
        title: "Trang chủ",
    },
    introduce: {
        exact: false,
        path: "/gioi-thieu",
        component: (props) => injectProps(props, Introduce),
        title: "Giới thiệu",
    },
    classList: {
        exact: false,
        path: "/danh-sach-lop/*",
        component: (props) => injectProps(props, ClassList),
        title: "Danh sách lớp",
        children: [
            {
                path: "/danh-sach-lop/:id",
                component: (props) => injectProps(props, ClassDetail),
                title: "ClassDetail",
            },
        ],
    },
    registerClass: {
        exact: false,
        path: "/dang-ki-lop/:id",
        component: (props) => injectProps(props, RegisterClass),
        title: "Đăng kí lớp",
    },
    contact: {
        exact: false,
        path: "/lien-he",
        component: (props) => injectProps(props, Contact),
        title: "Liên hệ",
    },
    confirm: {
        exact: false,
        path: "/xac-nhan",
        component: (props) => injectProps(props, Confirm),
        title: "Xác nhận",
    },
    overview: {
        exact: false,
        path: "/tong-quan",
        component: (props) => injectProps(props, Overview),
        title: "Tổng quan",
    },
    receiveClass: {
        exact: false,
        path: "/cach-thuc-nhan-lop",
        component: (props) => injectProps(props, ReceiveClass),
        title: "Cách thức nhận lớp",
    },
    note: {
        exact: false,
        path: "/tao-note-nhan-lop",
        component: (props) => injectProps(props, Note),
        title: "Tạo note nhận lớp",
    },
    profile: {
        exact: false,
        path: "/ho-so",
        component: (props) => injectProps(props, Profile),
        title: "Hồ sơ",
        children: [
            {
                path: "/ho-so/thong-tin-nguoi-dung",
                component: (props) => injectProps(props, UserInfor),
                title: "Thông tin người dùng",
            },
            {
                path: "/ho-so/lich-hoc",
                component: (props) => injectProps(props, Calendar),
                title: "Lịch học",
            },
            {
                path: "/ho-so/khoa-hoc-dang-ki",
                component: (props) => injectProps(props, Course),
                title: "Khóa học đăng kí",
            },
            {
                path: "/ho-so/mat-khau",
                component: (props) => injectProps(props, Password),
                title: "Mật khẩu",
            },
        ],
    },
    tutorList: {
        exact: false,
        path: "/doi-ngu-gia-su",
        component: (props) => injectProps(props, TutorList),
        title: "Đội ngũ gia sư",
        children: [
            {
                path: "/doi-ngu-gia-su/:id",
                component: (props) => injectProps(props, TeacherDetail),
                title: "Đội ngũ gia sư",
            },
        ],
    },
    login: {
        exact: false,
        path: "/login",
        component: (props) => injectProps(props, Login),
        title: "Đăng nhập",
    },
    signup: {
        exact: false,
        path: "/signup",
        component: (props) => injectProps(props, Signup),
        title: "Đăng kí",
    },
};
