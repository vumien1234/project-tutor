import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplyList } from "./api";
import { getIMG } from "../../utils/currencyFormatter";

const ApplyDetail = (props) => {
  const dispatch = useDispatch();
  const { classId, owner = false } = props;

  // Lấy danh sách ứng viên đã ứng tuyển từ Redux
  const applyList = useSelector((state) => state.classList.applyList);

  useEffect(() => {
    // Nếu danh sách ứng viên của lớp học này chưa có, thì gọi API để lấy dữ liệu
    if (!applyList[classId]) {
      dispatch(fetchApplyList(classId));
    }
  }, [applyList, classId, dispatch]);

  // Hàm chuyển đổi \n thành <br />
  const formatText = (text) => {
    if (!owner) return "*******"
    if (!text) return null;
    return text.split("\n").map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  return (
    <div className="mt-2 w-100">
      <h1 className="text-2xl font-semibold mb-5">Danh sách ứng viên đã ứng tuyển</h1>

      {/* Kiểm tra xem danh sách ứng viên đã có chưa */}
      {applyList[classId] ? (
        <div>
          {applyList[classId].map((applicant) => (
            <div key={applicant.id} className="mb-4 p-4 border border-gray-300 rounded-md shadow-sm">
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
                <div className="text-sm text-gray-400">
                  {new Date(applicant.created_at).toLocaleString()}
                </div>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Giá ứng tuyển: </strong>
                {owner ? (
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
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Chưa có ứng viên nào ứng tuyển cho lớp học này.</p>
      )}
    </div>
  );
};

export default ApplyDetail;
