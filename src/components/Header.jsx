import NavbarMenu from "../components/ui/NavbarMenu";
import Logo from "../assets/logo/logo-final-banget.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { NavLink, Link } from "react-router";
import { DataProvider } from "../App";

export default function Header(props) {
  const { setUlasan } = useContext(DataProvider);
  const [isOpen, setIsOpen] = useState(false);
  const [isScroller, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(() => scrollTop > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full h-[86px] fixed z-[2000] ${
        isScroller
          ? "bg-white shadow-sm"
          : props.path == "/reward"
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-center h-full px-3 top-0 right-0 left-0">
        <div className="flex justify-between max-w-7xl w-full items-center">
          {/* Logo */}
          <section className="flex gap-x-2 items-center justify-center">
            <div className="h-14 w-14 overflow-hidden">
              <img
                src={Logo}
                alt="Sambang Rasa Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2
              className={`text-xl hidden xs:block font-medium font-montserrat ${
                isScroller ? "title-color" : "text-white"
              }`}
            >
              Sambang Rasa
            </h2>
          </section>

          {/* Navbar Menu */}
          <div className="hidden md:block">
            <NavbarMenu scroller={isScroller} path={props.path}></NavbarMenu>
          </div>

          {/* Ulasan Button */}
          <NavLink to={"/"} onClick={() => setUlasan("ulasan")}>
            <section className="hidden md:block">
              <div className="group cursor-pointer border-slate-300 transition-all duration-300 rounded-md flex justify-center items-center gap-x-3">
                <p
                  className={`font-montserrat group-hover:font-medium text-[13px] ${
                    isScroller ? "title-color" : "text-white"
                  }`}
                >
                  Bagikan Cerita
                </p>
                <div
                  className={`${
                    isScroller ? "bg-[#FFB200]" : "bg-white"
                  } rounded-md p-2 group-hover:bg-[#FFB200] `}
                >
                  <FaRegPenToSquare
                    size={17}
                    className={`${
                      isScroller ? "text-white" : "title-color"
                    } text-base group-hover:text-white`}
                  />
                </div>
              </div>
            </section>
          </NavLink>

          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes
                className={`${isScroller ? "title-color" : "text-white"}`}
                size={23}
              />
            ) : (
              <FaBars
                className={`${isScroller ? "title-color" : "text-white"}`}
                size={23}
              />
            )}
          </div>

          <div
            className={`px-3 md:hidden absolute top-24 left-0 w-full transition-all duration-500 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col-reverse gap-y-3 w-full px-5 py-5 bg-white rounded-lg shadow-lg">
              <NavbarMenu isOpen={isOpen} />
              <NavLink to={"/"} onClick={() => setUlasan("ulasan")}>
                {" "}
                <section className="border-b border-b-gray-300 pb-3">
                  <p className="font-montserrat text-center text-sm">
                    Bagikan Cerita
                  </p>
                </section>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
