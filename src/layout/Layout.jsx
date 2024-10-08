import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
