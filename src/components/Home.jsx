import React from "react";
import { Link } from "react-router-dom";
import roman from "../assets/yo.jpg";
import js from "../assets/js.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import firebase from "../assets/firebase.png";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <article className="home-article">
        <img
          src={roman}
          alt="roman de rose frontend"
          className="home-article__img"
        />
        <img src={js} alt="logo-js" className="img-skills" />
        <img src={sass} alt="logo-sass" className="img-skills" />
        <img src={react} alt="logo-recat" className="img-skills" />
        <img src={firebase} alt="logo-firebase" className="img-skills" />
      </article>
      <div className="home-container-text">
        <h1 className="home-text-title">Roman De Rose</h1>
        <p className="home-text-description">Frontend Developer</p>
        <div className="home-text-descriptionPersonal">
          <p>
            <span className="iconify" data-icon="flag:ar-4x3"></span> La Plata,
            Buenos Aires
          </p>
          <p>
            <span className="iconify" data-icon="emojione-v1:e-mail"></span>{" "}
            romandr3@gmail.com
          </p>
        </div>
        <Link to="/projects">proyectos</Link>
      </div>
    </section>
  );
}

export default Home;
