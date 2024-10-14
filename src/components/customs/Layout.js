import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { routes } from "../../routes/router";
import Login from "../../modules/auth/Login/Login";
import Signup from "../../modules/auth/Login/Register";
import CallButton from "../../modules/callButton/CallButton";

const Layout = ({ children }) => {
  const location = useLocation();

  const pageHidenMenu = {
    [routes.login.path]: <Login />,
    [routes.signup.path]: <Signup />
  };

  const isHiddenMenuPage = Object.keys(pageHidenMenu).includes(location.pathname);

  if (isHiddenMenuPage) {
    return (
      <div className="flex flex-col min-h-screen">
        {pageHidenMenu[location.pathname]}
        <CallButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-[80px] md:pt-[170px]">{children}</main>
      <Footer />
      <CallButton />
    </div>
  );
};

export default Layout;
