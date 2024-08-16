import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowRight, FaEye } from "react-icons/fa";
import CustomButton from "../../components/common/Button";
import UserDefault from "./UserDefault";

const UserInforRegister = ({ setStep }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setUploadedImage(URL.createObjectURL(file));
        }
    };

    const handleRegister = () => {
        setStep(2);
    };
    return (
        <>
            <div className="py-12 w-full">
                <h5>Hồ sơ đăng kí</h5>
                <h6 className="font-semibold py-5">Thông tin người dùng</h6>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <UserDefault />
                    <div className="flex md:flex-row flex-col md:gap-5 md:mt-5">
                        <div className="flex flex-col w-full">
                            <h6
                                className={`${
                                    errors.Password ? "text-red-500" : ""
                                } flex items-center mb-2`}>
                                Mã học sinh
                            </h6>
                            <input
                                {...register("username")}
                                type="text"
                                placeholder="Mã học sinh"
                                className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                            />
                            {errors.Password && (
                                <h6 className="text-red-500 ">{errors.Password.message}</h6>
                            )}
                        </div>
                    </div>
                    <div className="mt-5">
                        <h6 className="font-semibold py-5">Ảnh chân dung</h6>
                        <div className="flex flex-col w-full mb-3">
                            <p className={`${errors.photo ? "text-red-500" : ""}`}>
                                Ảnh chân dung *
                            </p>
                            {errors.photo && (
                                <p className="text-red-500 text-sm">{errors.photo.message}</p>
                            )}
                        </div>
                        <input
                            accept=".png, .jpg, .jpeg"
                            type="file"
                            placeholder="Mặt trước thẻ sinh viên trường Phenikaa"
                            {...register("photo", {
                                required: "Vui lòng nhập mặt trước thẻ sinh viên trường Phenikaa",
                            })}
                            onChange={handleFileUpload}
                            className={`${
                                errors.photo ? "border-red-500" : ""
                            } py-3 px-5 border border-gray-300 rounded-md w-full sm:w-auto`}
                        />
                    </div>
                    {uploadedImage && (
                        <div className="relative mt-4 w-full max-w-[400px] h-[300px]">
                            <img
                                src={uploadedImage}
                                alt="Uploaded"
                                className="object-cover w-full h-full rounded-lg shadow-md"
                                style={{ filter: "brightness(90%)", objectFit: "cover" }}
                            />
                            <div
                                id="modal-container"
                                className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="flex space-x-3">
                                    <FaRegTrashCan className="w-[25px] h-[25px] cursor-pointer" />
                                    <FaEye className="w-[25px] h-[25px] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    )}
                    <CustomButton
                        title="Đăng kí"
                        icon={FaArrowRight}
                        color="primary1"
                        className="mt-10"
                        buttonType="submit"
                    />
                </form>
            </div>
        </>
    );
};

export default UserInforRegister;
