import { useEffect, useState } from "react";
import { CLASS_STATUS_TEXT } from "../../constants/MainConstants";
import { GENDER } from "../../constants/AuthConstant";
import { useDispatch } from "react-redux";
import { checkPayment, updatePayment } from "./api";
import { Link } from "react-router-dom";

const HandlePayment = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    const actionPayment = async (interval) => {
      const message = `${item.username}${item.id}`
      const price = item.total_price;

      const payload = {
        message,
        price,
      };

      const res = await dispatch(checkPayment(payload));

      if (res.payload) {
        if (res.payload.hasValidTransaction === true) {
          setPayment(res.payload.transaction);
          clearInterval(interval);

          const response = await dispatch(updatePayment({ requestId: item.id, transaction_id: res.payload.transaction.id }));
          console.log(response);
        }
      }
    }

    const interval = setInterval(() => {
      actionPayment(interval);
    }, 3000);

    return () => clearInterval(interval);

  }, [dispatch, item.id, item.total_price, item.username]);

  useEffect(() => {
    const handleGetQr = async () => {
      const content = `Thanh toán cho ${item.username}${item.id}`;

      const payload = {
        accountNo: "0396396332",
        accountName: "Gia Su Truc Tuyen",
        acqId: 970422,
        amount: item.total_price,
        addInfo: content,
        format: "text",
        template: "compact2",
      };

      const res = await fetch("https://api.vietqr.io/v2/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setImg(data.data.qrDataURL);
    };
    handleGetQr();
  }, [item]);

  if (payment) {
    return (
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-4">Thanh Toán Thành Công</h2>

        <div className="text-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 mx-auto text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-lg text-gray-700 mt-4">Cảm ơn bạn đã hoàn tất thanh toán!</p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700 mb-6">
          <div className="flex justify-between">
            <strong>Họ và tên:</strong> <span>{item.username}</span>
          </div>
          <div className="flex justify-between">
            <strong>Môn học:</strong> <span>{item.subject}</span>
          </div>
          <div className="flex justify-between">
            <strong>Tổng số tiền:</strong> <span className="text-xl font-bold">{item.total_price.toLocaleString()} VND</span>
          </div>
          <div className="flex justify-between">
            <strong>Trạng thái:</strong> <span className="text-green-500">Đã thanh toán</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/ho-so?tab=lich-hoc">
            <button
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Vào trang lớp học
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Thanh Toán Dịch Vụ</h2>

      <div className="mb-8">
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
          <div className="flex justify-between">
            <strong>Họ và tên:</strong> <span>{item.username}</span>
          </div>
          <div className="flex justify-between">
            <strong>Địa chỉ:</strong> <span>{item.address}</span>
          </div>
          <div className="flex justify-between">
            <strong>Môn học:</strong> <span>{item.subject}</span>
          </div>
          <div className="flex justify-between">
            <strong>Giới tính:</strong> <span>{GENDER[item.gender]}</span>
          </div>
          <div className="flex justify-between">
            <strong>Cấp độ:</strong> <span>{item.level === 13 ? "Đại học" : `Lớp ${item.level}`}</span>
          </div>
          <div className="flex justify-between">
            <strong>Trạng thái:</strong>
            <span className={`text-sm ${item.status === 'waiting_payment' ? 'text-yellow-500' : 'text-green-500'}`}>{CLASS_STATUS_TEXT[item.status]}</span>
          </div>
          <div className="flex justify-between">
            <strong>Tổng số tiền:</strong> <span className="text-xl font-bold">{item.total_price.toLocaleString()} VND</span>
          </div>
          <div className="flex justify-between">
            <strong>Nội dung:</strong>
            <span >
              {`Thanh toán cho ${item.username}_${item.id}`}
            </span>
          </div>
        </div>
      </div>

      {img && (
        <div className="text-center">
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Quét mã QR để thanh toán</h3>
          <img src={img} alt="QR" className="w-72 mx-auto border border-gray-300 rounded-lg" />
        </div>
      )}

      <div className="mt-8 text-center">
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
          Xác Nhận Thanh Toán
        </button>
      </div>
    </div>
  );
};

export default HandlePayment;
