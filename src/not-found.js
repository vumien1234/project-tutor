import { FaArrowRight } from "react-icons/fa6";
import CustomButton from "./components/common/Button";
import ImgNotfound from './404.svg';

export default function NotFound() {
    const goHome = () => {
        window.location.href = '/';
    }
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="text-center flex flex-col items-center">
                <img src={ImgNotfound} alt="404 Not Found" className="mb-8" />
                <h6 className="text-lg text-gray-600 mb-8">
                    Ôi không! Trang bạn đang tìm kiếm không tồn tại.
                </h6>
                <CustomButton onClick={goHome} title='Trở về Trang chủ' icon={FaArrowRight} />
            </div>
        </div>
    );
}
