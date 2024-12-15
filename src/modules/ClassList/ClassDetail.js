import React, { useEffect, useState } from "react";
import Container from "../../components/common/Container";
import { IoHomeOutline, IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle, IoMdTime } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { CiCalendar, CiUser } from "react-icons/ci";
import CustomButton from "../../components/common/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ImgWhy from "../../assets/image/why.png";
import { useDispatch, useSelector } from "react-redux";
import { applyClass, fetchApplyList, fetchClassList, fetchClassListDetail } from "./api";
import { formatCurrency } from "../../utils/currencyFormatter";
import ClassSimilar from "./ClassSimilar";
import { convertDate } from "../../utils/main";
import { CLASS_STATUS, DATE_OF_WEEK, DATE_OF_WEEK_TEXT, SHIFT_OF_DAY, SHIFT_OF_DAY_TEXT } from "../../constants/MainConstants";
import { GENDER } from "../../constants/AuthConstant";
import { Modal, Input, Button } from "antd";
import ApplyDetail from "./ApplyDetail";

const ClassDetail = () => {
  const { classId } = useParams();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const { classListDetail, classList } = useSelector((state) => state.classList);

  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    total_price: 0,
    description: "",
    plan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // check if formData is valid
    if (!formData.total_price || !formData.description || !formData.plan) {
      return;
    }
    const payload = {
      classId,
      ...formData,
    }

    await dispatch(applyClass(payload));
    dispatch(fetchApplyList(classId));
    setVisible(false);
    // call api to submit form
  };

  useEffect(() => {
    if (classId) {
      dispatch(fetchClassListDetail(classId));
    }
  }, [classId, dispatch]);

  useEffect(() => {
    dispatch(fetchClassList());
  }, [dispatch]);

  return (
    <Container>
      {classListDetail ? (
        <div className="w-full py-12">
          <div className="flex items-center mb-4">
            <IoHomeOutline className="w-5 h-5 mr-2 text-orange-500" />
            <a href="/" className="mr-2">
              Trang chủ
            </a>
            <div className="flex items-center">
              <a href="/danh-sach-lop">
                <span>/ Danh sách lớp / </span>
              </a>
              <span className="ml-2">{classListDetail.id}</span>
            </div>
          </div>

          <div className="flex flex-col gap-10 mb-0 md:flex-row pb-0 py-5 w-full">
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Chi tiết lớp {classListDetail.id}</h3>
              <div className="py-5 flex items-center">
                <span>Tình trạng:</span>
                <p className="text-green-500 flex items-center ml-2">
                  {classListDetail.status === "pending" ? "Đang chờ" : "Đã hết hạn"} <IoIosCheckmarkCircle className="ml-2" />
                </p>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <CiUser className="w-5 h-5 text-gray-600" />
                <h6>{classListDetail?.author?.full_name}</h6>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <IoLocationSharp className="w-5 h-5 text-gray-600" />
                <h6>{classListDetail.address}</h6>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <MdAttachMoney className="w-5 h-5 text-gray-600" />
                <h6>{formatCurrency(classListDetail.total_price)}</h6>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <IoMdTime className="w-6 h-6 text-gray-600" />
                <h6>Ngày bắt đầu: {convertDate(classListDetail.time)} -  {convertDate(classListDetail.end_time)}</h6>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <CiCalendar className="w-5 h-5 text-gray-600" />
                <h6>Ngày đến hạn: {convertDate(classListDetail.due_date)}</h6>
              </div>
              <div className="my-7">
                <h5 className="font-semibold">Đặc điểm học sinh :</h5>
                <h6 className="py-2">Giới tính: {GENDER[classListDetail.gender]}</h6>
                <h6 className="py-2">Lớp: {classListDetail.level === 13 ? "Đại học" : classListDetail.level}</h6>
                <h6 className="py-2">Môn học: {classListDetail.subject}</h6>
              </div>
            </div>
            <div className="w-full aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${classListDetail.address}+()&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                title="Google Map"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            </div>
          </div>

          <div className="py-5 pt-0 flex flex-col gap-5 w-full">
            <div className="w-full overflow-auto">
              <h6 className="mb-3">Lịch trong tuần *</h6>
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
                            checked={classListDetail?.calendar[`${day}-${shift}`]}
                            readOnly={true}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-3">
              <h6>Ghi chú: {classListDetail.note}</h6>
            </div>
            {currentUser && currentUser.role === "tutor" && (
              <>
                {classListDetail.status === "pending" ? (
                  <CustomButton onClick={() => setVisible(true)} title="Đăng kí nhận lớp ngay" icon={FaArrowRight} color="secondary" className="mt-2" />
                ) : (
                  <CustomButton title="Lớp đã hết hạn đăng ký" color="secondary" className="mt-2" />
                )}
              </>
            )}
          </div>

          <ApplyDetail
            owner={classListDetail?.username === currentUser?.username}
            classId={classId}
            applied={classListDetail.status !== "pending"}
          />

          <div className="border-dashed border my-5 border-indigo-200"></div>
          {/* Các lớp tương tự */}
          <ClassSimilar classList={classList} />
          <div className="border-dashed border my-5 border-indigo-200"></div>
          <div className="py-3 flex flex-col md:flex-row md:gap-32 gap-5">
            <img src={ImgWhy} alt="why" className="object-cover w-[150px] h-[150px]" />
            <div>
              <h3>Nếu bạn chưa chắc chắn về việc nhận lớp này?</h3>
              <h6 className="py-5">Nếu bạn vẫn còn phân vân hoặc có thắc mắc về lớp học, hãy liên hệ ngay với TutorMaster để được tư vấn chi tiết hơn. Chúng tôi sẽ hỗ trợ bạn chọn lựa lớp học phù hợp nhất với mục tiêu và nhu cầu của bạn, giúp bạn tự tin hơn khi ra quyết định.</h6>
              <Link to="/lien-he">
                <CustomButton title="Liên hệ" icon={FaArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Không có thông tin lớp học này.</p>
      )}

      <Modal
        title="Đơn ứng tuyển lớp học"
        width={800}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Lưu
          </Button>,
        ]}
      >
        <div className="space-y-6">
          {/* Mô tả giá ứng tuyển */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Vui lòng nhập mức phí bạn yêu cầu cho một khóa học. Mức phí này sẽ dựa trên độ khó của lớp học, thời gian dạy,...</p>
            <label className="block text-sm font-medium text-gray-700">Giá ứng tuyển / buổi</label>
            <div className="flex items-center">
              <Input
                type="number"
                name="total_price"
                value={formData.total_price}
                onChange={handleChange}
                className="border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          {/* Mô tả bản thân */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Hãy giới thiệu bản thân bạn. Đề cập đến kinh nghiệm gia sư, phương pháp giảng dạy, và lý do bạn muốn dạy lớp này.</p>
            <label className="block text-sm font-medium text-gray-700">Mô tả bản thân</label>
            <Input.TextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Mô tả kế hoạch dạy */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Hãy mô tả cách bạn sẽ tổ chức các buổi học. Bạn sẽ sử dụng phương pháp gì? Mỗi buổi học sẽ kéo dài bao lâu?</p>
            <label className="block text-sm font-medium text-gray-700">Kế hoạch dạy</label>
            <Input.TextArea
              name="plan"
              rows={4}
              value={formData.plan}
              onChange={handleChange}
              className="border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ClassDetail;
