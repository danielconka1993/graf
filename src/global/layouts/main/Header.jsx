import { NavLink } from "react-router-dom";
import "./css/Header/Header.css";
import { useState } from "react";
import { HiMenu, HiHome } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa6";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className="nav-header">
        <div></div>

        <button
          className="humburger-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenu className="hamburger-icon" />
        </button>
      </div>

      <div className="nav-box">
        <nav className={`${showMenu ? "show" : "hide"}`}>
          <NavLink onClick={hideMenu} to="/graf">
            <FaChartLine /> Graf
          </NavLink>

          <NavLink onClick={hideMenu} to="/">
            <HiHome /> Domu
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
