import { useSelector } from "react-redux";
import Layout from "../components/customs/Layout";
import useLoadData from "../hooks/useLoadData"
import { useLocation } from "react-router-dom";
import { AUTH_VALIDATE } from "../constants/AuthConstant";
import AdminLayout from "../components/customs/admin/AdminLayout";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = rest.auth;
    const loading = useLoadData();
    const currentUser = useSelector((store) => store.auth.currentUser);

    const location = useLocation();
    if (AUTH_VALIDATE.ALL !== auth) {
        if (loading) {
            return <Layout>
                <div className="w-full flex justify-center" style={{ height: "550px" }}>
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
                </div>
            </Layout>;
        }
        if (Object.keys(currentUser).length === 0) {
            // save current page
            localStorage.setItem("rememberPage", location.pathname);
            window.location.href = "/login";
        }
    }

    // if (location.pathname.includes("/manage")) {
    //     return (
    //         <AdminLayout>
    //             <Component {...rest} />
    //         </AdminLayout>
    //     )
    // }

    return (
        <Layout>
            <Component {...rest} />
        </Layout>
    )
}
export default PrivateRoute;