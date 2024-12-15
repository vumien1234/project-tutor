import { Divider, Layout, Menu, theme } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  FileSearchOutlined,
  DesktopOutlined,
  BranchesOutlined,
  ContactsOutlined
} from "@ant-design/icons"; // Các icon mới được sử dụng
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import "./BaseLayout.css";
import Headerlayout from "./components/header/Header";
import { useState, useEffect } from "react";

const navbars = [
  {
    key: "/quan-ly",
    icon: React.createElement(DashboardOutlined),
    label: "Bảng điều khiển"
  },
  {
    key: "quan-ly-don",
    label: "Quản lý đơn",
    icon: React.createElement(FileSearchOutlined), // Thay icon cho mục quản lý đơn
    children: [
      {
        key: "/quan-ly-don/don-mo-lop",
        label: "Đơn mở lớp"
      },
      {
        key: "/quan-ly-don/don-nhan-lop",
        label: "Đơn nhận lớp"
      },
    ]
  },
  {
    key: "/quan-ly/lop-hoc",
    icon: React.createElement(DesktopOutlined), // Thay icon cho mục quản lý lớp học
    label: "Quản lý lớp học"
  },
  {
    key: "user",
    icon: <UserOutlined />,
    label: "Quản lý người dùng",
    children: [
      {
        key: "/quan-ly/user/tutor",
        label: "Gia sư"
      },
      {
        key: "/quan-ly/user/student",
        label: "Người dùng"
      },
    ]
  },
  {
    key: "quan-ly/contact",
    icon: React.createElement(ContactsOutlined), // Thay icon cho mục quản lý hỗ trợ
    label: "Quản lý hỗ trợ"
  },
  {
    key: "/quan-ly/bank-status",
    icon: React.createElement(BranchesOutlined), // Thay icon cho mục dữ liệu ngân hàng
    label: "Dữ liệu ngân hàng"
  }
];


const { Content, Footer, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const findKey = (navbars, path) => {
      for (let item of navbars) {
        if (item.key === path) {
          return item.key;
        }
        if (item.children) {
          const childKey = findKey(item.children, path);
          if (childKey) {
            return item.key; // Return the parent key
          }
        }
      }
      return null;
    };

    const currentItemKey = findKey(navbars, location.pathname);
    if (currentItemKey) {
      setSelectedKey(location.pathname);
      setOpenKeys((prevKeys) => [...new Set([...prevKeys, currentItemKey])]);
    }
  }, [location.pathname]);

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
    navigate(key);
  };

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <Layout
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="17.7rem"
        onBreakpoint={(broken) => { }}
        onCollapse={(collapsed, type) => { }}
        className="custom-sider"
        style={{
          background: colorBgContainer,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="demo-logo-vertical">
          <img
            className="image-logo"
            src="/tutormaster.jpg"
            alt="logo-phenikaa"
          />{" "}
        </div>
        {/* tạo đường kẻ bằng andt */}
        <Divider />

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          selectedKeys={[selectedKey]}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
          onClick={handleMenuClick}
          items={navbars}
          style={{
            width: "15.6rem",
            border: "none"
          }}
        />
      </Sider>

      <Layout>
        <Headerlayout />
        <Content
          style={{
            margin: "24px 16px 0",
            width: "99%",
            height: "100%",
            background: colorBgContainer,
            borderRadius: "0.5rem"
          }}
        >
          <div
            style={{
              padding: 24
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center"
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
