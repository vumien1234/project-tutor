import React from "react";
import PropTypes from "prop-types";

const ButtonTypes = {
  primary: "bg-[#16a085] text-white hover:bg-[#079992]   px-5 py-3 rounded-lg",
  primary1: "bg-[#34495e] text-white hover:bg-[#2c3e50]   px-5 py-3 rounded-lg",
  secondary: "bg-[#FE5D37] text-white hover:bg-[#D35400] ] px-5 py-3 rounded-lg",
  outline: "bg-transparent text-color-orange",
  no_border: "bg-transparent text-orange-500 hover:bg-gray-200 px-0 py-3 rounded-lg"
};

const CustomButton = ({
  children,
  color = "primary",
  className = "",
  onClick = () => {},
  icon: Icon,
  iconLeft: IconLeft,
  title = "",
  buttonType = "button",
  ...rest
}) => {
  const buttonClass = ButtonTypes[color] || ButtonTypes.primary;

  return (
    <button type={buttonType} className={`${buttonClass} ${className}`} onClick={onClick} {...rest}>
      <div className="flex items-center justify-center">
        {IconLeft && <IconLeft className={`mr-2`} />}
        {title && <h6 className="whitespace-nowrap uppercase font-semibold">{title}</h6>}
        {Icon && <Icon className={`ml-2`} />}
        {children}
      </div>
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary", "outline", "no_border", "primary1"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
  iconLeft: PropTypes.elementType,
  title: PropTypes.string,
  buttonType: PropTypes.oneOf(["button", "submit", "reset"])
};

export default CustomButton;
