import React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/Button";

const Password = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitPassWord = () => {
        console.log("log dataa");
    };

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit(onSubmitPassWord)}>
                <h5 className="font-semibold">Cập nhật mật khẩu</h5>
                <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                    <div className="flex flex-col w-full">
                        <h6
                            className={`${
                                errors.Password ? "text-red-500" : ""
                            } flex items-center mb-2`}>
                            Nhập mật khẩu mới
                        </h6>
                        <input
                            {...register("passwordOld")}
                            type="password"
                            placeholder="Nhập mật khẩu cũ"
                            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                        />
                        {errors.Password && (
                            <h6 className="text-red-500 ">{errors.Password.message}</h6>
                        )}
                    </div>
                    <div className="flex flex-col w-full mt-5 md:mt-0">
                        <h6
                            className={`${
                                errors.PasswordNew ? "text-red-500" : ""
                            } flex mb-2 items-center`}>
                            Nhập mật khẩu mới
                        </h6>
                        <input
                            type="password"
                            {...register("passwordNew")}
                            placeholder="Nhập mật khẩu mới"
                            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                        />
                        {errors.PasswordNew && (
                            <h6 className="text-red-500">{errors.PasswordNew.message}</h6>
                        )}
                    </div>
                </div>
                <div className="flex flex-col w-full mt-5 md:mt-0">
                    <h6
                        className={`${
                            errors.PasswordConfirm ? "text-red-500" : ""
                        }flex mb-2 items-center`}>
                        Xác nhận mật khẩu mới
                    </h6>
                    <input
                        type="password"
                        {...register("passwordNew")}
                        placeholder="Xác nhận mật khẩu mới"
                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                    />
                    {errors.PasswordConfirm && (
                        <h6 className="text-red-500">{errors.PasswordConfirm.message}</h6>
                    )}
                </div>
                <CustomButton title="Lưu" buttonType="submit" className="mt-10" />
            </form>
        </div>
    );
};

export default Password;
