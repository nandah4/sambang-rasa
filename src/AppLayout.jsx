import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppLayout = () => {
  const location = useLocation();
  const currPath = location.pathname;
  return (
    <>
      <Header path={currPath} />
      <Outlet />
      <Footer />
    </>
  );
};
export default AppLayout;
