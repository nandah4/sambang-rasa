import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import ScrollTop from "./helper/ScrollTop";

const AppLayout = () => {
  const location = useLocation();
  const currPath = location.pathname;
  const [isUlasan, setIntoUlasan] = useState(null);

  return (
    <>
      <ScrollTop />
      <Header setUlasan={setIntoUlasan} path={currPath} />
      <Outlet isUlasan={isUlasan} setUlasan={setIntoUlasan} />
      <Footer />
    </>
  );
};
export default AppLayout;
