import React, { useState } from "react";
import Avata from "../../assets/image/avata-default.png";
import { FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../auth/Login/api";
import { updateUserData } from "../auth/Login/slices";
import { uploadImage } from "../../utils/sendRequest";
import { getIMG } from "../../utils/currencyFormatter";
import { Select } from "antd"; // Import Select from Ant Design
import { LIST_OF_SUBJECTS } from "../../constants/MainConstants";
const { Option } = Select;

const UserInfor = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [avatarPreview, setAvatarPreview] = useState(getIMG(currentUser.avatar) || Avata);
  const [previewImg, setPreviewImg] = useState(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      address: currentUser.address || "",
      avatar: getIMG(currentUser.avatar) || null,
      gender: currentUser.gender || "",
      cccd: currentUser.cccd || "",
      introduction: currentUser.introduction || "",
      job: currentUser.job || "",
      full_name: currentUser.full_name || "",
      phone: currentUser.phone || "",
      subjects: currentUser?.subjects?.split(",") || [],
    }
  });

  // Hàm chuyển ảnh thành base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  // Hàm xử lý khi chọn ảnh
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // save file to setPreviewImg
      setPreviewImg(file);
      const base64String = await convertToBase64(file);
      setAvatarPreview(base64String); // Hiển thị ảnh xem trước
      setValue("avatar", base64String); // Cập nhật avatar trong form
    }
  };

  const onSubmitUser = async (data) => {
    // update file
    let avatar = data.avatar;
    if (previewImg !== null) {
      const res = await uploadImage(previewImg);
      if (res) {
        avatar = res;
      }
    }
    const res = await dispatch(
      updateUser({
        ...data,
        username: currentUser.username,
        subjects: data.subjects.join(","),
        avatar: avatar
      })
    );
    if (res.payload) {
      dispatch(updateUserData({ ...data, avatar: avatar, subjects: data.subjects.join(",") }));
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-5 w-full">
        <img src={avatarPreview} alt="Avatar" className="w-[120px] h-[120px] object-cover border-4 border-[#66b6f3] rounded-full" />
        <div>
          <h3 className="font-semibold">{currentUser.full_name || "Tên người dùng"}</h3>
          <h6><b>ID tài khoản:</b> {currentUser.username}</h6>
          <div className="flex items-center justify-start gap-3 cursor-pointer text-gray-500">
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="avatarInput" />
            <label
              htmlFor="avatarInput"
              className="cursor-pointer bg-blue-500 mt-2 text-white p-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg"
            >
              <div className="flex items-center justify-center">
                <FaRegEdit />
                <h6 className="ml-2 font-semibold">Thay đổi Avata</h6>
              </div>
            </label>
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

          {currentUser.role === "tutor" && (
            <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
              <div className="flex flex-col w-full mt-5 md:mt-0">
                <h6 className="mb-2">Chuyên môn của bạn</h6>
                <Select
                  mode="multiple"
                  placeholder="Chọn các môn học"
                  {...register("subjects")}
                  className="w-full md:min-w-[300px]"
                  defaultValue={currentUser?.subjects?.split(",") || []}
                  onChange={(value) => setValue("subjects", value)}
                >
                  {LIST_OF_SUBJECTS.map((subject, index) => (
                    <Option key={index} value={subject}>
                      {subject}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          )}

          <div className="flex flex-col items-start mt-5">
            <CustomButton type="submit" className="py-3 px-8 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-300">
              Cập nhật thông tin
            </CustomButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInfor;
