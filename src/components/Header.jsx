import NavbarMenu from "../components/ui/NavbarMenu";
import Logo from "../assets/Group3.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroller, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(() => scrollTop > 100)
    }
    
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
   },[])

  return (
    <header className={`w-full h-20 fixed z-50 ${isScroller ? "bg-white" : "bg-transparent"}`}>
      <div className="flex items-center justify-center h-full px-5 top-0 right-0 left-0">
        <div className="flex justify-between max-w-7xl w-full items-center">
            {/* Logo */}
          <section className="flex gap-x-3 items-center justify-center">
            <div className="h-12 w-12 overflow-hidden">
            <img src={Logo} alt="Sambang Rasa Logo" className="w-full h-full object-contain"/>
            </div>
            <h2 className="text-xl text-white font-semibold font-montserrat">
              Sambang Rasa.
            </h2>
          </section>

          {/* Navbar Menu */}
          <div className="hidden md:block">
            <NavbarMenu></NavbarMenu>
          </div>

          {/* Register Button */}
          <section className="hidden md:block">
            <div className=" border cursor-pointer hover:shadow-slate-600 shadow-xs border-slate-300 hover:border-none hover:rounded-lg hover:bg-[#FEBA17] transition-all duration-300 rounded-md w-24 py-2 flex justify-center">
            <p className="font-montserrat text-[13px] text-white">Register</p>
            </div>
          </section>

          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>

          <div
            className={`bg-amber-500 p-5 md:hidden absolute top-20 left-0 w-full transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col-reverse gap-y-3">
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
