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
    <nav className="navbar">
      <FontAwesomeIcon
        icon={faBars}
        className="icon-menu"
        onClick={toggleNavMenu}
      />
      <div className="menu-bar">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre mi</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Proyectos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </div>
      <div className="socialMedia">
        <a
          href="https://github.com/RomaanDeRose"
          target="_blank"
          rel="noopener noreferrer"
          className="socialMedia__link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/roman-de-rose-frontend/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialMedia__link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className={navMenu ? "menu-mobile mobile" : "menu-mobile"}>
        <NavLink to="/" onClick={toggleNavMenu}>
          Inicio
        </NavLink>
        <NavLink to="/about" onClick={toggleNavMenu}>
          Sobre mi
        </NavLink>
        <NavLink to="/projects" onClick={toggleNavMenu}>
          Proyectos
        </NavLink>
        <NavLink to="/contact" onClick={toggleNavMenu}>
          Contacto
        </NavLink>
        <div className="socialMedia">
          <a
            href="https://github.com/RomaanDeRose"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMedia__link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/roman-de-rose-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMedia__link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
