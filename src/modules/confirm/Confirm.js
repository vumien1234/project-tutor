import React from "react";
import CustomButton from "../../components/common/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoQrCodeOutline } from "react-icons/io5";

export default function Confirm() {

    return (
        <div className="flex flex-col gap-12 ">
            <div className="flex flex-col md:flex-row justify-between gap-[50px] md:gap-0">
                <div className="flex flex-col w-full md:pr-10">
                    <div className="border-b mb-2 flex pb-2">
                        <p className="w-[200px] font-bold">Họ tên:</p>
                        <span>Vũ Thị Miên</span>
                    </div>
                    <div className="border-b mb-2 flex pb-2">
                        <p className="w-[200px] font-bold">Email:</p>
                        <span>vuthimien@gmail.com</span>
                    </div>
                    <div className="border-b mb-2 flex pb-2">
                        <p className="w-[200px] font-bold">Số điện thoại:</p>
                        <span>04976879333</span>
                    </div>
                    <div className="border-b mb-2 flex pb-2">
                        <p className="w-[200px] font-bold">Số CCCD/CMND:</p>
                        <span>PUN3945</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div>Quét QR để thanh toán</div>
                    <IoQrCodeOutline  className="w-[100px] h-[100px]"/>
                </div>
            </div>
            <h6 className="text-center font-normal text-red-600">
                Sau khi thanh toán, nhấn
                <span className="font-bold text-base"> “Kiểm tra đơn hàng”</span> để xem trạng thái
                đơn đăng ký và xác nhận đăng ký thành công! để xem trạng thái đơn đăng ký và xác
                nhận đăng ký thành công!
            </h6>
            <div className="flex flex-col justify-center md:flex-row items-center gap-5">
                <Link to="/ho-so?tab=khoa-hoc-dang-ki">
                    <CustomButton title="Kiểm tra đơn hàng" icon={FaArrowRight} color="primary1"/>
                </Link>
                <Link to="/danh-sach-lop">
                    <CustomButton title="Đăng ký lớp học mới" type="outline1" />
                </Link>
            </div>
        </div>
    );
}
