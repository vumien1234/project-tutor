import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListTutor } from "./api";
import { setCurrentPage } from "./slice";
import Banner1 from "../../components/common/Banner1";
import Container from "../../components/common/Container";
import CustomButton from "../../components/common/Button";
import { Pagination } from "../../components/common/Pagination";
import TeamTeacher from "../../assets/image/teamTutor/gia-su1.jpg";
import ImgTeacher from "../../assets/image/teamTutor/1.jpg";
import { FaArrowRight, FaFilter } from "react-icons/fa";
import { getIMG } from "../../utils/currencyFormatter";
import { LIST_OF_SUBJECTS } from "../../constants/MainConstants";

const TutorList = () => {
  const dispatch = useDispatch();
  const { listTutor, currentPage, totalPages, limit } = useSelector((state) => state.listTutor);

  const [filterSubject, setFilterSubject] = useState([]);

  useEffect(() => {
    dispatch(fetchListTutor({ page: currentPage, limit }));
  }, [currentPage, dispatch, limit]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
    dispatch(fetchListTutor({ page: newPage, limit }));
  };

  const handleRoleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterSubject([...filterSubject, value]);
    } else {
      setFilterSubject(filterSubject.filter((item) => item !== value));
    };
  }

  return (
    <div className="relative">
      <Banner1 banners={[{ src: TeamTeacher, alt: "TeamTeacher" }]} isFullPage />
      <Container>
        <div className="py-16 w-full">
          <p className="flex items-center text-[24px] justify-center uppercase font-bold text-[#03428E]">
            Đội ngũ giảng viên
          </p>
          <div className="flex flex-row gap-10 mt-7">
            {/* Left Sidebar - 25% */}
            <div className="w-[25%] p-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaFilter className="mr-2" />
                Bộ lọc
              </h3>
              <div>
                <h5 className="mb-2 font-semibold">Lọc theo môn học</h5>
                <div className="flex flex-col space-y-2">
                  {LIST_OF_SUBJECTS.map((subject) => (
                    <label key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        name="subject"
                        value={subject}
                        className="mr-2"
                        onChange={handleRoleChange}
                      />
                      {subject}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Side - 75% */}
            <div className="w-[75%]">
              {listTutor && listTutor.length > 0 ? (
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                  {listTutor.map((tutor) => (
                    <div key={tutor.id} className="h-[340px] bg-white rounded-2xl shadow-lg relative">
                      <div className="w-full flex rounded-t-2xl justify-center items-center h-[210px]">
                        <img
                          src={getIMG(tutor.avatar) || ImgTeacher}
                          alt={tutor.username}
                          className="w-full z-40 h-full object-cover rounded-t-2xl"
                        />
                      </div>
                      <div className="px-5 py-3 flex flex-col items-center justify-center">
                        <div className="h-[40px] text-center">
                          <h5 className="line-clamp-1 text-[#03428E] font-semibold">{tutor.username}</h5>
                          <h6 className="line-clamp-1">{tutor.job}</h6>
                        </div>
                        <a href={`/doi-ngu-gia-su/${tutor.username}`}>
                          <CustomButton
                            color="secondary"
                            title="Xem chi tiết"
                            icon={FaArrowRight}
                            className="mt-5 !rounded-full !py-2"
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Không có dữ liệu cho vai trò đã chọn.</p>
              )}
              {listTutor.length > 0 && (
                <Pagination
                  page={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={handlePageChange}
                  className="mt-4"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TutorList;
