import React from "react";
import { useParams } from "react-router-dom";
import Store_img1 from "../../assets/image/home-image/store_img.png";
import Concentrate_img from "../../assets/image/home-image/concentrate.jpg";
import Personer_custom from "../../assets/image/home-image/personer-custom.jpg";
import Quality_tutor from "../../assets/image/home-image/quality-tutor.jpg";
import Monitor from "../../assets/image/home-image/monitor.jpg";
import Reputation from "../../assets/image/home-image/reputation.png";

const articles = [
    {
        id: 1,
        slug: "tien-loi-va-thoai-mai",
        title: "Tiện lợi và thoải mái",
        image: Store_img1,
        content: `
            Chúng tôi cung cấp dịch vụ gia sư tại nhà, giúp bạn dễ dàng tiếp cận kiến thức ngay tại không gian quen thuộc của mình.
            Bạn có thể học tại nhà mà không cần di chuyển, tiết kiệm thời gian.
        `,
        additionalInfo: `
            Ngoài ra, chúng tôi còn cung cấp các dịch vụ hỗ trợ học tập như tài liệu tham khảo, các khóa học online,
            và sự hỗ trợ tư vấn học tập 24/7. Bạn hoàn toàn có thể yên tâm về chất lượng dịch vụ của chúng tôi.
        `,
    },
    {
        id: 2,
        slug: "tap-trung-cao-do",
        title: "Tập trung cao độ",
        image: Concentrate_img,
        content: `
            Với môi trường học tập tại nhà, bạn có thể tập trung hoàn toàn vào việc học mà không bị phân tán bởi những yếu tố ngoại vi.
            Gia sư sẽ đến tận nơi, tạo ra một không gian học tập yên tĩnh và chuyên sâu.
        `,
        additionalInfo: `
            Đội ngũ gia sư của chúng tôi được đào tạo để giúp học sinh đạt được mức độ tập trung tối đa, nâng cao hiệu suất học tập.
        `,
    },
    {
        id: 3,
        slug: "tuy-chinh-ca-nhan-hoa",
        title: "Tùy chỉnh cá nhân hóa",
        image: Personer_custom,
        content: `
            Dịch vụ gia sư tại nhà của chúng tôi cho phép bạn tùy chỉnh lộ trình học tập theo sở thích và mục tiêu cá nhân.
            Bạn có thể chọn gia sư phù hợp với mình và xây dựng kế hoạch học tập linh hoạt.
        `,
        additionalInfo: `
            Mỗi học sinh đều có những nhu cầu và mục tiêu riêng, và chúng tôi cam kết cung cấp các giải pháp học tập
            tùy chỉnh để đáp ứng tốt nhất những yêu cầu này.
        `,
    },
    {
        id: 4,
        slug: "gia-su-chat-luong",
        title: "Gia sư chất lượng",
        image: Quality_tutor,
        content: `
            Đội ngũ gia sư của chúng tôi được chọn lọc kỹ càng, chuyên môn cao và kinh nghiệm giảng dạy rõ ràng.
            Chúng tôi chỉ hợp tác với những gia sư đã được kiểm tra về năng lực và đạo đức nghề nghiệp.
        `,
        additionalInfo: `
            Chúng tôi cam kết cung cấp gia sư chất lượng, đảm bảo bạn nhận được sự hướng dẫn tốt nhất trong quá trình học tập.
        `,
    },
    {
        id: 5,
        slug: "su-giam-sat-va-danh-gia",
        title: "Sự giám sát và đánh giá",
        image: Monitor,
        content: `
            Chúng tôi cung cấp sự giám sát chặt chẽ và đánh giá thường xuyên để đảm bảo tiến độ học tập.
            Gia sư sẽ theo dõi quá trình học của bạn, đưa ra các đánh giá và điều chỉnh phương pháp giảng dạy.
        `,
        additionalInfo: `
            Đánh giá thường xuyên giúp bạn nhận ra những điểm cần cải thiện và duy trì động lực học tập hiệu quả.
        `,
    },
    {
        id: 6,
        slug: "uy-tin-va-chat-luong",
        title: "Uy tín và chất lượng",
        image: Reputation,
        content: `
            Chúng tôi cam kết mang đến dịch vụ gia sư chất lượng nhất với uy tín đã được xây dựng qua thời gian.
            Bạn có thể hoàn toàn yên tâm khi lựa chọn dịch vụ của chúng tôi.
        `,
        additionalInfo: `
            Đội ngũ gia sư của chúng tôi đã được kiểm tra kỹ lưỡng, đảm bảo rằng bạn sẽ nhận được dịch vụ tốt nhất.
        `,
    },
];

const ArticleDetail = () => {
    const { slug } = useParams(); // Lấy slug từ URL

    // Tìm bài viết dựa trên slug
    const article = articles.find((article) => article.slug === slug);

    if (!article) {
        return <div className="text-center text-red-500">Bài viết không tìm thấy.</div>;
    }

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl font-bold text-center mb-10">{article.title}</h1>
            <img src={article.image} alt={article.title} className="mx-auto rounded-lg" />
            <div className="mt-10 text-lg">
                <p>{article.content}</p>
                <p className="mt-5">{article.additionalInfo}</p>
            </div>
        </div>
    );
};

export default ArticleDetail;
