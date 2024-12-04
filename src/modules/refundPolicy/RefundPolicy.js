import React from "react";
import Container from "../../components/common/Container";
import RefundImage from "../../assets/image/refund-policy.webp"; // Example image for refund policy

const RefundPolicy = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 170;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[#3a83bb]">Chính Sách Hoàn Phí</h3>
        <div className="border w-[100px] border-blue-300 mb-5"></div>
        <h6 className="text-center w-[700px] text-gray-400 italic">
          Chúng tôi cam kết mang lại trải nghiệm mua sắm tuyệt vời. Dưới đây là chính sách hoàn phí của chúng tôi. Nếu bạn có bất kỳ câu hỏi nào, vui lòng tham khảo các điều khoản dưới đây.
        </h6>
      </div>

      <Container>
        <div className="flex flex-row gap-5 w-full mt-10">
          {/* Sidebar with Categories */}
          <div className="flex flex-col w-[30%]">
            <div className="w-full border border-gray-200 bg-gray-50 rounded-lg p-4">
              <h5>Danh mục</h5>
              <div>
                <h6 className="cursor-pointer font-semibold" onClick={() => handleScrollToSection("refundOverview")}>
                  1. Tổng quan chính sách hoàn phí
                </h6>
                <div className="ml-4">
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("eligibility")}>
                    1.1 Điều kiện hoàn phí
                  </h6>
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("process")}>
                    1.2 Quy trình hoàn phí
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col w-[70%]">
            <div className="w-full">
              {/* Refund Overview */}
              <div id="section1">
                <h6 id="refundOverview" className="font-semibold text-xl">
                  1. Tổng quan chính sách hoàn phí
                </h6>
                <p>
                  Chính sách hoàn phí của chúng tôi được thiết kế để bảo vệ quyền lợi của khách hàng. Nếu bạn không hài lòng với sản phẩm hoặc dịch vụ của chúng tôi, bạn có thể yêu cầu hoàn phí trong vòng 30 ngày kể từ ngày mua. Vui lòng tham khảo các điều kiện và quy trình hoàn phí dưới đây.
                </p>
                <br />
                <img src={RefundImage} alt="Refund Policy" className="w-full rounded-lg shadow-lg" />
              </div>

              {/* Eligibility */}
              <div id="section2" className="mt-10">
                <h6 id="eligibility" className="font-semibold text-xl">
                  2. Điều kiện hoàn phí
                </h6>
                <p>
                  Để đủ điều kiện yêu cầu hoàn phí, sản phẩm/dịch vụ cần phải đáp ứng các điều kiện sau:
                  <ul className="list-disc pl-6">
                    <li>Không quá 30 ngày kể từ ngày mua sản phẩm/dịch vụ.</li>
                    <li>Sản phẩm không bị hư hỏng hoặc đã qua sử dụng.</li>
                    <li>Không có dấu hiệu của việc bị tác động, sửa chữa hoặc làm thay đổi tình trạng ban đầu của sản phẩm.</li>
                  </ul>
                </p>
              </div>

              {/* Refund Process */}
              <div id="section3" className="mt-10">
                <h6 id="process" className="font-semibold text-xl">
                  3. Quy trình hoàn phí
                </h6>
                <p>
                  Quy trình yêu cầu hoàn phí của chúng tôi bao gồm các bước sau:
                </p>
                <ol className="list-decimal pl-6">
                  <li>Liên hệ với bộ phận hỗ trợ khách hàng qua email hoặc số điện thoại.</li>
                  <li>Cung cấp thông tin về đơn hàng và lý do yêu cầu hoàn phí.</li>
                  <li>Đợi xác nhận từ bộ phận hỗ trợ, chúng tôi sẽ kiểm tra tình trạng của sản phẩm và xử lý yêu cầu hoàn phí trong vòng 7 ngày làm việc.</li>
                  <li>Chúng tôi sẽ tiến hành hoàn lại số tiền vào tài khoản của bạn nếu yêu cầu hoàn phí hợp lệ.</li>
                </ol>
                <p>
                  Trong trường hợp có bất kỳ vấn đề nào liên quan đến yêu cầu hoàn phí, chúng tôi sẽ liên hệ lại với bạn để giải quyết nhanh chóng.
                </p>
              </div>

              {/* Additional Information */}
              <div id="section4" className="mt-10">
                <h6 id="otherInfo" className="font-semibold text-xl">
                  4. Thông tin bổ sung
                </h6>
                <p>
                  Nếu bạn có bất kỳ câu hỏi nào về chính sách hoàn phí, vui lòng liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RefundPolicy;
