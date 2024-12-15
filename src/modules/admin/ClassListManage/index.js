import { useDispatch, useSelector } from "react-redux";
import { fetchClassList } from "../api";
import { useEffect, useState } from "react";
import { Table, Button, Input, Modal, Row, Col } from "antd";  // Sử dụng các component của Ant Design
import { SearchOutlined } from "@ant-design/icons";
import LichHocChiTiet from "../../profile/LichHocChiTiet";

const ClassListManage = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu danh sách lớp từ Redux Store
  const classList = useSelector((state) => state.admin.classList);
  const isGetClassList = useSelector((state) => state.admin.isGetClassList);

  // Trạng thái để lưu tên tìm kiếm và modal
  const [searchText, setSearchText] = useState("");
  const [selectedClass, setSelectedClass] = useState(null); // Lưu thông tin lớp học đã chọn
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái modal

  // Gọi API để lấy danh sách lớp học khi chưa có dữ liệu
  useEffect(() => {
    if (!isGetClassList) {
      dispatch(fetchClassList());
    }
  }, [dispatch, isGetClassList]);

  // Cấu hình các cột trong bảng
  const columns = [
    {
      title: "Môn học",
      dataIndex: ["dataClass", "subject"],
      key: "subject",
    },
    {
      title: "Giảng viên",
      dataIndex: "username_tutor",
      key: "username_tutor",
    },
    {
      title: "Địa chỉ",
      dataIndex: ["dataClass", "address"],
      key: "address",
    },
    {
      title: "Thời gian bắt đầu",
      dataIndex: ["dataClass", "time"],
      key: "time",
    },
    {
      title: "Thời gian kết thúc",
      dataIndex: ["dataClass", "end_time"],
      key: "end_time",
    },
    {
      title: "Cấp độ",
      dataIndex: ["dataClass", "level"],
      key: "level",
      render: (level) => `Lớp ${level === 13 ? "đại học" : level}`,
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
  if (!isGetClassList) {
    return <div>Đang tải...</div>;
  }

  // Hàm xử lý thay đổi input tìm kiếm
  const onSearch = (value) => {
    setSearchText(value);
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
      <Row justify="space-between" align="middle">
        <h3>Danh sách lớp học</h3>
        <Input
          placeholder="Tìm kiếm theo môn học"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          prefix={<SearchOutlined />}
          style={{ width: 300, marginBottom: 20 }}
        />
      </Row>

      <Table
        columns={columns}
        dataSource={classList}
        rowKey="id"
        pagination={true}
        filteredValue={[searchText]}
      />

      {/* Modal chi tiết lớp học */}
      <Modal
        title="Chi tiết lớp học"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {selectedClass && (
          <LichHocChiTiet
            idLop={selectedClass.id}
            setIdLop={setSelectedClass}
          />
        )}
      </Modal>
    </div>
  );
};

export default ClassListManage;
