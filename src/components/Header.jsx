import NavbarMenu from "../components/ui/NavbarMenu";
import Logo from "../assets/Group3.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroller, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(() => scrollTop > 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full pl-3 fixed z-50 ${
        isScroller ? "bg-white shadow-xs h-22" : "bg-transparent h-24"
      }`}
    >
      <div className="flex items-center justify-center h-full px-5 top-0 right-0 left-0">
        <div className="flex justify-between max-w-6xl w-full items-center">
          {/* Logo */}
          <section className="flex gap-x-3 items-center justify-center">
            <div className="h-12 w-12 overflow-hidden">
              <img
                src={Logo}
                alt="Sambang Rasa Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2
              className={`text-xl font-semibold font-montserrat ${
                isScroller ? "text-[#393E46]" : "text-white"
              }`}
            >
              Sambang Rasa.
            </h2>
          </section>

          {/* Navbar Menu */}
          <div className="hidden lg:block">
            <NavbarMenu scroller={isScroller}></NavbarMenu>
          </div>

          {/* Register Button */}
          <section className="hidden lg:block">
            <div className="group cursor-pointer border-slate-300 transition-all duration-300 rounded-md w-32 flex justify-center items-center gap-x-3">
              <p
                className={`font-montserrat text-[13px] font-medium group-hover:text-[#FEBA17] ${
                  isScroller ? "text-[#393E46]" : "text-white"
                }`}
              >
                Register
              </p>
              <div className="bg-white rounded-lg p-2 group-hover:bg-[#FEBA17]">
                <FaRegUser className="text-[#393E46] text-base group-hover:text-white" />
              </div>
            </div>
          </section>

          <div className="lg:hidden pr-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-white" size={26} />
            ) : (
              <FaBars className="text-white" size={26} />
            )}
          </div>

          <div
            className={`px-2 lg:hidden absolute top-20 left-0 w-full transition-all duration-500 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col-reverse gap-y-3 w-full px-5 py-5 bg-[#4E1F00] rounded-lg">
              <NavbarMenu></NavbarMenu>
              <section>
                <p className="font-montserrat text-sm font-medium">Register</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
