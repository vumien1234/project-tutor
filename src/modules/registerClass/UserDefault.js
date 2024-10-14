import React from "react";

const UserDefault = ({ currentUser }) => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:gap-5 ">
        <div className="flex flex-col w-full mt-5 md:mt-0 ">
          <h6 className="mb-3">Họ và tên</h6>
          <input
            type="text"
            placeholder="Họ và tên"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
            value={currentUser?.full_name}
            disabled
          />
        </div>
        <div className="flex flex-col w-full mt-5 md:mt-0">
          <h6 className="mb-3">Vai trò</h6>
          <input
            type="text"
            placeholder="Vai trò"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
            value={currentUser?.role}
            disabled
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-5 md:mt-5 ">
        <div className="flex flex-col w-full mt-5 md:mt-0">
          <h6 className="mb-3">CMND</h6>
          <input
            type="text"
            placeholder="CMND"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
            value={currentUser?.cccd}
            disabled
          />
        </div>
        <div className="flex flex-col w-full mt-5 md:mt-0">
          <h6 className="mb-3">Giới tính</h6>
          <input
            type="text"
            placeholder="Giới tính"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
            value={currentUser?.gender}
            disabled
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-5 md:mt-5 ">
        <div className="flex flex-col w-full mt-5 md:mt-0">
          <h6 className="mb-3">Địa chỉ</h6>
          <input
            type="text"
            placeholder="Địa chỉ"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
            value={currentUser?.address}
            disabled
          />
        </div>
        <div className="flex flex-col w-full mt-5 md:mt-0 ">
          <h6 className="mb-3">Số điện thoại</h6>
          <input
            type="text"
            placeholder="Số điện thoại"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
            value={currentUser?.phone}
            disabled
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-5 md:mt-5 ">
        <div className="flex flex-col w-full mt-5 md:mt-0">
          <h6 className="mb-3">Email</h6>
          <input
            type="text"
            placeholder="Email"
            className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
            value={currentUser?.email}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default UserDefault;
