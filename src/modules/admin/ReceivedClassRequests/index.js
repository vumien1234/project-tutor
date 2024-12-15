import { useDispatch, useSelector } from "react-redux";
import { fetchReceivedClassRequests } from "../api";
import { useEffect, useState } from "react";
import { Table, Button, Input, Modal, Row, Col, Select } from "antd";  // Sử dụng các component của Ant Design
import { GENDER } from "../../../constants/AuthConstant";
import { CLASS_STATUS_TEXT } from "../../../constants/MainConstants";

const ReceivedClassRequests = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu đơn nhận lớp từ Redux Store
  const receivedClassRequests = useSelector((state) => state.admin.receivedClassRequests);
  const isGetReceivedClassRequests = useSelector((state) => state.admin.isGetReceivedClassRequests);

  // Trạng thái để lưu tên tìm kiếm và modal
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");  // Trạng thái lọc theo status
  const [selectedClass, setSelectedClass] = useState(null); // Lưu thông tin lớp học đã chọn
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái modal

  // Gọi API để lấy danh sách đơn nhận lớp khi chưa có dữ liệu
  useEffect(() => {
    if (!isGetReceivedClassRequests) {
      dispatch(fetchReceivedClassRequests());
    }
  }, [dispatch, isGetReceivedClassRequests]);

  // Hàm lọc trạng thái lớp học
  const filteredClasses = receivedClassRequests.filter((classItem) => {
    const matchesStatus = selectedStatus ? classItem.status === selectedStatus : true;
    const matchesSearchText = classItem.request.subject.toLowerCase().includes(searchText.toLowerCase());
    return matchesStatus && matchesSearchText;
  });

  // Cấu hình các cột trong bảng
  const columns = [
    {
      title: "Môn học",
      dataIndex: ["request", "subject"],
      key: "subject",
    },
    {
      title: "Địa chỉ",
      dataIndex: ["request", "address"],
      key: "address",
    },
    {
      title: "Thời gian bắt đầu",
      dataIndex: "created_at",
      key: "created_at",
      render: (value) => new Date(value).toLocaleString(),  // Hiển thị thời gian bắt đầu (có thể định dạng lại cho đẹp)
    },
    {
      title: "Thời gian kết thúc",
      dataIndex: ["request", "due_date"],
      key: "due_date",
      render: (value) => new Date(value).toLocaleString(),  // Định dạng lại ngày
    },
    {
      title: "Giới tính",
      dataIndex: ["request", "gender"],
      key: "gender",
      render: (value) => GENDER[value],  // Hiển thị giá trị theo định dạng giới tính 
    },
    {
      title: "Cấp độ",
      dataIndex: ["request", "level"],
      key: "level",
      render: (value) => `Lớp ${value === 13 ? "Đại học" : value}`,  // Hiển thị giá trị theo định dạng "Lớp Đại học" nếu level = 13
    },
    {
      title: "Giá",
      dataIndex: ["request", "total_price"],
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
  if (!isGetReceivedClassRequests) {
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
        <h3>Danh sách đơn nhận lớp</h3>

        <Input
          placeholder="Tìm kiếm theo môn học"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 300, marginBottom: 20 }}
        />

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
              <Col span={16}>{selectedClass.request.subject}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Địa chỉ:</strong>
              </Col>
              <Col span={16}>{selectedClass.request.address}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Thời gian bắt đầu:</strong>
              </Col>
              <Col span={16}>{new Date(selectedClass.created_at).toLocaleString()}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Thời gian kết thúc:</strong>
              </Col>
              <Col span={16}>{new Date(selectedClass.request.due_date).toLocaleString()}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Giới tính:</strong>
              </Col>
              <Col span={16}>{GENDER[selectedClass.request.gender]}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Cấp độ:</strong>
              </Col>
              <Col span={16}>Lớp {selectedClass.request.level === 13 ? "Đại học" : selectedClass.request.level}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Giá trị lớp:</strong>
              </Col>
              <Col span={16}>{`${selectedClass.request.total_price.toLocaleString()} VND`}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Trạng thái:</strong>
              </Col>
              <Col span={16}>{CLASS_STATUS_TEXT[selectedClass.status]}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Mô tả:</strong>
              </Col>
              <Col span={16}>{selectedClass.description}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Kế hoạch:</strong>
              </Col>
              <Col span={16}>{selectedClass.plan}</Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ReceivedClassRequests;
