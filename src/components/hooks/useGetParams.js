import { useLocation } from "react-router-dom";

const useGetParams = (key) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
};

export default useGetParams;
