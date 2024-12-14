import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseList } from "./api";
import { CLASS_STATUS, CLASS_STATUS_COLOR } from "../../constants/MainConstants";
import { convertDate } from "../../utils/main";
import { Link } from "react-router-dom";
import HandlePayment from "./HandlePayment";

const Course = () => {
  const dispatch = useDispatch();
  const { courseList } = useSelector((state) => state.courseList);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [payment, setPayment] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState(courseList);

  useEffect(() => {
    if (currentUser.username) {
      // Fetch dữ liệu khóa học chỉ một lần
      dispatch(fetchCourseList({ page: 1, limit: 10, username: currentUser.username }));
    }
  }, [currentUser.username, dispatch]);

  useEffect(() => {
    // Lọc khóa học dựa trên trạng thái filter mỗi khi `courseList` hoặc `statusFilter` thay đổi
    if (statusFilter === "all") {
      setFilteredCourses(courseList);
    } else {
      const filtered = courseList.filter((course) => course.status === statusFilter);
      setFilteredCourses(filtered);
    }
  }, [courseList, statusFilter]);

  if (payment) {
    return <HandlePayment item={payment} />;
  }

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value); // Cập nhật trạng thái filter
  };

  return (
    <>
      {/* Phần Filter */}
      <div className="mb-6">
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={handleStatusChange}
          className="border border-gray-300 px-4 py-2 rounded"
        >
          <option value="all">Tất cả</option>
          <option value="pending">Chờ duyệt</option>
          <option value="waiting_payment">Chờ thanh toán</option>
          <option value="done">Đã hoàn thành</option>
        </select>
      </div>

      {/* Hiển thị khóa học */}
      {filteredCourses && filteredCourses.length > 0 ? (
        <div className="border border-[#3a83bb] rounded-lg text-left overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Môn học</th>
                <th className="border border-gray-300 px-4 py-2">Thời gian bắt đầu</th>
                <th className="border border-gray-300 px-4 py-2">Học phí</th>
                <th className="border border-gray-300 px-4 py-2">Trạng thái</th>
                <th className="border border-gray-300 px-4 py-2">Hạn nhận đơn</th>
                <th className="border border-gray-300 px-4 py-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link to={`/chi-tiet-lop/${item.id}`}>
                      {item.subject}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {convertDate(item.time)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.total_price.toLocaleString()}đ
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <span
                      className={`px-3 py-1 rounded-full ${CLASS_STATUS_COLOR[item.status]}`}
                    >
                      {CLASS_STATUS[item.status]}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {convertDate(item.due_date)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {item.status === "pending" && (
                      <Link to={`/chi-tiet-lop/${item.id}`} className="text-blue-500">
                        <button className="text-blue-500">Xem bài đăng</button>
                      </Link>
                    )}

                    {item.status === "waiting_payment" && (
                      <button className="text-blue-500" onClick={() => setPayment(item)}>
                        Thanh toán
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">Không có khóa học nào</p>
      )}
    </>
  );
};

export default Course;
