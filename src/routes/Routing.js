import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import { routes } from "./router";
import NotFound from "../not-found";

const Routing = () => {
    const routeComponents = Object.values(routes).flatMap((value) => [
        <Route
            key={value.path}
            path={value.path}
            element={<PrivateRoute title={value.title} auth={value.auth} component={value.component} />}
        />,
        ...(value.children || []).map((child) => (
            <Route
                key={child.path}
                path={child.path}
                element={<PrivateRoute title={child.title} auth={value.auth} component={child.component} />}
            />
        )),
    ]);

    return (
        <Router>
            <Routes>
                {routeComponents}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default Routing;
