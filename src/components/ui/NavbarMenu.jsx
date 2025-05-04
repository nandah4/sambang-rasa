import { NavLink, Link } from "react-router";

const NavbarMenu = (props) => {
  return (
    <>
      <nav>
        <ul className="flex flex-col md:flex-row  md:justify-between gap-4 md:gap-14">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `nav-item-active ${
                    props.scroller ? "text-[#393E46]" : "text-white"
                  }`
                : `nav-item ${props.scroller ? "text-[#393E46]" : "text-white"}`
            }
          >
            Beranda
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? `nav-item-active ${
                    props.scroller ? "text-[#393E46]" : "text-white"
                  }`
                : `nav-item ${props.scroller ? "text-[#393E46]" : "text-white"}`
            }
          >
            Explore Wayang
          </NavLink>

          <NavLink
            to="/mentorship"
            className={({ isActive }) =>
              isActive
                ? `nav-item-active ${
                    props.scroller ? "text-[#393E46]" : "text-white"
                  }`
                : `nav-item ${props.scroller ? "text-[#393E46]" : "text-white"}`
            }
          >
            Mentorship
          </NavLink>
          <NavLink
            to="/reward"
            className={({ isActive }) =>
              isActive
                ? `nav-item-active ${
                    props.scroller ? "text-[#393E46]" : "text-white"
                  }`
                : `nav-item ${
                    props.scroller ? "text-[#393E46] nav-item" : "text-white "
                  }`
            }
          >
            Reward
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMenu;
