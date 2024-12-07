import ClassDetail from "../modules/ClassList/ClassDetail";
import ClassList from "../modules/ClassList/ClassList";
import Contact from "../modules/contact/Contact";
import Home from "../modules/Home/Home";
import Login from "../modules/auth/Login/Login";
import Signup from "../modules/auth/Login/Register";
import Introduce from "../modules/introduce/Introduce";
import TeacherDetail from "../modules/tutorList/TeacherDetail";
import Profile from "../modules/profile/Profile";
import UserInfor from "../modules/profile/UserInfor";
import Password from "../modules/profile/Password";
import Overview from "../modules/overview/Overview";
import ReceiveClass from "../modules/receiveClass/ReceiveClass";
import Calendar from "../modules/profile/Calendar";
import Course from "../modules/profile/Course";
import RegisterClass from "../modules/registerClass/RegisterClass";
import Confirm from "../modules/confirm/Confirm";
import Note from "../modules/note/Note";
import ArticleDetail from "../modules/Home/ArticleDetail";
import { AUTH_VALIDATE } from "../constants/AuthConstant";
import TutorList from "../modules/tutorList/TutorList";
import RefundPolicy from "../modules/refundPolicy/RefundPolicy";
import ContractPage from "../modules/contractPage/ContractPage";
import CreateClass from "../modules/ClassRoom/createClass/CreateClass";

const injectProps = (props, Component) => {
  return <Component {...props} />;
};

export const routes = {
  home: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/",
    component: (props) => injectProps(props, Home),
    title: "Trang chủ"
  },
  article: {
    exact: false,
    path: "/bai-viet/:slug",
    component: (props) => injectProps(props, ArticleDetail),
    title: "Bài viết"
  },
  introduce: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/gioi-thieu",
    component: (props) => injectProps(props, Introduce),
    title: "Giới thiệu"
  },
  classList: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/danh-sach-lop/*",
    component: (props) => injectProps(props, ClassList),
    title: "Danh sách lớp",
    children: [
      {
        auth: AUTH_VALIDATE.ALL,
        path: "/chi-tiet-lop/:classId",
        component: (props) => injectProps(props, ClassDetail),
        title: "Chi tiết lớp"
      }
    ]
  },

  registerClass: {
    exact: false,
    auth: AUTH_VALIDATE.TUTOR,
    path: "/dang-ki-lop/:id",
    component: (props) => injectProps(props, RegisterClass),
    title: "Đăng kí lớp"
  },
  contact: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/lien-he",
    component: (props) => injectProps(props, Contact),
    title: "Liên hệ"
  },
  confirm: {
    exact: false,
    auth: AUTH_VALIDATE.TUTOR,
    path: "/xac-nhan",
    component: (props) => injectProps(props, Confirm),
    title: "Xác nhận"
  },
  overview: {
    exact: false,
    auth: AUTH_VALIDATE.TUTOR,
    path: "/tong-quan",
    component: (props) => injectProps(props, Overview),
    title: "Tổng quan"
  },
  receiveClass: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/cach-thuc-nhan-lop",
    component: (props) => injectProps(props, ReceiveClass),
    title: "Cách thức nhận lớp"
  },
  refundPolicy: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/chinh-sach-hoan-phi",
    component: (props) => injectProps(props, RefundPolicy),
    title: "Chính sách hoàn phí"
  },
  contractPage: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/hop-dong",
    component: (props) => injectProps(props, ContractPage),
    title: "Hợp đồng"
  },
  createClass: {
    exact: false,
    auth: AUTH_VALIDATE.CUSTOMER,
    path: "/tao-lop",
    component: (props) => injectProps(props, CreateClass),
    title: "Tạo lớp học"
  },
  myClass: {
    exact: false,
    auth: AUTH_VALIDATE.CUSTOMER,
    path: "/lop-hoc-cua-toi",
    component: (props) => injectProps(props, ClassList),
    title: "Lớp học của tôi",
  },
  note: {
    exact: false,
    auth: AUTH_VALIDATE.CUSTOMER,
    path: "/tao-note-nhan-lop",
    component: (props) => injectProps(props, Note),
    title: "Tạo note nhận lớp"
  },
  profile: {
    exact: false,
    auth: AUTH_VALIDATE.AUTH,
    path: "/ho-so",
    component: (props) => injectProps(props, Profile),
    title: "Hồ sơ",
    children: [
      {
        auth: AUTH_VALIDATE.AUTH,
        path: "/ho-so/thong-tin-nguoi-dung",
        component: (props) => injectProps(props, UserInfor),
        title: "Thông tin người dùng"
      },
      {
        auth: AUTH_VALIDATE.AUTH,
        path: "/ho-so/lich-hoc",
        component: (props) => injectProps(props, Calendar),
        title: "Lịch học"
      },
      {
        auth: AUTH_VALIDATE.AUTH,
        path: "/ho-so/khoa-hoc-dang-ki",
        component: (props) => injectProps(props, Course),
        title: "Khóa học đăng kí"
      },
      {
        auth: AUTH_VALIDATE.AUTH,
        path: "/ho-so/mat-khau",
        component: (props) => injectProps(props, Password),
        title: "Mật khẩu"
      }
    ]
  },
  tutorList: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/doi-ngu-gia-su",
    component: (props) => injectProps(props, TutorList),
    title: "Đội ngũ gia sư",
    children: [
      {
        auth: AUTH_VALIDATE.ALL,
        path: "/doi-ngu-gia-su/:userName",
        component: (props) => injectProps(props, TeacherDetail),
        title: "Đội ngũ gia sư"
      }
    ]
  },
  login: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/login",
    component: (props) => injectProps(props, Login),
    title: "Đăng nhập"
  },
  signup: {
    exact: false,
    auth: AUTH_VALIDATE.ALL,
    path: "/signup",
    component: (props) => injectProps(props, Signup),
    title: "Đăng kí"
  }
};
