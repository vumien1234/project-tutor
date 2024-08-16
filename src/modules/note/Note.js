import React, { useState } from "react";
import Container from "../../components/common/Container";
import Banner from "../../components/common/Banner";
import ImgCreateNote from "../../assets/image/anh-bia.png";
import UserDefault from "../registerClass/UserDefault";
import { useForm } from "react-hook-form";
import SingleSelect from "../../components/common/Select";
import CustomButton from "../../components/common/Button";

// Dữ liệu giả cho phần select
const fakeData = [
    { id: 1, name: "Toán học" },
    { id: 2, name: "Vật lý" },
    { id: 3, name: "Hoá học" },
    { id: 4, name: "Sinh học" },
];

const Note = () => {
    const {
        // register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [selectedSubject, setSelectedSubject] = useState(null);

    const handleCreateClass = () => {
        console.log("Lớp học đã được tạo với môn:", selectedSubject?.name);
    };

    return (
        <div>
            <Banner
                className="h-[400px]"
                image={ImgCreateNote}
                title="Xin chào Mộc Miên"
                description="Tạo note nhận lớp"
            />
            <div className="bg-[#EFF3FF] py-20">
                <Container>
                    <div className="w-full bg-white p-16">
                        <h3 className="text-[#16a085] ">Tạo Note nhận lớp</h3>
                        <form onSubmit={handleSubmit(handleCreateClass)}>
                            <h6 className="font-semibold mt-5">1. Thông tin cá nhân</h6>
                            <UserDefault />
                            <h6 className="font-semibold py-6">2. Môn học yêu cầu</h6>
                            <div className="flex md:flex-row flex-col md:gap-5  space-y-5 md:space-y-0">
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
                            </div>
                            <h6 className="font-semibold py-6">3. Thời gian học</h6>
                            <div className="flex md:flex-row flex-col md:gap-5  space-y-5 md:space-y-0">
                                <SingleSelect
                                    label="Chọn khoảng thời gian *"
                                    options={fakeData}
                                    placeholder="Chọn khoảng thời gian"
                                    error={errors.subject?.message}
                                    value={selectedSubject}
                                    setValue={setSelectedSubject}
                                    setErrors={() => {}}
                                />
                                <SingleSelect
                                    label="Chọn yêu cầu gia sư *"
                                    options={fakeData}
                                    placeholder="Chọn yêu cầu gia sư"
                                    error={errors.subject?.message}
                                    value={selectedSubject}
                                    setValue={setSelectedSubject}
                                    setErrors={() => {}}
                                />
                            </div>
                            <h6 className="font-semibold py-6">4. Yêu cầu khác (nếu có)</h6>
                            <textarea
                                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Mời nhập"
                            />

                            <CustomButton
                                buttonType="submit"
                                title="Tạo note nhận lớp"
                                className="my-10"
                            />
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Note;
