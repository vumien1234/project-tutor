import React, { useEffect, useState } from "react";
import CustomButton from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment, fetchPostComment } from "./api";
import { convertTime } from "../../utils/timeConverter";
import { setPostComment } from "./slice";
import ImgTeacher from "../../assets/image/teamTutor/1.jpg";
import { getIMG } from "../../utils/currencyFormatter";

const Comment = ({ userName }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { comment, currentPage, postComment } = useSelector((state) => state.listTutor);

  // State để theo dõi số lượng bình luận hiển thị
  const [visibleComments, setVisibleComments] = useState(5);

  useEffect(() => {
    dispatch(fetchComment({ page: currentPage, userName }));
  }, [currentPage, dispatch, userName]);

  const handlePostComment = async () => {
    if (postComment.trim()) {
      const params = {
        username_voted: userName,
        username: currentUser?.username,
        comment: postComment
      };
      await dispatch(fetchPostComment(params));
    }
  };

  const handleChange = (value) => {
    dispatch(setPostComment(value));
  };

  const handleLoadMore = () => {
    // Tăng số lượng bình luận hiển thị
    setVisibleComments((prev) => prev + 5);
  };

  const handleCollapse = () => {
    // Giảm số lượng bình luận hiển thị về 5
    setVisibleComments(5);
  };

  return (
    <>

      <div className="py-12 w-full">
        {/* Thêm phần bình luận */}
        <div className="border border-dashed border-purple-300"></div>
        <div className="my-10 p-8 border border-gray-200 rounded-lg relative">
          <div className="flex items-center space-x-4">
            <img src={getIMG(currentUser?.avatar) || ImgTeacher} className="w-[60px] h-[60px] rounded-full" alt="avatar" />
            <textarea
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mời nhập"
              value={postComment}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          <div className="pt-8 flex justify-end">
            <CustomButton onClick={handlePostComment} title="Gửi" buttonType="submit" />
          </div>
        </div>

        {/* Bình luận đã có */}
        {comment.length === 0 && (
          <h4 className="text-center text-gray-400">Chưa có bình luận nào!</h4>
        )}
        {comment.slice(0, visibleComments).map((cmt, index) => (
          <div key={index} className="px-8 py-5 mb-5 flex flex-row gap-5 border border-gray-200 rounded-lg">
            <img
              src={getIMG(cmt?.avatar)}
              className="w-[60px] h-[60px] rounded-full"
              alt="avatar"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h5 className="font-semibold">{cmt.username_voted}</h5>
                <div className="flex items-center gap-5">
                  <h6 className="text-gray-400">{convertTime(cmt.created_at) || "Vài phút trước"}</h6>
                </div>
              </div>
              <h6>{cmt.comment}</h6>
            </div>
          </div>
        ))}

        {/* Nút xem thêm hoặc thu gọn */}
        {/* <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="flex items-center gap-x-4"
            onClick={visibleComments >= comment.length ? handleCollapse : handleLoadMore}
            aria-label="button"
          >
            <h5 className="text-[#03428E]">{visibleComments >= comment.length ? "Thu gọn" : "Xem thêm"}</h5>
            {visibleComments < comment.length ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21" fill="none">
                <path
                  d="M9.96459 10.2172L3.86167 16.277C3.7204 16.4172 3.64258 16.6043 3.64258 16.8038C3.64258 17.0033 3.7204 17.1904 3.86167 17.3305L4.311 17.7768C4.6038 18.0672 5.07967 18.0672 5.37201 17.7768L10.4969 12.6882L15.6274 17.7825C15.7687 17.9226 15.957 18 16.1578 18C16.3589 18 16.5472 17.9226 16.6885 17.7825L17.1378 17.3362C17.279 17.1959 17.3569 17.0089 17.3569 16.8094C17.3569 16.6099 17.279 16.4228 17.1378 16.2827L11.0293 10.2172C10.8876 10.0767 10.6984 9.99956 10.4972 10C10.2953 9.99956 10.1062 10.0767 9.96459 10.2172Z"
                  fill="#03428E"
                />
                <path
                  d="M9.96459 2.21721L3.86167 8.27705C3.7204 8.4172 3.64258 8.6043 3.64258 8.8038C3.64258 9.00329 3.7204 9.19039 3.86167 9.33055L4.311 9.77681C4.6038 10.0672 5.07967 10.0672 5.37201 9.77681L10.4969 4.68822L15.6274 9.78246C15.7687 9.92261 15.957 10 16.1578 10C16.3589 10 16.5472 9.92261 16.6885 9.78246L17.1378 9.33619C17.279 9.19593 17.3569 9.00894 17.3569 8.80944C17.3569 8.60995 17.279 8.42285 17.1378 8.28269L11.0293 2.21721C10.8876 2.07672 10.6984 1.99956 10.4972 2C10.2953 1.99956 10.1062 2.07672 9.96459 2.21721Z"
                  fill="#03428E"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 21" fill="none">
                <path
                  d="M9.46459 10.7828L3.36167 4.72295C3.2204 4.5828 3.14258 4.3957 3.14258 4.1962C3.14258 3.99671 3.2204 3.80961 3.36167 3.66945L3.811 3.22319C4.1038 2.9328 4.57967 2.9328 4.87201 3.22319L9.99688 8.31178L15.1274 3.21754C15.2687 3.07739 15.457 3 15.6578 3C15.8589 3 16.0472 3.07739 16.1885 3.21754L16.6378 3.66381C16.779 3.80407 16.8569 3.99106 16.8569 4.19056C16.8569 4.39005 16.779 4.57715 16.6378 4.71731L10.5293 10.7828C10.3876 10.9233 10.1984 11.0004 9.99721 11C9.79529 11.0004 9.60616 10.9233 9.46459 10.7828Z"
                  fill="#03428E"
                />
                <path
                  d="M9.46459 18.7828L3.36167 12.7229C3.2204 12.5828 3.14258 12.3957 3.14258 12.1962C3.14258 11.9967 3.2204 11.8096 3.36167 11.6695L3.811 11.2232C4.1038 10.9328 4.57967 10.9328 4.87201 11.2232L9.99688 16.3118L15.1274 11.2175C15.2687 11.0774 15.457 11 15.6578 11C15.8589 11 16.0472 11.0774 16.1885 11.2175L16.6378 11.6638C16.779 11.8041 16.8569 11.9911 16.8569 12.1906C16.8569 12.3901 16.779 12.5772 16.6378 12.7173L10.5293 18.7828C10.3876 18.9233 10.1984 19.0004 9.99721 19C9.79529 19.0004 9.60616 18.9233 9.46459 18.7828Z"
                  fill="#03428E"
                />
              </svg>
            )}
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Comment;
