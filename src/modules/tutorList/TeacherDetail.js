import React, { useEffect } from "react";
import Container from "../../components/common/Container";
import { GoStarFill } from "react-icons/go";
import ImgTeacher from "../../assets/image/home-image/teacher.jpg";
import { FaHeart } from "react-icons/fa";
import CustomButton from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListTutorDetail } from "./api";

const TeacherDetail = () => {
  const { listTutorDetail } = useSelector((state) => state.listTutor);
  const dispatch = useDispatch();
  const { username } = useParams(); 

  useEffect(() => {
    if (username) {
      dispatch(fetchListTutorDetail(username));
    }
  }, [username, dispatch]);

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
                <h6 className="font-semibold w-[150px]">Ngày sinh:</h6>
                <h6 className="flex-grow">{listTutorDetail?.date_of_birth}</h6>
              </div>
              <div className="flex items-center text-left">
                <h6 className="font-semibold w-[150px]">Công việc:</h6>
                <h6 className="flex-grow">{listTutorDetail?.job_title}</h6> 
              </div>
              <div className="flex items-center text-left">
                <h6 className="font-semibold w-[150px]">Phụ trách môn:</h6>
                <h6 className="flex-grow">{listTutorDetail?.subject}</h6>
              </div>
              <div className="flex items-center text-left">
                <h6 className="font-semibold w-[150px]">Thường trú:</h6>
                <h6 className="flex-grow">{listTutorDetail?.address}</h6>
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
              <div className="flex items-center text-left">
                <h6 className="font-semibold w-[150px]">CV đính kèm:</h6>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="relative ">
                <img src={ImgTeacher} alt="ImgTeacher" className="w-[400px] h-[400px] object-cover" />
                <div className="w-[150px] h-[50px] border-2 border-orange-400 flex justify-center mx-auto rounded-full my-10 cursor-pointer">
                  <div className="text-orange-500 flex flex-row items-center justify-center">
                    <FaHeart className="w-[25px] h-[25px]  mr-2 " />
                    <p className="font-semibold">100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-dashed border-purple-300"></div>
          <div className="my-10 p-8 border border-gray-200 rounded-lg relative">
            <div className="flex items-center space-x-4">
              <img src={ImgTeacher} className="w-[60px] h-[60px] rounded-full" alt="avatar" />
              <textarea
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mời nhập"
              />
            </div>
            <div className="pt-8 flex justify-end">
              <CustomButton title="Gửi" buttonType="submit" />
            </div>
          </div>

          <div className="px-8 py-5 flex flex-row gap-5 border border-gray-200 rounded-lg">
            <img src={ImgTeacher} className="w-[60px] h-[60px] rounded-full" alt="avatar" />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h5 className="font-semibold">Mộc Miên</h5>
                <div className="flex items-center gap-5">
                  <h6 className="text-gray-400">20/04/2002</h6>
                  <h6 className="text-gray-400">7:00 AM</h6>
                </div>
              </div>
              <h6>hợp lý, đồng thời các phần tử sẽ được bo góc và có hiệu ứng khi người dùng tương tác với chúng.</h6>
            </div>
          </div>
        </div>
     
    </Container>
  );
};

export default TeacherDetail;
