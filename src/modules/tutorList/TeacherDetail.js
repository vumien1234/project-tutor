import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../components/common/Container";
import { GoStarFill } from "react-icons/go";
import { fetchListTutorDetail } from "./api";
import Comment from "./Comment";
import ImgTeacher from "../../assets/image/teamTutor/1.jpg";
import { getIMG } from "../../utils/currencyFormatter";

const TeacherDetail = () => {
  const dispatch = useDispatch();
  const { userName } = useParams();
  const { listTutorDetail } = useSelector((state) => state.listTutor);

  useEffect(() => {
    if (userName) {
      dispatch(fetchListTutorDetail(userName));
    }
  }, [userName, dispatch]);

  const renderListSubject = (subjects) => {
    if (!subjects) return null;

    subjects = subjects.split(",");

    return subjects.map((subject, index) => (
      <span key={index} className="bg-gray-200 px-2 py-1 rounded-full">
        {subject}
      </span>
    ));
  };

  return (
    <Container>
      <div className="py-12 w-full">
        <div className="flex md:flex-row flex-col gap-6">
          <div className="w-full space-y-8">
            <h4 className="text-2xl font-bold uppercase mb-10">Thông tin gia sư</h4>
            <div className="flex items-center text-left">
              <h6 className="font-semibold w-[150px]">Họ và tên:</h6>
              <h6 className="flex-grow">{listTutorDetail?.full_name}</h6>
            </div>
            <div className="flex items-center text-left">
              <h6 className="font-semibold w-[150px]">Số điện thoại:</h6>
              <h6 className="flex-grow">{listTutorDetail?.phone}</h6>
            </div>
            <div className="flex items-center text-left">
              <h6 className="font-semibold w-[150px]">Thường trú:</h6>
              <h6 className="flex-grow">{listTutorDetail?.address}</h6>
            </div>
            <div className="flex items-center text-left">
              <h6 className="font-semibold w-[150px]">Chuyên môn:</h6>
              <div className="flex flex-wrap gap-2">
                {renderListSubject(listTutorDetail?.subjects)}
              </div>
            </div>
            <div className="flex items-center text-left">
              <h6 className="font-semibold w-[150px]">Giới thiệu:</h6>
              <h6 className="flex-grow">{listTutorDetail?.introduction}</h6>
            </div>
            <div className="flex items-center text-left">
              <h6 className="font-semibold w-[150px]">Đánh giá:</h6>
              <div className="flex">
                <GoStarFill className="w-6 h-6 text-yellow-300 mr-1" />
                <GoStarFill className="w-6 h-6 text-yellow-300 mr-1" />
                <GoStarFill className="w-6 h-6 text-yellow-300 mr-1" />
                <GoStarFill className="w-6 h-6 text-yellow-300 mr-1" />
                <GoStarFill className="w-6 h-6 text-yellow-300" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="relative ">
              <img
                src={getIMG(listTutorDetail?.avatar) || ImgTeacher}
                alt={listTutorDetail?.username}
                className="w-full z-40 h-full object-cover rounded-t-2xl"
              />
            </div>
          </div>
        </div>
        <Comment
          userName={userName}
        />
      </div>
    </Container>
  );
};

export default TeacherDetail;
