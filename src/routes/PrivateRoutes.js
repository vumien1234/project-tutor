import Layout from "../components/customs/Layout";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Layout>
            <Component {...rest} />
        </Layout>
    )
}
export default PrivateRoute;

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const isAuthenticated = true; // Thay đổi điều kiện xác thực phù hợp

//     return (
//         <Route
//             {...rest}
//             element={isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />}
//         />
//     );
// };
