import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handChangePage = (page) => {
        if (page > 0 && page < totalPages) {
            onPageChange(page);
        }
    };

    if (totalPages < 0) {
        return null;
    }

    const maxVisiblePages = 5;
    const pages = [];
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
        startPage = 0;
        endPage = totalPages - 1;
    } else {
        if (currentPage <= Math.floor(maxVisiblePages / 2)) {
            startPage = 0;
            endPage = maxVisiblePages - 1
        } else if (currentPage + Math.floor(maxVisiblePages / 2) >= totalPages) {
            startPage = totalPages - maxVisiblePages;
            endPage = totalPages - 1
        } else {
            startPage = currentPage - Math.floor(maxVisiblePages / 2)
            endPage = currentPage + Math.floor(maxVisiblePages / 2)
        }
    }

    for (let i = startPage; i <= endPage; i++){
        pages.push(i)
    }

    return <div></div>;
};

export default Pagination;
