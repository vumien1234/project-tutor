import { useDispatch, useSelector } from "react-redux";
import { fetchBankData } from "../api";
import { useEffect, useState } from "react";
import { Table, Button, Input, Modal, Row, Col } from "antd";  // Sử dụng các component của Ant Design
import { SearchOutlined } from "@ant-design/icons";
import { CLASS_STATUS_TEXT } from "../../../constants/MainConstants"; // Đảm bảo bạn có cấu hình này cho các trạng thái.

const BankData = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux Store
  const bankData = useSelector((state) => state.admin.bankData);
  const isGetBankData = useSelector((state) => state.admin.isGetBankData);

  // Trạng thái tìm kiếm và modal
  const [searchText, setSearchText] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState(null); // Lưu thông tin giao dịch đã chọn
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái modal

  // Gọi API để lấy dữ liệu ngân hàng khi chưa có
  useEffect(() => {
    if (!isGetBankData) {
      dispatch(fetchBankData());
    }
  }, [dispatch, isGetBankData]);

  // Cấu hình các cột trong bảng
  const columns = [
    {
      title: "Mã giao dịch",
      dataIndex: "tid",
      key: "tid",
    },
    {
      title: "Ngày giờ",
      dataIndex: "when",
      key: "when",
      render: (value) => new Date(value).toLocaleString(), // Định dạng ngày giờ
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      filteredValue: [searchText],
      onFilter: (value, record) => record.description.toLowerCase().includes(value.toLowerCase()), // Tìm kiếm theo mô tả
    },
    {
      title: "Số tiền (VND)",
      dataIndex: "amount",
      key: "amount",
      render: (value) => value.toLocaleString(), // Hiển thị số tiền với định dạng
    },
    {
      title: "Tài khoản ngân hàng",
      dataIndex: "bankName",
      key: "bankName",
    },
    {
      title: "Tài khoản phụ",
      dataIndex: "bank_sub_acc_id",
      key: "bank_sub_acc_id",
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
  if (!isGetBankData) {
    return <div>Đang tải...</div>;
  }

  // Hàm xử lý thay đổi input tìm kiếm
  const onSearch = (value) => {
    setSearchText(value);
  };

  // Hàm mở modal chi tiết
  const showDetail = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalVisible(true);
  };

  // Hàm đóng modal chi tiết
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row justify="space-between" align="middle">
        <h3>Danh sách giao dịch ngân hàng</h3>
        <Input
          placeholder="Tìm kiếm theo mô tả"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          prefix={<SearchOutlined />}
          style={{ width: 300, marginBottom: 20 }}
        />
      </Row>

      <Table
        columns={columns}
        dataSource={bankData}
        rowKey="id"
        pagination={true}
        filteredValue={[searchText]}
      />

      {/* Modal chi tiết giao dịch */}
      <Modal
        title="Chi tiết giao dịch"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        {selectedTransaction && (
          <div>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Mã giao dịch:</strong>
              </Col>
              <Col span={16}>{selectedTransaction.tid}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Ngày giờ:</strong>
              </Col>
              <Col span={16}>{new Date(selectedTransaction.when).toLocaleString()}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Mô tả:</strong>
              </Col>
              <Col span={16}>{selectedTransaction.description}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Số tiền:</strong>
              </Col>
              <Col span={16}>{selectedTransaction.amount.toLocaleString()} VND</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Tài khoản ngân hàng:</strong>
              </Col>
              <Col span={16}>{selectedTransaction.bankName}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Tài khoản phụ:</strong>
              </Col>
              <Col span={16}>{selectedTransaction.bank_sub_acc_id}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Ngày tạo:</strong>
              </Col>
              <Col span={16}>{new Date(selectedTransaction.created_at).toLocaleString()}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <strong>Số dư:</strong>
              </Col>
              <Col span={16}>{selectedTransaction.cusum_balance.toLocaleString()} VND</Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BankData;
