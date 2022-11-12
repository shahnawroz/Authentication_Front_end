import { Link } from "react-router-dom";
import image from "../../image/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="main-navbar-container">
      <div className="main-navbar">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={image} alt="logo" />
            </Link>
          </div>
          <div className="menu-items">
            <Link to="/login">
              <ul>
                <li>Login</li>
              </ul>
            </Link>
            <Link to="/register">
              <ul>
                <li>Register</li>
              </ul>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
