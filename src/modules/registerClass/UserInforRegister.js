import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CustomButton from "../../components/common/Button";
import UserDefault from "./UserDefault";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterClassList } from "./api";
import { useNavigate, useLocation } from "react-router-dom";

const UserInforRegister = ({ setStep, classList }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Lấy thông tin trang trước

  const handleRegister = (data) => {
    console.log("Thông tin đăng ký: ", data);

    dispatch(fetchRegisterClassList())
      .then((response) => {
        console.log("Đăng ký lớp thành công: ", response);
        navigate(`?tab=confirm&c=${response.id}`);
        setStep(2); // Chuyển đến bước tiếp theo
      })
      .catch((error) => {
        console.error("Đăng ký lớp thất bại: ", error);
      });
  };

  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  const selectedClass = classList?.[0] || null;

  return (
    <div className="py-12 w-full">
      <h5>Hồ sơ đăng ký</h5>
      <form onSubmit={handleSubmit(handleRegister)}>
        {/* Thông tin người dùng */}
        <div className="mt-5">
          <h6 className="font-semibold pb-5">Thông tin người dùng</h6>
          <UserDefault currentUser={currentUser} />
        </div>

        {/* Thông tin lớp học */}
        <div className="mt-8">
          <h6 className="font-semibold">Thông tin lớp học</h6>
          <div className="flex md:flex-row flex-col md:gap-5 mt-5">
            <div className="flex flex-col w-full">
              <h6 className="mb-3">Họ và tên giáo viên</h6>
              <input
                type="text"
                placeholder="Họ và tên"
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                value={selectedClass?.username || ""}
                disabled
              />
            </div>
            <div className="flex flex-col w-full mt-5 md:mt-0">
              <h6 className="mb-3">Giá tiền</h6>
              <input
                type="text"
                placeholder="Giá tiền"
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                value={selectedClass?.total_price || ""}
                disabled
              />
            </div>
          </div>

          {/* Mô tả lớp học và Kế hoạch */}
          <div className="flex md:flex-row flex-col md:gap-5 mt-5">
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <h6 className={`${errors.description ? "text-red-500" : ""} mr-3`}>Mô tả lớp học *</h6>
                {errors.description && <h6 className="text-red-500 text-sm">{errors.description.message}</h6>}
              </div>
              <input
                type="text"
                placeholder="Mô tả"
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full"
                {...register("description", { required: "Mô tả lớp học là bắt buộc" })}
              />
            </div>
            <div className="flex flex-col w-full mt-5 md:mt-0">
              <div className="flex items-center">
                <h6 className={`${errors.plan ? "text-red-500" : ""} mr-3`}>Kế hoạch *</h6>
                {errors.plan && <h6 className="text-red-500 text-sm">{errors.plan.message}</h6>}
              </div>
              <input
                type="text"
                placeholder="Kế hoạch"
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full"
                {...register("plan", { required: "Kế hoạch là bắt buộc" })}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <CustomButton
            title="Trở lại"
            iconLeft={FaArrowLeft}
            onClick={handleBack}
            color="primary1"
            className="mt-10"
            buttonType="button"
          />
          <CustomButton title="Đăng ký" icon={FaArrowRight} color="primary1" className="mt-10" buttonType="submit" />
        </div>
      </form>
    </div>
  );
};

export default UserInforRegister;
