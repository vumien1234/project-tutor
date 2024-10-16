import React, { useState } from "react";
import Container from "../../components/common/Container";
import Banner from "../../components/common/Banner";
import ImgCreateNote from "../../assets/image/anh-bia.png";
import UserDefault from "../registerClass/UserDefault";
import { useForm } from "react-hook-form";
// import SingleSelect from "../../components/common/Select";
import CustomButton from "../../components/common/Button";
import { useSelector } from "react-redux";

// Dữ liệu giả cho phần select
const fakeData = [
  { id: 1, name: "Toán học" },
  { id: 2, name: "Vật lý" },
  { id: 3, name: "Hoá học" },
  { id: 4, name: "Sinh học" }
];

const Note = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // const [selectedSubject, setSelectedSubject] = useState(null);

  const handleCreateClass = (data) => {
    console.log("Lớp học đã được tạo với môn:", data);
  };

  return (
    <div>
      <Banner className="h-[400px]" image={ImgCreateNote} title="Xin chào Mộc Miên" description="Tạo note nhận lớp" />
      <div className="bg-[#EFF3FF] py-20">
        <Container>
          <div className="w-full bg-white p-16">
            <h3 className="text-[#16a085] ">Tạo Note nhận lớp</h3>
            <form onSubmit={handleSubmit(handleCreateClass)}>
              {/* <h6 className="font-semibold my-5">1. Thông tin cá nhân</h6> */}
              {/* <UserDefault currentUser={currentUser} /> */}
              <h6 className="font-semibold py-5">Thông tin yêu cầu</h6>
              {/* <div className="flex md:flex-row flex-col md:gap-5  space-y-5 md:space-y-0">
                <SingleSelect
                  label="Chọn môn học *"
                  options={fakeData}
                  placeholder="Chọn môn học"
                  error={errors.subject?.message}
                  value={selectedSubject}
                  setValue={setSelectedSubject}
                  setErrors={() => {}}
                />
                <SingleSelect
                  label="Chọn địa chỉ *"
                  options={fakeData}
                  placeholder="Chọn địa chỉ"
                  error={errors.subject?.message}
                  value={selectedSubject}
                  setValue={setSelectedSubject}
                  setErrors={() => {}}
                />
              </div> */}
              <div className="flex md:flex-row flex-col md:gap-5">
                <div className="flex flex-col w-full">
                  <div className="flex items-center">
                    <h6 className={`${errors.username ? "text-red-500" : ""} mr-3`}>Họ và tên giáo viên *</h6>
                    {errors.username && <h6 className="text-red-500 text-sm">{errors.username.message}</h6>}
                  </div>
                  <input
                    type="text"
                    placeholder="Họ và tên giáo viên"
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("username", { required: "Họ và tên giáo viên là bắt buộc" })}
                  />
                </div>
                <div className="flex flex-col w-full mt-5 md:mt-0">
                  <div className="flex items-center">
                    <h6 className={`${errors.total_price ? "text-red-500" : ""} mr-3`}>Giá tiền *</h6>
                    {errors.total_price && <h6 className="text-red-500 text-sm">{errors.total_price.message}</h6>}
                  </div>
                  <input
                    type="text"
                    placeholder="Giá tiền"
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("total_price", { required: "Giá tiền là bắt buộc" })}
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                <div className="flex flex-col w-full mt-5 md:mt-0">
                  <div className="flex items-center">
                    <h6 className={`${errors.plan ? "text-red-500" : ""} mr-3`}>Kế hoạch *</h6>
                    {errors.plan && <h6 className="text-red-500 text-sm">{errors.plan.message}</h6>}
                  </div>
                  <input
                    type="text"
                    placeholder="Kế hoạch"
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("plan", { required: "Kế hoạch là bắt buộc" })}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full mt-5">
                <div className="flex items-center">
                  <h6 className={`${errors.description ? "text-red-500" : ""} mr-3`}>Mô tả *</h6>
                  {errors.description && <h6 className="text-red-500 text-sm">{errors.description.message}</h6>}
                </div>
                <textarea
                  className="w-full p-2 border mt-3 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Mời nhập mô tả học sinh"
                  {...register("description", { required: "Giá tiền là bắt buộc" })}
                />
              </div>
              {/* <textarea
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mời nhập"
              /> */}

              <CustomButton buttonType="submit" title="Tạo note nhận lớp" className="my-10" />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Note;
