import { NavLink, Link } from "react-router";

const NavbarMenu = (props) => {
  return (
    <>
      <nav className="">
        <ul className="flex flex-col md:flex-row  md:justify-between gap-y-6 md:gap-14">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `nav-item-active ${
                    props.scroller
                      ? "title-color nav-item-active-border"
                      : props.isOpen
                      ? "title-color font-medium text-center"
                      : "nav-item-active-border text-white"
                  }`
                : `nav-item ${
                    props.scroller
                      ? "title-color"
                      : props.isOpen
                      ? // ? "title-color text-center"
                        // : props.path != "/"
                        "title-color text-center"
                      : "text-white"
                  }`
            }
          >
            Beranda
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? `nav-item-active ${
                    props.scroller
                      ? "title-color nav-item-active-border"
                      : props.isOpen
                      ? "title-color font-medium text-center"
                      : "nav-item-active-border text-white"
                  }`
                : `nav-item ${
                    props.scroller
                      ? "title-color"
                      : props.isOpen
                      ? "title-color text-center"
                      : "text-white"
                  }`
            }
          >
            Explore Wayang
          </NavLink>

          <NavLink
            to="/mentorship"
            className={({ isActive }) =>
              isActive
                ? `nav-item-active ${
                    props.scroller
                      ? "title-color nav-item-active-border"
                      : props.isOpen
                      ? "title-color font-medium text-center"
                      : "text-white nav-item-active-border"
                  }`
                : `nav-item ${
                    props.scroller
                      ? "title-color"
                      : props.isOpen
                      ? "title-color text-center"
                      : "text-white"
                  }`
            }
          >
            Mentorship
          </NavLink>
          <NavLink
            to="/reward"
            className={({ isActive }) =>
              isActive
                ? `nav-item-active ${
                    props.scroller
                      ? "title-color nav-item-active-border"
                      : props.isOpen
                      ? "title-color font-medium text-center"
                      : "nav-item-active-border text-white"
                  }`
                : `nav-item ${
                    props.scroller
                      ? "title-color"
                      : props.isOpen
                      ? "title-color text-center"
                      : "text-white"
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
