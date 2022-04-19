import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";

function NavBar() {
  const [navMenu, setNavMenu] = useState(false);

  const toggleNavMenu = () => setNavMenu(!navMenu);

  return (
    <header className="header">
      <nav className="navbar">
        <FontAwesomeIcon
          icon={faBars}
          className="navbar-menu-hamburguer"
          onClick={toggleNavMenu}
        />
        <ul className="navbar-links">
          <NavLink to="/">
            <li>inicio</li>
          </NavLink>
          <NavLink to="/about">
            <li>sobre mi</li>
          </NavLink>
          <NavLink to="/projects">
            <li>proyectos</li>
          </NavLink>
          <NavLink to="/contact">
            <li>contacto</li>
          </NavLink>
        </ul>
        <div className="socialMedia">
          <a
            href="https://github.com/RomaanDeRose"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="socialMedia-icon" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/roman-de-rose-frontend/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="socialMedia-icon" icon={faLinkedin} />
          </a>
        </div>
      </nav>
      <div
        className={
          navMenu
            ? "navbarMobile-menu navbarMobile-menu-active"
            : "navbarMobile-menu"
        }
      >
        <ul className="navbarMobile-links">
          <NavLink to="/" onClick={toggleNavMenu}>
            <li>inicio</li>
          </NavLink>
          <NavLink to="/about" onClick={toggleNavMenu}>
            <li>sobre mi</li>
          </NavLink>
          <NavLink to="/projects" onClick={toggleNavMenu}>
            <li>proyectos</li>
          </NavLink>
          <NavLink to="/contact" onClick={toggleNavMenu}>
            <li>contacto</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
