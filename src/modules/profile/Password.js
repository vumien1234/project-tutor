import React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../auth/Login/api";

const Password = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    reset
  } = useForm();

  // Lấy giá trị mật khẩu mới và xác nhận mật khẩu mới
  const passwordNew = watch("passwordNew");
  const passwordConfirm = watch("passwordConfirm");

  const onSubmitPassWord = async (data) => {
    if (passwordNew !== passwordConfirm) {
      setError("passwordConfirm", {
        type: "manual",
        message: "Mật khẩu xác nhận không khớp"
      });
    } else {
      const res = await dispatch(
        updateUser({
          password: data.passwordNew,
          username: currentUser.username
        })
      );

      // Nếu cập nhật thành công, reset form
      if (res.payload) {
        reset(); // Reset tất cả các trường của form về trạng thái ban đầu
      }
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmitPassWord)}>
        <h5 className="font-semibold">Cập nhật mật khẩu</h5>

        {/* Nhập mật khẩu mới */}
        <div className="flex flex-col w-full mt-5">
          <h6 className={`${errors.passwordNew ? "text-red-500" : ""} mb-2`}>Nhập mật khẩu mới</h6>
          <input
            type="password"
            {...register("passwordNew", {
              required: "Vui lòng nhập mật khẩu mới",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự"
              }
            })}
            placeholder="Nhập mật khẩu mới"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
          />
          {errors.passwordNew && <h6 className="text-red-500">{errors.passwordNew.message}</h6>}
        </div>

        {/* Xác nhận mật khẩu mới */}
        <div className="flex flex-col w-full mt-5">
          <h6 className={`${errors.passwordConfirm ? "text-red-500" : ""} mb-2`}>Xác nhận mật khẩu mới</h6>
          <input
            type="password"
            {...register("passwordConfirm", {
              required: "Vui lòng xác nhận mật khẩu mới"
            })}
            placeholder="Xác nhận mật khẩu mới"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
          />
          {errors.passwordConfirm && <h6 className="text-red-500">{errors.passwordConfirm.message}</h6>}
        </div>

        {/* Nút lưu */}
        <CustomButton title="Lưu" buttonType="submit" className="mt-10" />
      </form>
    </div>
  );
};

export default Password;
