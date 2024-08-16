import React, { useCallback, useEffect } from "react";
import { hideScroll, showScroll } from "./slices";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
    const dispatch = useDispatch();
    const { showScrollToTop } = useSelector((state) => state.scroll);

    const handleScroll = useCallback(() => {
        if (window.scrollY > 300) {
            dispatch(showScroll());
        } else {
            dispatch(hideScroll());
        }
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            id="scrollToTopBtn"
            className={`scroll-to-top ${showScrollToTop ? "show" : ""}`}
            onClick={scrollToTop}>
            <FaArrowUp className="text-[#FE5D37]" />
        </div>
    );
};

export default ScrollToTop;
