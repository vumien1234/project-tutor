import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonDangKy, updateDonDangKy } from "./api";
import { GENDER } from "../../constants/AuthConstant";
import { Table, Tag, Modal } from "antd";
import dayjs from "dayjs";
import { FaEye } from "react-icons/fa";
import { CLASS_STATUS_TAG, CLASS_STATUS_TEXT } from "../../constants/MainConstants";

const DonDangKy = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [listDonDangKy, setListDonDangKy] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDonDangKy, setSelectedDonDangKy] = useState(null);

  const getDonDangKy = useCallback(async () => {
    try {
      if (currentUser && currentUser?.username) {
        const response = await dispatch(fetchDonDangKy({
          username: currentUser?.username
        }));
        if (response.payload) {
          setListDonDangKy(response.payload?.data || []);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    getDonDangKy();
  }, [getDonDangKy]);

  const getStatus = (row) => {
    if (row.request.status === "pending") {
      return row.status;
    }
    if (row.request.status !== "pending") {
      if (row.status === "waiting_payment" || row.status === "done") {
        return row.status;
      } else {
        return "rejected";
      }
    }
  };

  const onAccept = async (record) => {
    let payload = {
      id: record.id,
      requestId: record.request.id,
      status: "waiting_payment",
      username: currentUser.username
    }

    try {
      await dispatch(updateDonDangKy(payload));
      await getDonDangKy();
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    {
      title: "ID Đơn",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Môn Học",
      dataIndex: ["request", "subject"],
      key: "subject",
    },
    {
      title: "Giá Tiền",
      dataIndex: "total_price",
      key: "total_price",
      render: (price) => price.toLocaleString("vi-VN", { style: "currency", currency: "VND" }),
    },
    {
      title: "Ngày Đăng Ký",
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at) => dayjs(created_at).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Ngày Hết Hạn",
      dataIndex: ["request", "due_date"],
      key: "due_date",
      render: (due_date) => dayjs(due_date).format("DD/MM/YYYY"),
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <Tag color={CLASS_STATUS_TAG[getStatus(record)]}>
          {CLASS_STATUS_TEXT[getStatus(record)]}
        </Tag>
      ),
    },
    {
      title: "Hành Động",
      key: "action",
      render: (_, record) => (
        <button
          className="py-2 text-xs font-medium text-center inline-flex items-center bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
          onClick={() => showModal(record)}
        >
          Chi tiết
        </button>
      ),
    },
  ];

  const showModal = (record) => {
    setSelectedDonDangKy(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedDonDangKy(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Danh Sách Đơn Đăng Ký</h1>
      <Table
        columns={columns}
        dataSource={listDonDangKy}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title="Chi Tiết Đơn Đăng Ký"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        {selectedDonDangKy && (
          <div className="space-y-4">
            <p><strong>ID Đơn:</strong> {selectedDonDangKy.id}</p>
            <p><strong>Môn Học:</strong> {selectedDonDangKy.request.subject}</p>
            <p><strong>Địa Chỉ:</strong> {selectedDonDangKy.request.address}</p>
            <p><strong>Giới Tính:</strong> {GENDER[selectedDonDangKy.request.gender]}</p>
            <p><strong>Trình Độ:</strong> {selectedDonDangKy.request.level === 13 ? "Đại học" : `Lớp ${selectedDonDangKy.request.level}`}</p>
            <p><strong>Giá Tiền:</strong> {selectedDonDangKy.total_price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
            <p><strong>Ngày Hết Hạn:</strong> {dayjs(selectedDonDangKy.request.due_date).format("DD/MM/YYYY")}</p>
            <p><strong>Mô Tả:</strong> {selectedDonDangKy.description}</p>
            <p><strong>Kế Hoạch:</strong> {selectedDonDangKy.plan}</p>

            {/* Xem bài đăng */}
            <div className="flex justify-center gap-4">
              <a
                href={`/chi-tiet-lop/${selectedDonDangKy.request.id}`}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Xem Bài Đăng
              </a>

              {getStatus(selectedDonDangKy) === "accepted" && (
                <button
                  onClick={() => onAccept(selectedDonDangKy)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Xác nhận dạy
                </button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DonDangKy;
