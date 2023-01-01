import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h3 className="logo-footer">LONG RIDE</h3>
      <hr />
      <div className="footer-main">
        <div className="iconos footer-links">
          <IoLogoGithub />
          <IoLogoInstagram />
          <IoLogoLinkedin />
        </div>

        <ul className="footer-links">
          <Link to="/" className="link">
            home
          </Link>
          <div className="separador-vertical"></div>
          <Link to="/about" className="link">
            About us
          </Link>
          <div className="separador-vertical"></div>
          <Link to="/products" className="link">
            Products
          </Link>
          <div className="separador-vertical"></div>
          <Link to="/cart" className="link">
            Cart
          </Link>
        </ul>
      </div>
      <hr />
    </footer>
  );
}

export default Footer;
