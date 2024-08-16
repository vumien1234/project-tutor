import React from "react";
import Avata from "../../assets/image/avata-default.png";
import { FaArrowRight, FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/Button";

const UserInfor = () => {
    const { register, handleSubmit } = useForm();

    const onSubmitUser = () => {
        console.log("log dataa");
    };

    return (
        <>
            <div className="flex md:flex-row flex-col items-center gap-5 w-full">
                <img
                    src={Avata}
                    alt="Avata"
                    className="w-[120px] h-[120px] object-cover rounded-md"
                />
                <div>
                    <h3 className="font-semibold">Vũ Thị Miên</h3>
                    <h6>ID tài khoản : 20010912</h6>
                    <div className="flex items-center justify-start gap-2 cursor-pointer text-gray-500">
                        <FaRegEdit /> <h6>Thay ảnh đại diện</h6>
                    </div>
                </div>
            </div>
            <div className="mt-4 w-full">
                <h5 className="font-semibold">Thông tin hồ sơ</h5>
                <form onSubmit={handleSubmit(onSubmitUser)}>
                    <div className="flex md:flex-row flex-col md:gap-5 mt-5 ">
                        <div className="flex flex-col w-full ">
                            <h6 className="flex mb-2 items-center">Họ và tên</h6>
                            <input
                                type="text"
                                {...register("name")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="Vũ Thị Miên"
                            />
                        </div>
                        <div className="flex flex-col w-full mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center">Email</h6>
                            <input
                                type="text"
                                {...register("name1")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="vuthimin@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
                        <div className="flex flex-col w-full mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center">CMND/CCCD</h6>
                            <input
                                type="number"
                                {...register("name2")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="00918848949"
                            />
                        </div>
                        <div className="flex flex-col w-full mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center">Số điện thoại</h6>
                            <input
                                type="number"
                                {...register("name3")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="0928885945"
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
                        <div className="flex flex-col w-full mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center">Mã học sinh</h6>
                            <input
                                type="text"
                                {...register("name4")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="PU1234"
                            />
                        </div>
                        <div className="flex flex-col w-full  mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center">Ngày sinh</h6>
                            <input
                                type="date"
                                {...register("name5")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="20/04/2002"
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
                        <div className="flex flex-col w-full mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center ">Giới tính</h6>
                            <input
                                type="text"
                                {...register("name6")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="Nữ"
                            />
                        </div>
                        <div className="flex flex-col w-full mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center">Địa chỉ liên hệ</h6>
                            <input
                                type="text"
                                {...register("name7")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="Yên nghĩa hà đông hà nội"
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
                        <div className="flex flex-col w-full  mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center">Nghề nghiệp</h6>
                            <input
                                type="text"
                                {...register("name8")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="Học sinh"
                            />
                        </div>
                        <div className="flex flex-col w-full mt-5 md:mt-0">
                            <h6 className="flex mb-2 items-center">Quốc tịch</h6>
                            <input
                                type="text"
                                {...register("name9")}
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                value="Việt Nam"
                            />
                        </div>
                    </div>
                    <CustomButton
                        title="Lưu thay đổi"
                        buttonType="submit"
                        icon={FaArrowRight}
                        className="mt-10"
                    />
                </form>
            </div>
        </>
    );
};

export default UserInfor;
