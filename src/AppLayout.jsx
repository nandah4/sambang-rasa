import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";

const AppLayout = () => {
  const location = useLocation();
  const currPath = location.pathname;
  return (
    <>
      <Header path={currPath} />
      <Outlet />
    </>
  );
};
export default AppLayout;
