import React from "react";
import Banner1 from "../../components/common/Banner1";
import img1 from "../../assets/image/tong-quan/banner.jpeg";
import img2 from "../../assets/image/tong-quan/2.jpeg";
import Container from "../../components/common/Container";
import ImageTeacher from "../../assets/image/tong-quan/GIA_SU_LOP9.jpeg";
import WhyUS from "../../assets/image/tong-quan/Why_do_you_choose_us.jpg";
import CustomImage from "../../components/common/CustomImage";
import CustomButton from "../../components/common/Button";
import { FaArrowRight } from "react-icons/fa";

const Overview = () => {
  return (
    <div>
      <Banner1
        banners={[
          { src: img1, alt: "Banner 1" },
          { src: img2, alt: "Banner 2" }
        ]}
        isFullPage
      />
      <Container>
        <div className="py-12">
          <>
            <h2 className="font-bold text-center">Tổng Quan về Website Tìm Gia Sư</h2>
            <h4 className="mt-8 text-xl font-semibold">Mục Đích và Chức Năng</h4>
            <h5 className="mt-2">
              Website tìm gia sư là nền tảng trực tuyến được thiết kế để kết nối học sinh, phụ huynh với các gia sư có
              trình độ và chuyên môn phù hợp. Mục đích của website là cung cấp một giải pháp thuận tiện cho việc tìm
              kiếm, lựa chọn gia sư, giúp nâng cao chất lượng giáo dục và đáp ứng nhu cầu học tập của từng cá nhân.
            </h5>
            <h4 className="mt-3 text-xl font-semibold">Chức Năng Chính</h4>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li className="text-[14px] md:text-[16px]">
                <strong className="text-[14px] md:text-[16px]">Đăng Ký và Quản Lý Tài Khoản:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>Người dùng có thể tạo tài khoản cá nhân (học sinh, phụ huynh, gia sư).</li>
                  <li>Cung cấp thông tin cá nhân, lịch sử học tập, và thông tin liên lạc.</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong className="text-[14px] md:text-[16px]">Tìm Kiếm Gia Sư:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    Cho phép người dùng tìm kiếm gia sư dựa trên nhiều tiêu chí như môn học, khu vực,họ và tên gia sư
                  </li>
                  <li>Bộ lọc để tìm kiếm dễ dàng và nhanh chóng.</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong className="text-[14px] md:text-[16px]">Quản Lý Lịch Học:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    Sau khi đăng kí lớp học và được admin chấp nhận yêu cầu thì lịch học của bạn sẽ được hiển thị trong
                    phần profile.
                  </li>
                  <li>Giúp người học tổ chức thời gian hiệu quả với lịch học đã được phân công rõ ràng.</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong className="text-[14px] md:text-[16px]">Liên hệ:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    Người dùng có thể gửi form liên hệ đến chúng tôi trong giờ hành chính , chúng tôi sẽ phản hồi lại
                    qua email mà bạn đăng kí,câu trả lời sẽ được phản hồi sớm nhất và giải đáp các thắc mắc của bạn.
                  </li>
                  <li>Cung cấp thông tin cá nhân,khoá học đăng kí,và thông tin liên lạc.</li>
                </ul>
              </li>
            </ol>
            <h4 className="mt-8 text-xl font-semibold">Lợi Ích Cho Người Dùng</h4>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li className="text-lg">
                <strong className="text-[14px] md:text-[16px]">Học Sinh và Phụ Huynh:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>Dễ dàng tìm kiếm gia sư phù hợp với nhu cầu học tập.</li>
                  <li>Tiết kiệm thời gian và công sức trong việc tìm kiếm giáo viên.</li>
                  <li>Có nhiều lựa chọn về gia sư và phương pháp học tập.</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong className="text-[14px] md:text-[16px]">Gia Sư:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>Cơ hội tiếp cận nhiều học sinh tiềm năng.</li>
                  <li>Quản lý lịch học và thông tin cá nhân dễ dàng.</li>
                  <li>Nhận phản hồi để cải thiện chất lượng giảng dạy.</li>
                </ul>
              </li>
            </ol>
          </>
        </div>
      </Container>
      <div className="bg-[#f5f5f5]">
        <Container>
          <div className="flex flex-row">
            <div className="w-[50%] ">
              <CustomImage src={ImageTeacher} />
            </div>
            <div className="w-[50%] py-5 px-10">
              <h3 className="uppercase text-[#3a83bb] mb-3">Trung tâm gia sư tutormaster</h3>
              <h5>
                Gia sư là gì? Gia sư là hình thức dạy kèm, nơi một giáo viên hỗ trợ một hoặc nhiều học sinh với chương
                trình học được thiết kế riêng, nhằm đạt được hiệu quả tối ưu.
              </h5>
              <br />
              <h5>
                <h5 className="font-bold inline-block"> Trung tâm gia sư TutorMaster</h5>, với hơn 10 năm kinh nghiệm
                trong lĩnh vực gia sư tại nhà, cam kết mang đến cho phụ huynh và học sinh những gia sư chất lượng, được
                lựa chọn kỹ lưỡng và phù hợp với nhu cầu riêng biệt của từng học viên. Chúng tôi cung cấp các nhóm gia
                sư chuyên biệt, giảng dạy theo từng đối tượng học sinh cụ thể, với chế độ tư vấn và hỗ trợ học tập tận
                tình.
              </h5>
              <a href="/lien-he">
                <CustomButton title="Liên hệ ngay" icon={FaArrowRight} className="mt-7" />
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className="mb-12">
        <CustomImage src={WhyUS} className="h-[400px] mx-auto" />
        <Container>
          <div className="mt-10">
            <h4 className="text-xl font-semibold">Đối với phụ huynh:</h4>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li className="text-[14px] md:text-[16px]">
                <strong>Chất lượng gia sư được đảm bảo:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    TutorMaster tuyển chọn và kiểm tra kỹ lưỡng các gia sư, đảm bảo rằng họ có chuyên môn cao và kinh
                    nghiệm giảng dạy. Mỗi gia sư đều trải qua quy trình phỏng vấn nghiêm ngặt và kiểm tra kiến thức
                    chuyên môn để đảm bảo rằng họ có khả năng cung cấp chất lượng giáo dục tốt nhất cho học sinh.
                  </li>
                  <li>
                    Chúng tôi không chỉ đánh giá kiến thức mà còn xem xét khả năng giao tiếp và phương pháp giảng dạy
                    của gia sư, giúp phụ huynh yên tâm khi lựa chọn gia sư cho con em mình.
                  </li>
                </ul>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong className="text-[14px] md:text-[16px]">Tìm kiếm dễ dàng:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li className="text-[14px] md:text-[16px]">
                    Giao diện thân thiện giúp phụ huynh dễ dàng tìm kiếm gia sư phù hợp với nhu cầu và yêu cầu học tập
                    của con em mình. Với các bộ lọc thông minh, phụ huynh có thể tìm kiếm theo môn học, mức độ học vấn,
                    và địa điểm.
                  </li>
                  <li className="text-[14px] md:text-[16px]">
                    Ngoài ra, hệ thống của chúng tôi cũng cung cấp thông tin chi tiết về từng gia sư, bao gồm mô tả về
                    phong cách giảng dạy, kinh nghiệm làm việc, và mức phí, giúp phụ huynh dễ dàng đưa ra quyết định.
                  </li>
                </ul>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong className="text-[14px] md:text-[16px]">Đánh giá và phản hồi:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li className="text-[14px] md:text-[16px]">
                    Phụ huynh có thể xem đánh giá và phản hồi từ những người dùng khác về gia sư, giúp họ đưa ra quyết
                    định tốt hơn. Hệ thống đánh giá của chúng tôi đảm bảo tính minh bạch và công bằng.
                  </li>
                  <li className="text-[14px] md:text-[16px]">
                    Các phản hồi từ phụ huynh khác cũng cung cấp cái nhìn rõ hơn về hiệu quả giảng dạy của gia sư, từ đó
                    phụ huynh có thể tìm được người phù hợp nhất cho con mình.
                  </li>
                </ul>
              </li>
              <li className="text-lg">
                <strong className="text-[14px] md:text-[16px]">Quản lý thời gian linh hoạt:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li className="text-[14px] md:text-[16px]">
                    Phụ huynh có thể linh hoạt sắp xếp lịch học cho con em mình, dễ dàng thay đổi và điều chỉnh khi cần
                    thiết. Chúng tôi cung cấp các tùy chọn học tập linh hoạt, bao gồm cả học trực tiếp và học online.
                  </li>
                  <li className="text-[14px] md:text-[16px]">
                    Việc sắp xếp thời gian học tập không còn là vấn đề phức tạp, giúp phụ huynh dễ dàng cân bằng giữa
                    công việc và việc học của con cái.
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className="text-xl mt-8 font-semibold">Đối với học sinh:</h4>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li className="text-[14px] md:text-[16px]">
                <strong className="text-[14px] md:text-[16px]">Gia sư chất lượng cao:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    Học sinh sẽ được học với những gia sư giàu kinh nghiệm, giúp họ nắm bắt kiến thức một cách hiệu quả.
                    Gia sư không chỉ có kiến thức chuyên môn mà còn biết cách truyền đạt kiến thức một cách dễ hiểu và
                    thú vị.
                  </li>
                  <li>
                    Những gia sư này cũng có khả năng phát hiện điểm mạnh và điểm yếu của học sinh, từ đó thiết kế bài
                    học phù hợp nhất với từng cá nhân.
                  </li>
                </ul>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong className="text-[14px] md:text-[16px]">Hỗ trợ cá nhân hóa:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    TutorMaster cung cấp các khóa học được thiết kế riêng theo nhu cầu học tập của từng học sinh, giúp
                    họ tiến bộ nhanh chóng. Học sinh có thể chọn học theo từng môn học cụ thể hoặc học nhiều môn cùng
                    lúc tùy theo nhu cầu cá nhân.
                  </li>
                  <li>
                    Các gia sư cũng có thể điều chỉnh phương pháp giảng dạy dựa trên phản hồi từ học sinh, đảm bảo mỗi
                    buổi học đều đạt hiệu quả cao nhất.
                  </li>
                </ul>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong>Tương tác tích cực:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    Học sinh có thể trao đổi trực tiếp với gia sư, tạo điều kiện cho việc học tập hiệu quả hơn. Môi
                    trường học tập gần gũi giúp học sinh thoải mái hơn trong việc đặt câu hỏi và chia sẻ ý kiến của
                    mình.
                  </li>
                  <li>
                    Hệ thống cũng cho phép học sinh dễ dàng kết nối với gia sư để giải đáp thắc mắc và tìm hiểu sâu hơn
                    về các kiến thức đã học.
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className="text-xl font-semibold mt-8">Đối với gia sư:</h4>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li className="text-[14px] md:text-[16px]">
                <strong className="text-[14px] md:text-[16px]">Cơ hội kiếm thêm thu nhập:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    Gia sư có thể tìm được học sinh phù hợp với chuyên môn của mình và tạo ra thu nhập bổ sung.
                    TutorMaster cung cấp nền tảng để gia sư dễ dàng kết nối với học sinh cần trợ giúp học tập.
                  </li>
                  <li>
                    Ngoài việc kiếm thêm thu nhập, gia sư còn có cơ hội làm việc với nhiều học sinh khác nhau, giúp họ
                    mở rộng kinh nghiệm giảng dạy.
                  </li>
                </ul>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong>Quản lý thời gian linh hoạt:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    Gia sư có thể tự sắp xếp lịch giảng dạy theo thời gian rảnh rỗi của mình, tạo sự linh hoạt trong
                    công việc. Điều này rất quan trọng cho những người có công việc chính hoặc học tập.
                  </li>
                  <li>
                    Họ có thể chọn lịch dạy phù hợp với phong cách sống của mình, từ đó duy trì sự cân bằng giữa công
                    việc và cuộc sống cá nhân.
                  </li>
                </ul>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong className="text-[14px] md:text-[16px]">Kết nối với học sinh:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    TutorMaster giúp gia sư tiếp cận với nhiều học sinh khác nhau, mở rộng mạng lưới giảng dạy của họ.
                    Điều này không chỉ mang lại cơ hội giảng dạy mà còn giúp gia sư xây dựng danh tiếng trong cộng đồng
                    giáo dục.
                  </li>
                  <li>
                    Gia sư có thể phát triển kỹ năng giao tiếp và giảng dạy qua các buổi học khác nhau, từ đó cải thiện
                    chất lượng giảng dạy của mình.
                  </li>
                </ul>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong className="text-[14px] md:text-[16px]">Phát triển kỹ năng giảng dạy:</strong>
                <ul className="list-disc list-inside mt-2 ml-5">
                  <li>
                    Gia sư có cơ hội trau dồi và nâng cao kỹ năng giảng dạy của mình thông qua các trải nghiệm với nhiều
                    học sinh khác nhau. Họ có thể thử nghiệm nhiều phương pháp giảng dạy khác nhau để tìm ra phương pháp
                    hiệu quả nhất.
                  </li>
                  <li>
                    Qua đó, gia sư không chỉ giúp học sinh tiến bộ mà còn phát triển bản thân và nâng cao giá trị nghề
                    nghiệp của mình.
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className="text-xl font-semibold mt-8 mb-2">Hợp tác cùng nhau phát triển</h4>
            <h5>
              Gia sư TutorMaster chào đón các bạn có ý định hợp tác cộng tác với chúng tôi để cùng phát triển. Chúng tôi
              sẵn sàng hợp tác với mọi cá nhân, tổ chức nào dưới hình thức bình đẳng – bền vững – đôi bên đều có lợi.
            </h5>

            <h5 className="py-2">
              Tại TutorMaster, chúng tôi không chỉ tìm kiếm những gia sư có kinh nghiệm và chuyên môn, mà còn mong muốn
              xây dựng một cộng đồng nơi mọi người đều được lắng nghe và tôn trọng. Chúng tôi khuyến khích sự sáng tạo
              và đổi mới trong phương pháp giảng dạy, giúp gia sư phát huy tối đa khả năng của mình.
            </h5>
            <h5 className="pb-2">
              Hãy cùng chúng tôi xây dựng một nền tảng giáo dục chất lượng, nơi mọi cá nhân đều có cơ hội phát triển và
              tỏa sáng Hãy tham gia vào hành trình phát triển cùng TutorMaster – nơi mỗi người đều có thể góp phần tạo
              nên sự khác biệt trong việc nâng cao chất lượng giáo dục!
            </h5>
            <a href="/gioi-thieu">
              <CustomButton title="Xem thêm" icon={FaArrowRight} className="mt-7" />
            </a>
            <div>Các phản hồi về TutorMaster</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Overview;
