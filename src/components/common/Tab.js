import React from "react";
import { useNavigate } from "react-router-dom";

const Tab = ({ url, Icon, detail, isActive, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
    onClick();
  };

  return (
    <button
      className={`flex w-[266px] justify-start items-center p-5 ml-1 md:gap-3
       hover:bg-slate-900 hover:bg-opacity-5 ${
         isActive && "bg-slate-900 bg-opacity-5"
       } rounded-lg`}
      onClick={handleClick}
    >
      {Icon && <Icon size={19} className="md:size-auto mr-5" />}
      <h6 className="font-semibold text-wrap">{detail}</h6>
    </button>
  );
};

export default Tab;
