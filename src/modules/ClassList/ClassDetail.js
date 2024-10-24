import React, { useEffect } from "react";
import Container from "../../components/common/Container";
import { IoHomeOutline, IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle, IoMdTime } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { CiBookmark, CiCalendar } from "react-icons/ci";
import CustomButton from "../../components/common/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ImgWhy from "../../assets/image/why.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchClassList, fetchClassListDetail } from "./api";
import { convertTime } from "../../utils/timeConverter";
import { formatCurrency } from "../../utils/currencyFormatter";
import ClassSimilar from "./ClassSimilar";

const ClassDetail = () => {
  // Dùng useParams để lấy classId từ URL
  const { classId } = useParams();
  const dispatch = useDispatch();
  const { classListDetail,  classList } = useSelector((state) => state.classList);

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

          <div className="py-5 flex flex-col md:flex-row gap-10 w-full">
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Chi tiết lớp {classListDetail.id}</h3>
              <div className="py-5 flex items-center">
                <span>Tình trạng:</span>
                <p className="text-green-500 flex items-center ml-2">
                  {classListDetail.status} <IoIosCheckmarkCircle className="ml-2" />
                </p>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <IoMdPerson className="w-5 h-5 text-gray-600" />
                <h6 className="text-blue-400">GV. {classListDetail?.author.username}</h6>
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
                <h6>{convertTime(classListDetail.time)}</h6>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <CiBookmark className="w-5 h-5 text-gray-600" />
                <h6>Yêu cầu: {classListDetail.note}</h6>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <CiCalendar className="w-5 h-5 text-gray-600" />
                <h6>Ngày đến hạn: {classListDetail.due_date}</h6>
              </div>
              <div className="my-7">
                <h5 className="font-semibold">Đặc điểm học sinh :</h5>
                <h6 className="py-3">Giới tính: {classListDetail.studentGender}</h6>
                <h6>{classListDetail.studentDescription}</h6>
              </div>
              <Link to={`/dang-ki-lop/${classListDetail.id}`}>
                <CustomButton title="Đăng kí nhận lớp ngay" icon={FaArrowRight} color="secondary" className="mt-2" />
              </Link>
            </div>
            <div className="w-full aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.google.com/maps/embed?pb=${classListDetail.mapEmbed}`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
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
    </Container>
  );
};

export default ClassDetail;
