import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLichHoc } from "./api";
import { Table, Tag, Card } from "antd";
import { convertDate } from "../../utils/main"; // Giả sử có hàm convertDate để hiển thị ngày tháng
import LichHocChiTiet from "./LichHocChiTiet";

const LichHoc = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [data, setData] = useState([]);

  const [idLop, setIdLop] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call API
        const response = await dispatch(fetchLichHoc({
          username_user: currentUser.role === "student" ? currentUser.username : "",
          username_tutor: currentUser.role === "tutor" ? currentUser.username : "",
        }));

        // Handle response
        if (response.payload) {
          setData(response.payload.data);
        }

      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };

    fetchData();
  }, [currentUser.role, currentUser.username, dispatch]);

  // Cấu hình các cột của bảng
  const columns = [
    {
      title: 'Môn học',
      dataIndex: ['dataClass', 'subject'],
      key: 'subject',
    },
    {
      title: 'Địa chỉ',
      dataIndex: ['dataClass', 'address'],
      key: 'address',
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: ['dataClass', 'time'],
      key: 'startTime',
      render: (time) => convertDate(time),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: ['dataClass', 'end_time'],
      key: 'endTime',
      render: (endTime) => convertDate(endTime),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <div className="flex space-x-2">
          {record.status === 'active' && (
            <button
              onClick={() => setIdLop(record.id)}
              className="text-blue-500 hover:underline">Xem chi tiết</button>
          )}
          {/* Bạn có thể thêm các hành động khác ở đây */}
        </div>
      ),
    },
  ];

  if (idLop) {
    return <LichHocChiTiet
      idLop={idLop}
      currentUser={currentUser}
      setIdLop={setIdLop}
    />
  }

  return (
    <Card title="Lịch học của bạn" className="mb-6">
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={false}
        className="border-t"
      />
    </Card>
  );
};

export default LichHoc;
