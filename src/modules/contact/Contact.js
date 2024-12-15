import React from "react";
import ImgContact from "../../assets/image/lien-he.png";
import Container from "../../components/common/Container";
import Logo from "../../assets/image/logo-web.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/Button";
import Banner from "../../components/common/Banner";
import { BASE_URL } from "../../utils/sendRequest";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onsubmitContact = async (data) => {
        // send to /contacts
        const response = await fetch(`${BASE_URL}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Gửi yêu cầu thành công");
        } else {
            alert("Có lỗi xảy ra, vui lòng thử lại sau");
        }

        // reset form
        reset();
    };

    return (
        <div className="relative">
            <Banner
                className="h-[400px]"
                image={ImgContact}
                title="Đăng ký tư vấn &"
                description="Thông tin liên hệ"
            />
            <Container>
                <div className="py-12 w-full">
                    <div className="flex flex-col md:flex-row justify-center w-full">
                        <div className="w-full">
                            <div className="flex items-center gap-5">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="object-cover w-[60px] h-[60px]"
                                />
                                <h3>Trung tâm gia sư TutorMaster</h3>
                            </div>
                            <div className="py-5">
                                <div className="flex items-center gap-3 mb-5">
                                    <IoLocationSharp className="w-5 h-5 text-[#333]" />
                                    <h6>
                                        Toà A10 Trường Đại học Phenikaa, Yên Nghĩa, Hà Đông, Hà Nội.
                                    </h6>
                                </div>
                                <div className="flex items-center gap-3 mb-5">
                                    <MdPhoneInTalk className="w-5 h-5 text-[#333]" />
                                    <h6>(+84) 123 456 789</h6>
                                </div>
                                <div className="flex items-center gap-3 mb-5">
                                    <IoMdMail className="w-5 h-5 text-[#333]" />
                                    <h6>tutormaster@gmail.com</h6>
                                </div>
                            </div>
                            <div className="flex md:justify-start justify-start items-center gap-5">
                                <Link href="https://www.facebook.com/" target="_blank">
                                    <div className="w-[40px] h-[40px] rounded-full bg-color-default flex items-center justify-center text-white">
                                        <FaFacebookF />
                                    </div>
                                </Link>
                                <Link href="/">
                                    <div className="w-[40px] h-[40px] rounded-full bg-color-default flex items-center justify-center text-white">
                                        <ImLinkedin2 />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2215.3445306288277!2d105.74850312713554!3d20.962530488435032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452efff394ce3%3A0x391a39d4325be464!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBQaGVuaWthYQ!5e0!3m2!1svi!2s!4v1722911677746!5m2!1svi!2s"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps Location"></iframe>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onsubmitContact)} className="py-12">
                        <div className="bg-[#EEF4FE] p-10 flex flex-col justify-center items-center">
                            <h3 className="font-semibold text-orange-400">LIÊN HỆ VỚI CHÚNG TÔI !</h3>
                            <h5>Gửi yêu cầu hỗ trợ</h5>
                            <h6 className="py-5">
                                Chúng tôi sẽ phản hồi bạn nhanh chóng và chuyên nghiệp để đảm bảo bạn có trải nghiệm học tập tốt nhất.
                            </h6>

                            {/* Form Fields */}
                            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full md:px-20 mb-5">
                                <div className="flex flex-col w-full">
                                    <div className="flex mb-3 items-center">
                                        <p className={`${errors.name ? "text-red-500" : ""} mr-3 label-input`}>
                                            Họ tên *
                                        </p>
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Họ tên"
                                        {...register("name", { required: "Họ tên là bắt buộc" })}
                                        className={`${errors.name ? "border-red-500" : ""} py-3 px-5 rounded-sm border-[1.5px] border-solid`}
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="flex mb-3 items-center">
                                        <p className={`${errors.email ? "text-red-500" : ""} mr-3 label-input`}>
                                            Email *
                                        </p>
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: "Email là bắt buộc",
                                            pattern: {
                                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                                message: "Định dạng email không hợp lệ"
                                            }
                                        })}
                                        className={`${errors.email ? "border-red-500" : ""} py-3 px-5 rounded-sm border-[1.5px] border-solid`}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full md:px-20 mb-5">
                                <div className="flex flex-col w-full">
                                    <div className="flex mb-3 items-center">
                                        <p className={`${errors.message ? "text-red-500" : ""} mr-3 label-input`}>
                                            Lời nhắn *
                                        </p>
                                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                                    </div>
                                    <textarea
                                        placeholder="Để lại lời nhắn cho chúng tôi"
                                        {...register("message", { required: "Lời nhắn là bắt buộc" })}
                                        className={`${errors.message ? "border-red-500" : ""} py-3 px-5 rounded-sm border-[1.5px] h-[200px] border-solid`}
                                    />
                                </div>
                            </div>

                            <CustomButton
                                title="Gửi yêu cầu"
                                icon={FaArrowRight}
                                buttonType="submit"
                                className="mt-5"
                            />
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
