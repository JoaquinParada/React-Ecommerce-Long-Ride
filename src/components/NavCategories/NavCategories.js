import { NavLink } from "react-router-dom";
import "./navCategories.css";
function NavCategories() {
  return (
    <nav className="nav-category">
      <NavLink
        to="/products/hoddies"
        className={({ isActive }) => (isActive ? "active-nav" : undefined)}
      >
        HODDIES
      </NavLink>
      <NavLink
        to="/products/surfboards"
        className={({ isActive }) => (isActive ? "active-nav" : undefined)}
      >
        SURFBOARDS
      </NavLink>
      <NavLink
        to="/products/longboards"
        className={({ isActive }) => (isActive ? "active-nav" : undefined)}
      >
        LONGBOARDS
      </NavLink>
      <NavLink
        to="/products/t-shirt"
        className={({ isActive }) => (isActive ? "active-nav" : undefined)}
      >
        T-SHIRTS
      </NavLink>
    </nav>
  );
}

export default NavCategories;
