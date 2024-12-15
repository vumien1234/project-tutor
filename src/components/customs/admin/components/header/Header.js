import { Layout, Dropdown, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Box } from "@mui/material";
import { theme } from "antd";
import "./header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIMG } from "../../../../../utils/currencyFormatter";

const { Header } = Layout;

function Headerlayout() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const logout = async () => {
    localStorage.removeItem("token");
    // redirect to login page
    window.location.href = "/";
  };

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link href="/ho-so?tab=thong-tin-nguoi-dung">Trang cá nhân</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <div
          onClick={() => {
            logout();
          }}
        >
          Đăng xuất
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header
      style={{
        padding: 0,
        marginLeft: "1rem",
        background: colorBgContainer,
        borderRadius: "0.5rem",
        height: "6rem",
        width: "99%"
      }}
    >
      <Box className="header-content">
        <h2
          style={{
            color: "#F26526"
          }}
        >
          Hệ thống quản lý gia sư
        </h2>
        <div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <div className="user-info" onClick={(e) => e.preventDefault()}>
              <Avatar
                src={getIMG(currentUser.avatar)}
                icon={<UserOutlined />} />
              <span className="username">{currentUser.full_name}</span>
            </div>
          </Dropdown>
        </div>
      </Box>
    </Header>
  );
}

export default Headerlayout;
