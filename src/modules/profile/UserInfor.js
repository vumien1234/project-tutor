import React from "react";
import Avata from "../../assets/image/avata-default.png";
import { FaArrowRight, FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../auth/Login/api";
import { updateUserData } from "../auth/Login/slices";

const UserInfor = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.currentUser);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      address: currentUser.address || "",
      avatar: currentUser.avatar || Avata,
      gender: currentUser.gender || "",
      cccd: currentUser.cccd || "",
      introduction: currentUser.introduction || "",
      job: currentUser.job || "",
      full_name: currentUser.full_name || "",
      phone: currentUser.phone || ""
    }
  });

  const onSubmitUser = async (data) => {
    const res = await dispatch(
      updateUser({
        ...data,
        username: currentUser.username
      })
    );
    if (res.payload) {
      dispatch(updateUserData(data));
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-5 w-full">
        <img src={currentUser.avatar || Avata} alt="Avatar" className="w-[120px] h-[120px] object-cover rounded-md" />
        <div>
          <h3 className="font-semibold">{currentUser.full_name || "Tên người dùng"}</h3>
          <h6>
            <b>ID tài khoản:</b> {currentUser.username}
          </h6>
          <div className="flex items-center justify-start gap-2 cursor-pointer text-gray-500">
            <FaRegEdit /> <h6>Thay ảnh đại diện</h6>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full">
        <h5 className="font-semibold">Thông tin hồ sơ</h5>
        <form onSubmit={handleSubmit(onSubmitUser)}>
          <div className="flex md:flex-row flex-col md:gap-5 mt-5">
            <div className="flex flex-col w-full">
              <h6 className="mb-2">Họ và tên</h6>
              <input
                type="text"
                {...register("full_name")}
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
              />
            </div>
            <div className="flex flex-col w-full mt-5 md:mt-0">
              <h6 className="mb-2">Email (Không thể thay đổi)</h6>
              <input
                type="text"
                value={currentUser.email}
                readOnly
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px] bg-gray-100"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
            <div className="flex flex-col w-full">
              <h6 className="mb-2">Nghề nghiệp</h6>
              <input
                type="text"
                {...register("job")}
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
              />
            </div>
            <div className="flex flex-col w-full">
              <h6 className="mb-2">Vai trò (Không thể thay đổi)</h6>
              <input
                type="text"
                value={currentUser.role}
                readOnly
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px] bg-gray-100"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
            <div className="flex flex-col w-full">
              <h6 className="mb-2">CMND/CCCD</h6>
              <input
                type="text"
                {...register("cccd")}
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
              />
            </div>
            <div className="flex flex-col w-full mt-5 md:mt-0">
              <h6 className="mb-2">Số điện thoại</h6>
              <input
                type="text"
                {...register("phone")}
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
            <div className="flex flex-col w-full">
              <h6 className="mb-2">Giới tính</h6>
              <select
                {...register("gender")}
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
              >
                <option value="">Chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
            <div className="flex flex-col w-full mt-5 md:mt-0">
              <h6 className="mb-2">Địa chỉ</h6>
              <input
                type="text"
                {...register("address")}
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
            <div className="flex flex-col w-full mt-5 md:mt-0">
              <h6 className="mb-2">Giới thiệu</h6>
              <textarea
                {...register("introduction")}
                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px] min-h-[100px]"
              />
            </div>
          </div>

          <CustomButton title="Lưu thay đổi" buttonType="submit" icon={FaArrowRight} className="mt-10" />
        </form>
      </div>
    </>
  );
};

export default UserInfor;
