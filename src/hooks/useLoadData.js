import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../modules/auth/Login/api";

export default function useLoadData() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.auth.isLogin);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataUser = async () => {
      if (!isAuthenticated) {
        await dispatch(getUserData());
      }
      setLoading(false);
    };

    fetchDataUser();
  }, [isAuthenticated, dispatch]);

  return loading;
}
