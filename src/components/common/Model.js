import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        // Ngăn chặn sự kiện nhấp chuột trên lớp overlay làm đóng modal khi nhấp vào nội dung modal
        e.stopPropagation();
        onClose();
    };

    // Ngăn ngừa việc đóng modal khi nhấp vào nội dung modal
    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 md:p-0 p-5"
            onClick={handleOverlayClick}>
            <div
                className="bg-white p-10 rounded-lg shadow-lg relative max-h-screen overflow-y-auto"
                onClick={handleContentClick}>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-4 text-gray-500 hover:text-gray-700 text-[50px]">
                    &times;
                </button>
                <div className="modal-body mt-5"> {children}</div>
            </div>
        </div>
    );
};

export default Modal;
