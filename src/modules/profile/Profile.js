import React, { useEffect } from "react";
import { RiUser3Line } from "react-icons/ri";
import { PiLockKey } from "react-icons/pi";
import { useNavigate, useSearchParams } from "react-router-dom";
import Banner from "../../components/common/Banner";
import ImgUserInfor from "../../assets/image/Profile/delta-banner.jpg";
import Container from "../../components/common/Container";
import Tab from "../../components/common/Tab";
import UserInfor from "./UserInfor";
import Password from "./Password";
import Calendar from "../calendar/Calendar";
import { FaBook, FaRegCalendarAlt } from "react-icons/fa";
import Course from "../course/Course";

const Profile = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const tabParam = searchParams.get("tab");

    useEffect(() => {
        if (!tabParam) {
            navigate("/ho-so?tab=thong-tin-nguoi-dung");
        }
    }, [tabParam, navigate]);

    const activeTab = tabParam || "thong-tin-nguoi-dung";

    const handleClickTab = (tab) => {
        navigate(`/ho-so?tab=${tab}`);
    };

    return (
        <div>
            <Banner
                className="h-[400px]"
                image={ImgUserInfor}
                title="Xin chào Mộc Miên"
                description="Tài khoản của tôi"
            />
            <Container>
                <div className="w-full py-12">
                    <div className="flex md:flex-row flex-col gap-10">
                        {/* Tab bên trái */}
                        <div className="md:flex flex-col items-start ">
                            <Tab
                                detail="Thông tin cá nhân"
                                Icon={RiUser3Line}
                                isActive={activeTab === "thong-tin-nguoi-dung"}
                                onClick={() => handleClickTab("thong-tin-nguoi-dung")}
                            />
                            <Tab
                                detail="Lịch học"
                                Icon={FaRegCalendarAlt}
                                isActive={activeTab === "lich-hoc"}
                                onClick={() => handleClickTab("lich-hoc")}
                            />
                            <Tab
                                detail="Khóa học đăng kí"
                                Icon={FaBook}
                                isActive={activeTab === "khoa-hoc-dang-ki"}
                                onClick={() => handleClickTab("khoa-hoc-dang-ki")}
                            />
                            <Tab
                                detail="Mật khẩu"
                                Icon={PiLockKey}
                                isActive={activeTab === "mat-khau"}
                                onClick={() => handleClickTab("mat-khau")}
                            />
                        </div>

                        <div className="w-full">
                            {activeTab === "thong-tin-nguoi-dung" && <UserInfor />}
                            {activeTab === "mat-khau" && <Password />}
                            {activeTab === "khoa-hoc-dang-ki" && <Course />}
                            {activeTab === "lich-hoc" && <Calendar />}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Profile;
