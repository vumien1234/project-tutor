import React from "react";
import Container from "../../../components/common/Container";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/common/Button";
import { LIST_OF_SUBJECTS } from "../../../constants/MainConstants";
import { useDispatch, useSelector } from "react-redux";
import { createClassAPI } from "../ClassRoomApi";
import { useNavigate } from "react-router-dom";

const CreateClass = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleCreateClass = async (data) => {
    const res = await dispatch(createClassAPI({
      ...data,
      username: currentUser.username,
      status: "pending",
    }));

    if (res.payload) {
      navigate("/ho-so?tab=khoa-hoc-dang-ki")
    }
    // reset form after submit
    reset();
  };

  return (
    <div>
      <div className="bg-[#EFF3FF] py-20">
        <Container>
          <div className="w-full bg-white p-16">
            <h3 className="text-blue-400 mb-3">Tạo lớp học mới</h3>
            <form onSubmit={handleSubmit(handleCreateClass)}>

              {/* Môn học và Giá tiền cùng một hàng */}
              <div className="flex md:flex-row flex-col md:gap-5">
                <div className="flex flex-col w-full">
                  <div className="flex items-center">
                    <h6 className={`${errors.subject ? "text-red-500" : ""} mr-3`}>Môn học *</h6>
                    {errors.subject && <h6 className="text-red-500 text-sm">{errors.subject.message}</h6>}
                  </div>
                  <select
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("subject", { required: "Môn học là bắt buộc" })}
                  >
                    <option value="">Chọn môn học</option>
                    {LIST_OF_SUBJECTS.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col w-full mt-5 md:mt-0">
                  <div className="flex items-center">
                    <h6 className={`${errors.total_price ? "text-red-500" : ""} mr-3`}>Giá tiền / giờ *</h6>
                    {errors.total_price && <h6 className="text-red-500 text-sm">{errors.total_price.message}</h6>}
                  </div>
                  <input
                    type="number"
                    placeholder="Giá tiền"
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("total_price", { required: "Giá tiền là bắt buộc" })}
                  />
                </div>
              </div>

              {/* Thời gian và Hạn nộp cùng một hàng */}
              <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                <div className="flex flex-col w-full">
                  <div className="flex items-center">
                    <h6 className={`${errors.time ? "text-red-500" : ""} mr-3`}>Thời gian bắt đầu *</h6>
                    {errors.time && <h6 className="text-red-500 text-sm">{errors.time.message}</h6>}
                  </div>
                  <input
                    type="datetime-local"
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("time", { required: "Thời gian bắt đầu là bắt buộc" })}
                  />
                </div>

                <div className="flex flex-col w-full mt-5 md:mt-0">
                  <div className="flex items-center">
                    <h6 className={`${errors.due_date ? "text-red-500" : ""} mr-3`}>Hạn gửi hồ sơ *</h6>
                    {errors.due_date && <h6 className="text-red-500 text-sm">{errors.due_date.message}</h6>}
                  </div>
                  <input
                    type="date"
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("due_date", { required: "Hạn gửi hồ sơ là bắt buộc" })}
                  />
                </div>
              </div>

              {/* Địa chỉ ở một hàng riêng */}
              <div className="flex flex-col w-full mt-5">
                <div className="flex items-center">
                  <h6 className={`${errors.address ? "text-red-500" : ""} mr-3`}>Địa chỉ *</h6>
                  {errors.address && <h6 className="text-red-500 text-sm">{errors.address.message}</h6>}
                </div>
                <textarea
                  className="w-full p-2 border mt-3 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập địa chỉ"
                  {...register("address", { required: "Địa chỉ là bắt buộc" })}
                />
              </div>

              {/* Ghi chú ở một hàng riêng */}
              <div className="flex flex-col w-full mt-5">
                <div className="flex items-center">
                  <h6 className={`${errors.note ? "text-red-500" : ""} mr-3`}>Ghi chú *</h6>
                  {errors.note && <h6 className="text-red-500 text-sm">{errors.note.message}</h6>}
                </div>
                <textarea
                  className="w-full p-2 border mt-3 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Yêu cầu ghi chú cho nhân viên"
                  {...register("note", { required: "Ghi chú là bắt buộc" })}
                />
              </div>

              {/* Trạng thái */}
              {/* <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                <div className="flex flex-col w-full mt-5 md:mt-0">
                  <div className="flex items-center">
                    <h6 className={`${errors.status ? "text-red-500" : ""} mr-3`}>Trạng thái *</h6>
                    {errors.status && <h6 className="text-red-500 text-sm">{errors.status.message}</h6>}
                  </div>
                  <select
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("status", { required: "Trạng thái là bắt buộc" })}
                  >
                    <option value="pending">Chờ duyệt</option>
                    <option value="approved">Đã duyệt</option>
                    <option value="completed">Hoàn thành</option>
                  </select>
                </div>
              </div> */}

              <CustomButton buttonType="submit" title="Tạo lớp học" className="my-10" />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CreateClass;
