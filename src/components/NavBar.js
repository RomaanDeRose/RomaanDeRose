import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";

function NavBar() {
  const [navMenu, setNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-mobile">
        <FontAwesomeIcon
          icon={faBars}
          className="icon-menu"
          onClick={toggleNavMenu}
        />
        <nav className={navMenu ? "nav-mobile nav-active" : "nav-mobile"}>
          <NavLink className="a" to="/" onClick={toggleNavMenu}>
            Home
          </NavLink>
          <NavLink className="a" to="/about" onClick={toggleNavMenu}>
            About
          </NavLink>
          <NavLink className="a" to="/projects" onClick={toggleNavMenu}>
            Projects
          </NavLink>
          <NavLink className="a" to="/contact" onClick={toggleNavMenu}>
            Contact
          </NavLink>
          <div className="social">
            <a
              href="https://github.com/RomaanDeRose"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="social-icon" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/roman-de-rose-frontend/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
