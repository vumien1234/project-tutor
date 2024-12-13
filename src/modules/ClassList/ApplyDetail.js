import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptTutor, fetchApplyList } from "./api";
import { getIMG } from "../../utils/currencyFormatter";

const ApplyDetail = (props) => {
  const dispatch = useDispatch();
  const { classId, owner = false, applied = false } = props;

  // Lấy danh sách ứng viên đã ứng tuyển từ Redux
  const applyList = useSelector((state) => state.classList.applyList);
  const [showModal, setShowModal] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState({});
  const [status, setStatus] = useState("")

  useEffect(() => {
    // Nếu danh sách ứng viên của lớp học này chưa có, thì gọi API để lấy dữ liệu
    if (!applyList[classId]) {
      dispatch(fetchApplyList(classId));
    }
  }, [applyList, classId, dispatch]);

  const handleAccept = (candidate, status = "accepted") => {
    setShowModal(true);
    setSelectedTutor(candidate);
    setStatus(status);
  };

  const onAccept = async () => {
    // Gọi API để chấp nhận ứng viên

    const payload = {
      status: status,
      username: selectedTutor.author.username,
      classId: classId,
      id: selectedTutor.id
    }

    // Gọi API để chấp nhận ứng viên
    await dispatch(acceptTutor(payload));
    dispatch(fetchApplyList(classId));

    setShowModal(false);
  }

  // Hàm chuyển đổi \n thành <br />
  const formatText = (text) => {
    if (!owner && !applied) return "*******"
    if (!text) return null;
    return text.split("\n").map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  const renderClass = (applicant) => {
    if (!applied) {
      if (applicant.status === "accepted") {
        return "border-green-600 border-dashed border-2"
      }
    } else {
      if (applicant.status === "waiting_payment" || applicant.status === "done") {
        return "border-green-600 border-dashed border-2 accepted"
      }
    }
    return ""

  }

  return (
    <div className="mt-2 w-100">
      <h1 className="text-2xl font-semibold mb-5">Danh sách ứng viên đã ứng tuyển</h1>

      {/* Kiểm tra xem danh sách ứng viên đã có chưa */}
      {applyList[classId] && applyList[classId].length > 0 ? (
        <div>
          {applyList[classId].map((applicant) => (
            <div key={applicant.id} className={`mb-4 p-4 border border-gray-300 rounded-md shadow-sm ${renderClass(applicant)}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img
                    src={getIMG(applicant.author.avatar)}
                    alt={applicant.author.full_name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{applicant.author.full_name}</h3>
                    <p className="text-sm text-gray-600">{applicant.author.username}</p>
                  </div>
                </div>
                {applicant.status === "waiting_payment" || applicant.status === "done" ? (
                  // Đã trúng tuyển
                  <div className="mb-2 text-center">
                    <p className="text-green-500 font-semibold text-lg">Đã trúng tuyển</p>
                  </div>
                ) : null}
                <div className="text-sm text-gray-400">
                  {new Date(applicant.created_at).toLocaleString()}
                </div>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Giá ứng tuyển: </strong>
                {(owner || applied) ? (
                  <> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(applicant.total_price)} </>
                ) : (
                  <>*** vnđ</>
                )}
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Mô tả bản thân: </strong>
                {/* Sử dụng hàm formatText để hiển thị mô tả với dòng mới */}
                <p>{formatText(applicant.description)}</p>
              </div>
              <div className="text-sm text-gray-700">
                <strong>Kế hoạch dạy: </strong>
                {/* Sử dụng hàm formatText để hiển thị kế hoạch với dòng mới */}
                <p>{formatText(applicant.plan)}</p>
              </div>

              {owner && !applied && (
                <div className="mt-4">
                  {applicant.status === "pending" && (
                    <button onClick={() => handleAccept(applicant)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                      Lựa chọn
                    </button>
                  )}
                  {applicant.status === "accepted" && (
                    <button onClick={() => handleAccept(applicant, "pending")} className="bg-red-500 text-white px-4 py-2 rounded-md">
                      Hủy chọn
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Chưa có ứng viên nào ứng tuyển cho lớp học này.</p>
      )}

      {showModal && selectedTutor && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Thông tin gia sư</h2>

            {/* Text */}
            <div className="mb-4">
              {/* Ban co muon ung tuyen */}
              {status === "pending" ? (
                <p className="text-gray-700">
                  Bạn có muốn hủy chấp nhận ứng viên này không?
                </p>
              ) : (
                <p className="text-gray-700">
                  Bạn có muốn chấp nhận ứng viên này không?
                </p>
              )}
            </div>

            <div className="flex items-center mb-4">
              <img
                src={getIMG(selectedTutor.author.avatar)}
                alt={selectedTutor.author.full_name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold text-lg">{selectedTutor.author.full_name}</p>
                <p className="text-sm text-gray-600">{selectedTutor.author.address}</p>
                <p className="text-sm text-gray-600">{selectedTutor.author.phone}</p>
                <p className="text-sm text-gray-600">{selectedTutor.author.email}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Mô tả:</h4>
              <p>{formatText(selectedTutor.description)}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Kế hoạch dạy học:</h4>
              <p>{formatText(selectedTutor.plan)}</p>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={onAccept}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Chấp nhận
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ApplyDetail;
