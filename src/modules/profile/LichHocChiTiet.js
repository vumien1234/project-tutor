import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLichHocChiTiet } from "./api";  // Giả sử đây là API để lấy dữ liệu chi tiết lớp học
import { Card, Descriptions, Tag, Avatar } from "antd";
import { convertDate } from "../../utils/main";  // Giả sử có hàm convertDate để hiển thị ngày tháng
import { GENDER } from "../../constants/AuthConstant";
import { getIMG } from "../../utils/currencyFormatter";
import { DATE_OF_WEEK, DATE_OF_WEEK_TEXT, SHIFT_OF_DAY, SHIFT_OF_DAY_TEXT } from "../../constants/MainConstants";

const LichHocChiTiet = ({ idLop, setIdLop }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call API để lấy chi tiết lớp học
        const response = await dispatch(fetchLichHocChiTiet({ idLop }));

        // Handle response
        if (response.payload) {
          setData(response.payload.data);
        }

      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };

    fetchData();
  }, [dispatch, idLop]);

  const formatText = (text) => {
    if (!text) return null;
    return text.split("\n").map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  if (!data) return <p>Loading...</p>; // Hiển thị loading khi chưa có dữ liệu

  const { dataClass, dataUser, dataTutor } = data;

  return (
    <Card title="Chi tiết lớp học" className="mb-6"
      extra={
        <button
          className=""
          onClick={() => setIdLop(null)}
        >
          Trở về
        </button>
      }
    >
      <Descriptions bordered column={1} className="mb-4">
        <Descriptions.Item label="Môn học">{dataClass.subject}</Descriptions.Item>
        <Descriptions.Item label="Địa chỉ">{dataClass.address}</Descriptions.Item>
        <Descriptions.Item label="Giới tính">{GENDER[dataClass.gender]}</Descriptions.Item>
        <Descriptions.Item label="Cấp độ">Lớp {dataClass.level === 13 ? "Đại học" : dataClass.level}</Descriptions.Item>
        <Descriptions.Item label="Giáo viên">
          <div className="flex items-center space-x-2">
            <Avatar src={getIMG(dataTutor.avatar)} />
            <div>
              <strong>{dataTutor.full_name}</strong>
              <p>{dataTutor.job}</p>
            </div>
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="Học viên">
          <div className="flex items-center space-x-2">
            <Avatar src={getIMG(dataUser.avatar)} />
            <div>
              <strong>{dataUser.full_name}</strong>
              <p>{dataUser.job}</p>
            </div>
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="Ngày bắt đầu">{convertDate(dataClass.time)}</Descriptions.Item>
        <Descriptions.Item label="Ngày kết thúc">{convertDate(dataClass.end_time)}</Descriptions.Item>
        <Descriptions.Item label="Ghi chú">{dataClass.note}</Descriptions.Item>
      </Descriptions>

      <div>
        <h3 className="text-lg font-semibold mb-2">Lịch học</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {/* Hàng đầu tiên là các ngày trong tuần */}
              <th className="border p-2">Ca / Ngày</th>
              {DATE_OF_WEEK.map((day) => (
                <th key={day} className="border p-2">
                  {DATE_OF_WEEK_TEXT[day]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SHIFT_OF_DAY.map((shift) => (
              <tr key={shift}>
                <td className="border p-2 text-center">{SHIFT_OF_DAY_TEXT[shift]}</td>
                {DATE_OF_WEEK.map((day) => (
                  <td key={day} className="border p-2 text-center ">
                    <input
                      type="checkbox"
                      value={`${day}-${shift}`}
                      checked={dataClass?.calendar[`${day}-${shift}`]}
                      readOnly={true}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Thông tin lớp học</h3>
        <div className="flex space-x-4">
          <div>
            <strong>Giá học:</strong> {dataClass.total_price.toLocaleString()} VND
          </div>
          <div>
            <strong>Mã giao dịch:</strong> {dataClass.transaction_id}
          </div>
        </div>

        <div className="flex space-x-4 mt-2 flex-column">
          <div className="text-sm text-gray-700 mb-2">
            <strong>Mô tả bản thân: </strong>
            {/* Sử dụng hàm formatText để hiển thị mô tả với dòng mới */}
            <p>{formatText(data?.dataNhanLop?.description)}</p>
          </div>
          <div className="text-sm text-gray-700">
            <strong>Kế hoạch dạy: </strong>
            {/* Sử dụng hàm formatText để hiển thị kế hoạch với dòng mới */}
            <p>{formatText(data?.dataNhanLop?.plan)}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LichHocChiTiet;
