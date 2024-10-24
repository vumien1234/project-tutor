import React from "react";
import Container from "../../components/common/Container";
import Dangki from "../../assets/image/cach-thuc-nhan-lop/dang-ki.png";
import Dangnhap from "../../assets/image/cach-thuc-nhan-lop/dang-nhap.png";

const ReceiveClass = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 170;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      console.log("sectionTop", sectionTop);

      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[#3a83bb]">Cách thức nhận lớp</h3>
        <div className="border w-[100px] border-blue-300 mb-5"></div>
        <h6 className="text-center w-[700px] text-gray-400 italic">
          Bạn đang thắc mắc về cách thức tìm gia sư cho con em mình? Bạn đang băn khoăn về chất lượng dạy của gia sư?
          Bạn là gia sư và đang thắc mắc về quy trình đăng ký nhận dạy?
        </h6>
      </div>

      <Container>
        <div className="flex flex-row gap-5 w-full mt-10">
          {/* Sidebar với danh mục */}
          <div className="flex flex-col w-[30%]">
            <div className="w-full border border-gray-200 bg-gray-50 rounded-lg p-4">
              <h5>Danh mục</h5>
              <div>
                <h6 className="cursor-pointer font-semibold" onClick={() => handleScrollToSection("processTutors")}>
                  1. Quy trình tìm gia sư
                </h6>
                <div className="ml-4">
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("step1")}>
                    Bước 1
                  </h6>
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("step2")}>
                    Bước 2
                  </h6>
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("step3")}>
                    Bước 3
                  </h6>
                </div>
              </div>
              <div>
                <h6 className="cursor-pointer font-semibold" onClick={() => handleScrollToSection("processClasses")}>
                  2. Quy trình đăng kí lớp
                </h6>
                <div className="ml-4">
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("registerStep1")}>
                    Bước 1
                  </h6>
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("registerStep2")}>
                    Bước 2
                  </h6>
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("registerStep3")}>
                    Bước 3
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Nội dung hiển thị */}
          <div className="flex flex-col w-[70%]">
            <div className="w-full">
              <div id="section1">
                <h6 id="processTutors" className="font-semibold">
                  1. Quy trình tìm gia sư
                </h6>

                <div id="step1" className="mt-4">
                  <h6 className="font-semibold">Bước 1: Đăng ký tài khoản</h6>
                  <p>
                    Trước tiên, phụ huynh hoặc học sinh cần đăng ký tài khoản trên hệ thống. Quá trình này bao gồm việc
                    nhập thông tin cá nhân, xác thực email và tạo mật khẩu bảo mật. Sau khi hoàn tất, người dùng có thể
                    truy cập vào hệ thống để tìm gia sư. Việc đăng ký tài khoản là bước quan trọng, vì nó đảm bảo rằng
                    người dùng có thể truy cập vào các dịch vụ mà hệ thống cung cấp. Hệ thống cũng sẽ gửi một email xác
                    thực để đảm bảo tính bảo mật cho tài khoản của bạn.
                  </p>
                  <br />
                  <img src={Dangki} alt="Dangki" />
                  <h6 className="font-semibold">Bước 2: Đăng nhập tài khoản</h6>
                  <p>
                    Sau khi đã hoàn tất việc đăng ký tài khoản, người dùng cần đăng nhập vào hệ thống để có thể sử dụng
                    các dịch vụ. Để đăng nhập, vui lòng nhập địa chỉ email và mật khẩu đã đăng ký.
                    <br />
                    <br />
                    Nếu bạn quên mật khẩu, hãy nhấp vào liên kết "Quên mật khẩu?" để nhận hướng dẫn đặt lại mật khẩu qua
                    email. Việc bảo vệ thông tin tài khoản là rất quan trọng, vì vậy hãy đảm bảo rằng bạn sử dụng mật
                    khẩu mạnh và không chia sẻ thông tin đăng nhập với người khác.
                  </p>
                  <img src={Dangnhap} alt="Đăng nhập" />
                </div>

                <div id="step2" className="mt-4">
                  <h6 className="font-semibold">Bước 2: Tìm kiếm gia sư phù hợp</h6>
                  <p>
                    Sau khi đăng nhập, phụ huynh hoặc học sinh có thể tìm kiếm gia sư phù hợp bằng cách sử dụng các bộ
                    lọc như môn học, trình độ, và địa điểm. Hệ thống sẽ hiển thị danh sách các gia sư phù hợp với yêu
                    cầu của người dùng. Bạn có thể xem hồ sơ, kinh nghiệm dạy học và đánh giá từ các phụ huynh khác.
                    Ngoài ra, bạn cũng có thể lọc theo các tiêu chí như giá cả và thời gian có thể dạy để tìm được gia
                    sư ưng ý nhất cho nhu cầu học tập của con em mình.
                  </p>
                  <br />
                  <p>
                    Sau khi đăng nhập, phụ huynh hoặc học sinh có thể tìm kiếm gia sư phù hợp bằng cách sử dụng các bộ
                    lọc như môn học, trình độ, và địa điểm. Hệ thống sẽ hiển thị danh sách các gia sư phù hợp với yêu
                    cầu của người dùng. Bạn có thể xem hồ sơ, kinh nghiệm dạy học và đánh giá từ các phụ huynh khác.
                    Ngoài ra, bạn cũng có thể lọc theo các tiêu chí như giá cả và thời gian có thể dạy để tìm được gia
                    sư ưng ý nhất cho nhu cầu học tập của con em mình.
                  </p>
                  <br />
                  <p>
                    Sau khi đăng nhập, phụ huynh hoặc học sinh có thể tìm kiếm gia sư phù hợp bằng cách sử dụng các bộ
                    lọc như môn học, trình độ, và địa điểm. Hệ thống sẽ hiển thị danh sách các gia sư phù hợp với yêu
                    cầu của người dùng. Bạn có thể xem hồ sơ, kinh nghiệm dạy học và đánh giá từ các phụ huynh khác.
                    Ngoài ra, bạn cũng có thể lọc theo các tiêu chí như giá cả và thời gian có thể dạy để tìm được gia
                    sư ưng ý nhất cho nhu cầu học tập của con em mình.
                  </p>{" "}
                  <p>
                    Sau khi đăng nhập, phụ huynh hoặc học sinh có thể tìm kiếm gia sư phù hợp bằng cách sử dụng các bộ
                    lọc như môn học, trình độ, và địa điểm. Hệ thống sẽ hiển thị danh sách các gia sư phù hợp với yêu
                    cầu của người dùng. Bạn có thể xem hồ sơ, kinh nghiệm dạy học và đánh giá từ các phụ huynh khác.
                    Ngoài ra, bạn cũng có thể lọc theo các tiêu chí như giá cả và thời gian có thể dạy để tìm được gia
                    sư ưng ý nhất cho nhu cầu học tập của con em mình.
                  </p>
                </div>

                <div id="step3" className="mt-4">
                  <h6 className="font-semibold">Bước 3: Liên hệ và thảo luận</h6>
                  <p>
                    Khi đã chọn được gia sư phù hợp, phụ huynh hoặc học sinh có thể liên hệ trực tiếp với gia sư qua hệ
                    thống để thảo luận về lịch trình, mức học phí và phương pháp dạy. Điều này giúp cả hai bên hiểu rõ
                    hơn về nhu cầu và mong muốn của nhau. Việc thảo luận trực tiếp sẽ giúp bạn làm rõ các chi tiết về
                    phương pháp dạy và khả năng tiếp thu của học sinh, từ đó đưa ra quyết định cuối cùng.
                  </p>
                  <br />
                  <p>
                    Khi đã chọn được gia sư phù hợp, phụ huynh hoặc học sinh có thể liên hệ trực tiếp với gia sư qua hệ
                    thống để thảo luận về lịch trình, mức học phí và phương pháp dạy. Điều này giúp cả hai bên hiểu rõ
                    hơn về nhu cầu và mong muốn của nhau. Việc thảo luận trực tiếp sẽ giúp bạn làm rõ các chi tiết về
                    phương pháp dạy và khả năng tiếp thu của học sinh, từ đó đưa ra quyết định cuối cùng.
                  </p>
                  <br />
                  <p>
                    Khi đã chọn được gia sư phù hợp, phụ huynh hoặc học sinh có thể liên hệ trực tiếp với gia sư qua hệ
                    thống để thảo luận về lịch trình, mức học phí và phương pháp dạy. Điều này giúp cả hai bên hiểu rõ
                    hơn về nhu cầu và mong muốn của nhau. Việc thảo luận trực tiếp sẽ giúp bạn làm rõ các chi tiết về
                    phương pháp dạy và khả năng tiếp thu của học sinh, từ đó đưa ra quyết định cuối cùng.
                  </p>
                </div>
              </div>

              <div id="section2" className="mt-10">
                <h6 id="processClasses" className="font-semibold">
                  2. Quy trình đăng kí lớp
                </h6>

                <div id="registerStep1" className="mt-4">
                  <h6 className="font-semibold">Bước 1: Xác định nhu cầu học</h6>
                  <p>
                    Phụ huynh hoặc học sinh cần xác định rõ nhu cầu học tập, môn học cần học và thời gian phù hợp. Điều
                    này giúp tìm kiếm gia sư dễ dàng hơn và phù hợp với lịch trình của học sinh. Việc xác định nhu cầu
                    học tập một cách cụ thể sẽ giúp cho quá trình tìm kiếm gia sư trở nên hiệu quả hơn, vì bạn có thể
                    đưa ra các tiêu chí rõ ràng cho gia sư.
                  </p>
                </div>

                <div id="registerStep2" className="mt-4">
                  <h6 className="font-semibold">Bước 2: Đăng kí lớp học</h6>
                  <p>
                    Sau khi đã xác định nhu cầu, người dùng có thể tiến hành đăng ký lớp học trên hệ thống. Cần điền
                    thông tin chi tiết như môn học, thời gian và hình thức học (trực tiếp hoặc trực tuyến). Việc điền
                    thông tin chi tiết sẽ giúp hệ thống gợi ý các gia sư phù hợp với yêu cầu của bạn, từ đó tiết kiệm
                    thời gian trong việc tìm kiếm.
                  </p>
                  <br />
                  <p>
                    Sau khi đã xác định nhu cầu, người dùng có thể tiến hành đăng ký lớp học trên hệ thống. Cần điền
                    thông tin chi tiết như môn học, thời gian và hình thức học (trực tiếp hoặc trực tuyến). Việc điền
                    thông tin chi tiết sẽ giúp hệ thống gợi ý các gia sư phù hợp với yêu cầu của bạn, từ đó tiết kiệm
                    thời gian trong việc tìm kiếm.
                  </p>
                  <br />
                  <p>
                    Sau khi đã xác định nhu cầu, người dùng có thể tiến hành đăng ký lớp học trên hệ thống. Cần điền
                    thông tin chi tiết như môn học, thời gian và hình thức học (trực tiếp hoặc trực tuyến). Việc điền
                    thông tin chi tiết sẽ giúp hệ thống gợi ý các gia sư phù hợp với yêu cầu của bạn, từ đó tiết kiệm
                    thời gian trong việc tìm kiếm.
                  </p>
                </div>

                <div id="registerStep3" className="mt-4">
                  <h6 className="font-semibold">Bước 3: Xác nhận và thanh toán</h6>
                  <p>
                    Cuối cùng, người dùng cần xác nhận lại thông tin lớp học và thực hiện thanh toán để hoàn tất quá
                    trình đăng ký. Sau khi thanh toán thành công, người dùng sẽ nhận được thông tin xác nhận và liên hệ
                    với gia sư để thống nhất lịch học. Việc xác nhận thông tin trước khi thanh toán là cần thiết để
                    tránh các nhầm lẫn không đáng có.
                  </p>
                  <br />
                  <p>
                    Cuối cùng, người dùng cần xác nhận lại thông tin lớp học và thực hiện thanh toán để hoàn tất quá
                    trình đăng ký. Sau khi thanh toán thành công, người dùng sẽ nhận được thông tin xác nhận và liên hệ
                    với gia sư để thống nhất lịch học. Việc xác nhận thông tin trước khi thanh toán là cần thiết để
                    tránh các nhầm lẫn không đáng có.
                  </p>
                  <br />
                  <p>
                    Cuối cùng, người dùng cần xác nhận lại thông tin lớp học và thực hiện thanh toán để hoàn tất quá
                    trình đăng ký. Sau khi thanh toán thành công, người dùng sẽ nhận được thông tin xác nhận và liên hệ
                    với gia sư để thống nhất lịch học. Việc xác nhận thông tin trước khi thanh toán là cần thiết để
                    tránh các nhầm lẫn không đáng có.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReceiveClass;
