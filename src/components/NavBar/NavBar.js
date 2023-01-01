import { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import HamBar from "../HamBar/HamBar";
import wave from "../../assets/iconos/wave.png";

function NavBar() {
  const [navActive, setNavActive] = useState(false);

  const closeNav = () => {
    setNavActive(false);
  };
  const toogleNavActive = () => {
    navActive ? setNavActive(false) : setNavActive(true);
  };
  return (
    <nav className="nav-bar">
      <div className="logo-div">
        <img src={wave} alt="" id="wave" />
        <h1 className="nav-logo">LONG RIDE</h1>
      </div>

      <span className="ham" onClick={toogleNavActive}>
        <HamBar></HamBar>
      </span>
      <ul className={navActive ? "nav-active nav-ul" : "nav-inactive nav-ul"}>
        <Link to="/" onClick={closeNav} className="link">
          home
        </Link>
        <Link to="/about" onClick={closeNav} className="link">
          About
        </Link>
        <Link to="/products" onClick={closeNav} className="link">
          Products
        </Link>
        <Link to="/carrito" onClick={closeNav} className="link">
          Cart
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
