import { createContext, useEffect, useState } from "react";
import { getToken } from "../modules/auth/Login/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const initAuth = async () => {
            try {
                // const res = await getMyAccount();
                // setUser(res);
            } catch (error) {
                console.log("error", error);
            }
        };
        initAuth();
    }, []);

    const handleLogin = async (data) => {
        try {
            const res = await getToken(data);
            const { user } = res;
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    };


    const values = {
        user,
        setUser,
        login: handleLogin,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
