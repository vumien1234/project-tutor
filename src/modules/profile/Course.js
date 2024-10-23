import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourceList } from "./api";
import CustomImage from "../../components/common/CustomImage";

const Course = () => {
  const dispatch = useDispatch();
  const { courceList, selectedCourseId, currentPage, limit } = useSelector((state) => state.courceList);

  useEffect(() => {
    if (selectedCourseId) {
      dispatch(fetchCourceList({ page: currentPage, limit, id: selectedCourseId }));
    }
  }, [currentPage, dispatch, limit, selectedCourseId]);
  console.log("id_lop",courceList)

  return (
    <>
      {courceList && courceList.length > 0 ? (
        <div className="border border-[#3a83bb] rounded-lg p-8 text-left">
          {courceList.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between">
                <h6 className="p-2 border text-center w-[150px] font-semibold rounded-lg mb-4">{item.id_lop}</h6>
                <button className="w-[100px] h-[35px] border border-red-400 rounded-lg font-medium">Xoá</button>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-5">
                {/* Hình ảnh giáo viên */}
                <div className="w-full md:w-[200px] h-[300px] md:h-[180px]">
                  <CustomImage src={item.avata} alt="Teacher" className="object-cover w-full h-full rounded-md" />
                </div>
                {/* Thông tin khóa học */}
                <div className="w-full md:w-2/3">
                  <h5 className="font-semibold mb-2">Toán cấp I</h5>
                  <div className="space-y-3">
                    <div className="flex justify-start items-start">
                      <h6 className="w-[100px]">Giáo viên</h6>
                      <h6 className="font-semibold">Vũ Thị Miên</h6>
                    </div>
                    <div className="flex justify-start items-start">
                      <h6 className="w-[100px]">Thời gian</h6>
                      <h6 className="font-semibold">3 tháng</h6>
                    </div>
                    <div className="flex justify-start items-start">
                      <h6 className="w-[100px]">Học phí</h6>
                      <h6 className="font-semibold">1.000.000đ</h6>
                    </div>
                    <div className="flex gap-3 justify-start md:flex-row flex-col">
                      <div className="flex items-center w-[150px] bg-[#FFF5E5] p-2 rounded-md">
                        <h6 className="text-[#DA8506]">Chưa thanh toán</h6>
                      </div>
                      <h6 className="flex items-center gap-2">
                        Hạn thanh toán <p className="font-semibold">10/06/2024</p>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>Không có khóa học nào</>
      )}
    </>
  );
};

export default Course;
