/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Container from "../../components/common/Container";
import ContractImage from "../../assets/image/contract-image.webp"; // Hình minh họa cho hợp đồng

const ContractPage = () => {
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
        <h3 className="text-[#3a83bb]">Hợp Đồng Dịch Vụ</h3>
        <div className="border w-[100px] border-blue-300 mb-5"></div>
        <h6 className="text-center w-[700px] text-gray-400 italic">
          Xin vui lòng đọc kỹ các điều khoản và điều kiện dưới đây trước khi ký hợp đồng. Đây là hợp đồng chính thức giữa chúng tôi và bạn.
        </h6>
      </div>

      <Container>
        <div className="flex flex-row gap-5 w-full mt-10">
          {/* Sidebar with Categories */}
          <div className="flex flex-col w-[30%]">
            <div className="w-full border border-gray-200 bg-gray-50 rounded-lg p-4">
              <h5>Danh mục</h5>
              <div>
                <h6 className="cursor-pointer font-semibold" onClick={() => handleScrollToSection("contractOverview")}>
                  1. Tổng quan hợp đồng
                </h6>
                <div className="ml-4">
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("terms")}>
                    1.1 Điều khoản hợp đồng
                  </h6>
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("rightsObligations")}>
                    1.2 Quyền lợi và nghĩa vụ
                  </h6>
                  <h6 className="cursor-pointer" onClick={() => handleScrollToSection("termination")}>
                    1.3 Điều kiện chấm dứt hợp đồng
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col w-[70%]">
            <div className="w-full">
              {/* Contract Overview */}
              <div id="section1">
                <h6 id="contractOverview" className="font-semibold text-xl">
                  1. Tổng quan hợp đồng
                </h6>
                <p>
                  Hợp đồng này được ký kết giữa [Tên công ty] và [Tên khách hàng], với mục đích cung cấp dịch vụ [Mô tả dịch vụ].
                  Các bên cam kết thực hiện đầy đủ các điều khoản đã thống nhất dưới đây.
                </p>
                <br />
                <img src={ContractImage} alt="Contract Image" className="w-full rounded-lg shadow-lg" />
              </div>

              {/* Terms of the Contract */}
              <div id="section2" className="mt-10">
                <h6 id="terms" className="font-semibold text-xl">
                  2. Điều khoản hợp đồng
                </h6>
                <p>
                  Hợp đồng này bao gồm các điều khoản cơ bản sau:
                  <ul className="list-disc pl-6">
                    <li><strong>Thời gian thực hiện:</strong> Hợp đồng có hiệu lực từ ngày [Ngày bắt đầu] đến ngày [Ngày kết thúc].</li>
                    <li><strong>Phí dịch vụ:</strong> [Chi tiết về phí dịch vụ, hình thức thanh toán và thời hạn thanh toán].</li>
                    <li><strong>Địa điểm cung cấp dịch vụ:</strong> Dịch vụ sẽ được cung cấp tại [Địa điểm].</li>
                    <li><strong>Chế độ bảo hành:</strong> [Điều khoản bảo hành, nếu có].</li>
                  </ul>
                </p>
              </div>

              {/* Rights and Obligations */}
              <div id="section3" className="mt-10">
                <h6 id="rightsObligations" className="font-semibold text-xl">
                  3. Quyền lợi và nghĩa vụ của các bên
                </h6>
                <p>
                  Các quyền lợi và nghĩa vụ của các bên như sau:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Quyền lợi của [Tên khách hàng]:</strong> Được cung cấp dịch vụ đúng như cam kết trong hợp đồng, bảo mật thông tin cá nhân.</li>
                  <li><strong>Nghĩa vụ của [Tên khách hàng]:</strong> Thanh toán đầy đủ và đúng hạn phí dịch vụ theo các điều khoản đã thỏa thuận.</li>
                  <li><strong>Quyền lợi của [Tên công ty]:</strong> Được thanh toán phí dịch vụ theo đúng các điều kiện và thời hạn đã thỏa thuận.</li>
                  <li><strong>Nghĩa vụ của [Tên công ty]:</strong> Cung cấp dịch vụ chất lượng, đảm bảo đúng thời gian và yêu cầu của khách hàng.</li>
                </ul>
              </div>

              {/* Termination Clause */}
              <div id="section4" className="mt-10">
                <h6 id="termination" className="font-semibold text-xl">
                  4. Điều kiện chấm dứt hợp đồng
                </h6>
                <p>
                  Hợp đồng này có thể bị chấm dứt trong các trường hợp sau:
                  <ul className="list-disc pl-6">
                    <li>Do một bên vi phạm các điều khoản hợp đồng và không khắc phục trong vòng 7 ngày kể từ khi nhận thông báo.</li>
                    <li>Do các lý do bất khả kháng như thiên tai, chiến tranh, thay đổi chính sách pháp lý của nhà nước.</li>
                    <li>Thỏa thuận giữa các bên về việc chấm dứt hợp đồng.</li>
                  </ul>
                </p>
              </div>

              {/* Additional Information */}
              <div id="section5" className="mt-10">
                <h6 id="otherInfo" className="font-semibold text-xl">
                  5. Thông tin bổ sung
                </h6>
                <p>
                  Mọi điều khoản không được đề cập trong hợp đồng này sẽ được điều chỉnh theo các quy định của pháp luật hiện hành.
                  Nếu có bất kỳ tranh chấp nào phát sinh từ hợp đồng này, các bên sẽ giải quyết thông qua thương lượng. Nếu không thành công,
                  các tranh chấp sẽ được đưa ra giải quyết tại Tòa án có thẩm quyền.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContractPage;
