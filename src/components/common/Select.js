import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const SingleSelect = ({
  options,
  label,
  placeholder,
  error,
  value,
  setValue,
  disabled,
  close,
  setErrors,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setErrors();
    setValue(option);
    setIsOpen(false);
  };

  const handleOptionClose = () => {
    setValue(null);
    close && close();
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex mb-3 items-center">
        <label className={`${error && "text-red-500"} mr-3`}>{label}</label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div>
        <div className="flex items-center relative mt-3">
          <input
            type="text"
            className={`${
              error && "border-red-500"
            } py-3 px-5 rounded-sm w-full border-[1.5px] border-solid cursor-pointer`}
            placeholder={placeholder}
            disabled={disabled}
            onClick={toggleDropdown}
            value={value?.name ?? ""}
            onChange={() => {}} 
          />
          {value ? (
            <span
              className="absolute top-3 right-5 hover:cursor-pointer"
              onClick={handleOptionClose}
            >
              x
            </span>
          ) : (
            <span className="absolute top-[20px] right-5 hover:cursor-pointer">
            <FaChevronDown />
            </span>
          )}
        </div>
      </div>
      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60
        rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {options.map((option) => (
            <li
              key={option.id}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-hover-default
                 ${value?.id === option?.id && "bg-hover-default"}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SingleSelect;
