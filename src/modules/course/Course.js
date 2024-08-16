import React from "react";
import ImgTeacher from "../../assets/image/home-image/teacher.jpg";

const Course = () => {
    return (
        <div className="hover:bg-hover-default cursor-pointer p-8 text-left">
            <h6 className="p-2 border text-center w-[150px] font-semibold mb-4">Toán cấp I</h6>
            <div className="flex flex-col md:flex-row w-full gap-5">
                {/* Hình ảnh giáo viên */}
                <div className="w-full md:w-[200px] h-[300px] md:h-[180px]">
                    <img
                        src={ImgTeacher}
                        alt="Teacher"
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>
                {/* Thông tin khóa học */}
                <div className="w-full md:w-2/3">
                    <h5 className="font-semibold mb-2">Toán cấp I</h5>
                    <div className="space-y-3">
                        <div className="flex justify-start items-start">
                            <h6 className="w-[100px]">Giáo viên</h6>
                            <h6 className="font-semibold">Vũ Thị Miên</h6>
                        </div>
                        <div className="flex justify-start items-start">
                            <h6 className="w-[100px]">Thời gian</h6>
                            <h6 className="font-semibold">3 tháng</h6>
                        </div>
                        <div className="flex justify-start items-start">
                            <h6 className="w-[100px]">Học phí</h6>
                            <h6 className="font-semibold">1.000.000đ</h6>
                        </div>
                        <div className="flex gap-3 justify-start md:flex-row flex-col">
                            <div className="flex items-center w-[150px] bg-[#FFF5E5] p-2 rounded-md">
                                <h6 className="text-[#DA8506]">Chưa thanh toán</h6>
                            </div>
                            <h6 className="flex items-center gap-2">
                                Hạn thanh toán <p className="font-semibold">10/06/2024</p>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
