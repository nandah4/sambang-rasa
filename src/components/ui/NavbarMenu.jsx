import { NavLink, Link } from "react-router";

const NavbarMenu = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-14">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
          >
            Beranda
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
          >
            Explore Wayang
          </NavLink>

          <NavLink
            to="/mentorship"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
          >
            Mentorship
          </NavLink>
          <NavLink
            to="/reward"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
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
