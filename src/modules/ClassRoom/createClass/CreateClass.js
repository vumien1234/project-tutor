import React, { useEffect, useState } from "react";
import Container from "../../../components/common/Container";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/common/Button";
import { DATE_OF_WEEK, DATE_OF_WEEK_TEXT, LIST_OF_SUBJECTS, SHIFT_OF_DAY, SHIFT_OF_DAY_TEXT } from "../../../constants/MainConstants";
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

  const [selectedDays, setSelectedDays] = useState({});

  useEffect(() => {
    let data = {}

    for (let day of DATE_OF_WEEK) {
      for (let shift of SHIFT_OF_DAY) {
        data[`${day}-${shift}`] = false;
      }
    }

    setSelectedDays(data);
  }, []);

  const handleDayChange = (day) => {
    setSelectedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const handleCreateClass = async (data) => {

    // Validate if user has selected at least 1 day
    if (!Object.values(selectedDays).includes(true)) {
      return alert("Vui lòng chọn ít nhất 1 ngày trong tuần");
    }

    const res = await dispatch(createClassAPI({
      ...data,
      username: currentUser.username,
      status: "pending",
      calendar: selectedDays,
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

              {/* Chọn giới tính */}
              <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                <div className="flex flex-col w-full mt-5 md:mt-0">
                  <div className="flex items-center">
                    <h6 className={`${errors.gender ? "text-red-500" : ""} mr-3`}>Giới tính *</h6>
                    {errors.gender && <h6 className="text-red-500 text-sm">{errors.gender.message}</h6>}
                  </div>
                  <select
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("gender", { required: "Giới tính là bắt buộc" })}
                  >
                    <option value="">Chọn giới tính</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div className="flex flex-col w-full mt-5 md:mt-0">
                  <div className="flex items-center">
                    <h6 className={`${errors.level ? "text-red-500" : ""} mr-3`}>Chương trình / lớp *</h6>
                    {errors.level && <h6 className="text-red-500 text-sm">{errors.level.message}</h6>}
                  </div>
                  {/* select 1-12 */}
                  <select
                    className="py-3 px-5 mt-3 rounded-sm border-[1.5px] border-solid w-full"
                    {...register("level", { required: "Chương trình / lớp là bắt buộc" })}
                  >
                    <option value="">Chọn chương trình / lớp</option>
                    {[...Array(13).keys()].map((level) => (
                      <option key={level} value={level + 1}>
                        {level === 12 ? "Đại học" : `Lớp ${level + 1}`}
                      </option>
                    ))}
                  </select>
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
                    type="date"
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

              <div className="flex flex-col w-full mt-5">
                <h6 className="mb-3">Chọn lịch trong tuần *</h6>
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
                              {...register("shifts")}
                              checked={selectedDays[`${day}-${shift}`]} // Check if the day is selected
                              onChange={() => handleDayChange(`${day}-${shift}`)} // Toggle day selection
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {errors.days_of_week && (
                  <h6 className="text-red-500 text-sm">{errors.days_of_week.message}</h6>
                )}
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
              <CustomButton buttonType="submit" title="Tạo lớp học" className="my-10" />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CreateClass;
