import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { DataProvider } from "../App";

const ScrollTop = () => {
  const pathname = useLocation();
  const { getUlasan } = useContext(DataProvider);

  useEffect(() => {
    if (pathname === "/" || getUlasan) {
      return;
    }
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

export default ScrollTop;
