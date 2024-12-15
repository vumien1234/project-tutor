import { useDispatch, useSelector } from "react-redux";
import { fetchSupportList, updateSupportStatus } from "../api";
import { useEffect, useState } from "react";
import { Table, Button, Input, Modal, Row, Col, Switch, Select } from "antd";  // Thêm Switch từ Ant Design
import { SearchOutlined } from "@ant-design/icons";

const ContactData = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux Store
  const supportList = useSelector((state) => state.admin.supportList);
  const isGetSupportList = useSelector((state) => state.admin.isGetSupportList);

  // Trạng thái tìm kiếm và modal
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);  // Trạng thái tìm kiếm

  // Gọi API để lấy dữ liệu khi chưa có
  useEffect(() => {
    if (!isGetSupportList) {
      dispatch(fetchSupportList());
    }
  }, [dispatch, isGetSupportList]);

  // Cấu hình các cột trong bảng
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mô tả",
      dataIndex: "message",
      key: "message",
      filteredValue: [searchText],
      onFilter: (value, record) => record.message.toLowerCase().includes(value.toLowerCase()), // Tìm kiếm theo mô tả
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (status ? "Đã duyệt" : "Chưa duyệt"), // Hiển thị trạng thái
      filteredValue: [searchStatus],
      onFilter: (value, record) => {
        const status = value === "true";
        return record.status === status;
      }, // Tìm kiếm theo trạng thái
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      render: (value) => new Date(value).toLocaleString(),
    },
    {
      title: "Cập nhật trạng thái",
      key: "update_status",
      render: (_, record) => (
        <Switch
          checked={record.status}
          onChange={() => updateStatus(record.id, !record.status)}
        />
      ),
    },
  ];

  // Hiển thị Loading nếu dữ liệu chưa được tải
  if (!isGetSupportList) {
    return <div>Đang tải...</div>;
  }

  // Hàm xử lý thay đổi input tìm kiếm
  const onSearch = (value) => {
    setSearchText(value);
  };

  // Hàm xử lý thay đổi trạng thái tìm kiếm
  const onSearchStatus = (value) => {
    setSearchStatus(value);
  };

  // Hàm cập nhật trạng thái
  const updateStatus = (id, status) => {
    dispatch(updateSupportStatus({ id, status }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row justify="space-between" align="middle">
        <h3>Danh sách hỗ trợ</h3>
        <Input
          placeholder="Tìm kiếm theo mô tả"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          prefix={<SearchOutlined />}
          style={{ width: 300, marginBottom: 20 }}
        />
        <Select
          style={{ width: 200, marginBottom: 20 }}
          placeholder="Tìm kiếm theo trạng thái"
          onChange={onSearchStatus}
          value={searchStatus}
        >
          <Select.Option value={true}>Đã duyệt</Select.Option>
          <Select.Option value={false}>Chưa duyệt</Select.Option>
        </Select>
      </Row>

      <Table
        columns={columns}
        dataSource={supportList}
        rowKey="id"
        pagination={true}
        filteredValue={[searchText]}
        filterMultiple
        onChange={(pagination, filters) => {
          setSearchStatus(filters.status ? filters.status[0] : null);
        }}
      />
    </div>
  );
};

export default ContactData;
