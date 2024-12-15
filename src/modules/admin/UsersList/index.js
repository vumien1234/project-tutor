import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../api";
import { useEffect, useState } from "react";
import { Table, Avatar, Button, Input, Modal, Row, Col } from "antd";  // Sử dụng các component của Ant Design
import { SearchOutlined } from "@ant-design/icons";
import { getIMG } from "../../../utils/currencyFormatter";

const UsersList = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu người dùng từ Redux Store
  const danhSachNguoiDung = useSelector((state) => state.admin.userList);
  const isGetUserList = useSelector((state) => state.admin.isGetUserList);

  // Trạng thái để lưu tên tìm kiếm và modal
  const [searchText, setSearchText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // Lưu thông tin người dùng đã chọn
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái modal

  // Gọi API để lấy danh sách người dùng khi chưa có dữ liệu
  useEffect(() => {
    if (!isGetUserList) {
      dispatch(fetchUserList());
    }
  }, [dispatch, isGetUserList]);

  // Cấu hình các cột trong bảng
  const columns = [
    {
      title: "Ảnh",
      dataIndex: "avatar",
      render: (avatar) => <Avatar src={getIMG(avatar)} />,
      width: 80,
    },
    {
      title: "Tài khoản",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Họ và tên",
      dataIndex: "full_name",
      key: "full_name",
      filteredValue: [searchText],
      onFilter: (value, record) => record?.full_name?.toLowerCase()?.includes(value?.toLowerCase()),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => showDetail(record)}>
          Chi tiết
        </Button>
      ),
    },
  ];

  // Hiển thị Loading nếu dữ liệu chưa được tải
  if (!isGetUserList) {
    return <div>Đang tải...</div>;
  }

  // Hàm xử lý thay đổi input tìm kiếm
  const onSearch = (value) => {
    setSearchText(value);
  };

  // Hàm mở modal chi tiết
  const showDetail = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  // Hàm đóng modal chi tiết
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row justify="space-between" align="middle">
        <h3>Danh sách người dùng</h3>
        <Input
          placeholder="Tìm kiếm theo tên"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          prefix={<SearchOutlined />}
          style={{ width: 300, marginBottom: 20 }}
        />
      </Row>

      <Table
        columns={columns}
        dataSource={danhSachNguoiDung}
        rowKey="id"
        pagination={true}
        filteredValue={[searchText]}
      />

      {/* Modal chi tiết người dùng */}
      <Modal
        title="Chi tiết người dùng"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        {selectedUser && (
          <div>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Tài khoản:</strong>
              </Col>
              <Col span={16}>{selectedUser.username}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Họ và tên:</strong>
              </Col>
              <Col span={16}>{selectedUser.full_name}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Email:</strong>
              </Col>
              <Col span={16}>{selectedUser.email}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Số điện thoại:</strong>
              </Col>
              <Col span={16}>{selectedUser.phone}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Địa chỉ:</strong>
              </Col>
              <Col span={16}>{selectedUser.address || "Chưa có thông tin"}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Giới tính:</strong>
              </Col>
              <Col span={16}>{selectedUser.gender || "Chưa có thông tin"}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Công việc:</strong>
              </Col>
              <Col span={16}>{selectedUser.job || "Chưa có thông tin"}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Giới thiệu:</strong>
              </Col>
              <Col span={16}>{selectedUser.introduction || "Chưa có thông tin"}</Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UsersList;
