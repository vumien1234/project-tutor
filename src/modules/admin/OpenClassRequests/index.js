import { useDispatch, useSelector } from "react-redux";
import { fetchOpenClassRequests } from "../api";
import { useEffect, useState } from "react";
import { Table, Button, Input, Modal, Row, Col, Select } from "antd";  // Sử dụng các component của Ant Design
import { SearchOutlined } from "@ant-design/icons";
import { GENDER } from "../../../constants/AuthConstant";
import { CLASS_STATUS_TEXT } from "../../../constants/MainConstants";

const OpenClassRequests = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu đơn mở lớp từ Redux Store
  const openClassRequests = useSelector((state) => state.admin.openClassRequests);
  const isGetOpenClassRequests = useSelector((state) => state.admin.isGetOpenClassRequests);

  // Trạng thái để lưu tên tìm kiếm và modal
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");  // Trạng thái lọc theo status
  const [selectedClass, setSelectedClass] = useState(null); // Lưu thông tin lớp học đã chọn
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái modal

  // Gọi API để lấy danh sách đơn mở lớp khi chưa có dữ liệu
  useEffect(() => {
    if (!isGetOpenClassRequests) {
      dispatch(fetchOpenClassRequests());
    }
  }, [dispatch, isGetOpenClassRequests]);

  // Hàm lọc trạng thái lớp học
  const filteredClasses = openClassRequests.filter((classItem) => {
    const matchesStatus = selectedStatus ? classItem.status === selectedStatus : true;
    const matchesSearchText = classItem.subject.toLowerCase().includes(searchText.toLowerCase());
    return matchesStatus && matchesSearchText;
  });

  // Cấu hình các cột trong bảng
  const columns = [
    {
      title: "Môn học",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Thời gian bắt đầu",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Thời gian kết thúc",
      dataIndex: "due_date",
      key: "due_date",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (value) => GENDER[value],  // Hiển thị giá trị theo định dạng giới tính 
    },
    {
      title: "Cấp độ",
      dataIndex: "level",
      key: "level",
      render: (value) => `Lớp ${value === 13 ? "Đại học" : value}`,  // Hiển thị giá trị theo định dạng "Lớp Đại học" nếu level = 13
    },
    {
      title: "Giá",
      dataIndex: "total_price",
      key: "total_price",
      render: (value) => `${value.toLocaleString()} VND`,  // Hiển thị giá trị theo định dạng VND
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value) => CLASS_STATUS_TEXT[value],  // Hiển thị giá trị theo định dạng trạng thái
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
  if (!isGetOpenClassRequests) {
    return <div>Đang tải...</div>;
  }

  // Hàm xử lý thay đổi input tìm kiếm
  const onSearch = (value) => {
    setSearchText(value);
  };

  // Hàm xử lý thay đổi trạng thái tìm kiếm
  const onStatusChange = (value) => {
    setSelectedStatus(value);
  };

  // Hàm mở modal chi tiết
  const showDetail = (classItem) => {
    setSelectedClass(classItem);
    setIsModalVisible(true);
  };

  // Hàm đóng modal chi tiết
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row justify="space-between" align="center">
        <h3>Danh sách đơn mở lớp</h3>

        <Select
          placeholder="Chọn trạng thái"
          value={selectedStatus}
          onChange={onStatusChange}
          style={{ width: 200, marginBottom: 20 }}
        >
          <Select.Option value="">Tất cả</Select.Option>
          <Select.Option value="pending">Đang chờ</Select.Option>
          <Select.Option value="waiting_payment">Chờ thanh toán</Select.Option>
          <Select.Option value="done">Hoàn thành</Select.Option>
        </Select>
      </Row>

      <Table
        columns={columns}
        dataSource={filteredClasses}
        rowKey="id"
        pagination={true}
      />

      {/* Modal chi tiết lớp học */}
      <Modal
        title="Chi tiết lớp học"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        {selectedClass && (
          <div>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Môn học:</strong>
              </Col>
              <Col span={16}>{selectedClass.subject}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Địa chỉ:</strong>
              </Col>
              <Col span={16}>{selectedClass.address}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Thời gian bắt đầu:</strong>
              </Col>
              <Col span={16}>{selectedClass.time}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Thời gian kết thúc:</strong>
              </Col>
              <Col span={16}>{selectedClass.due_date}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Giới tính:</strong>
              </Col>
              <Col span={16}>{GENDER[selectedClass.gender]}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Cấp độ:</strong>
              </Col>
              <Col span={16}>Lớp {selectedClass.level === 13 ? "Đại học" : selectedClass.level}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Giá trị lớp:</strong>
              </Col>
              <Col span={16}>{`${selectedClass.total_price.toLocaleString()} VND`}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Trạng thái:</strong>
              </Col>
              <Col span={16}>{CLASS_STATUS_TEXT[selectedClass.status]}</Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OpenClassRequests;
