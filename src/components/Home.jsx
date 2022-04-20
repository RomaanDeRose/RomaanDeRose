import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import roman from "../assets/yo.jpg";
import js from "../assets/js.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import firebase from "../assets/firebase.png";
import "./Home.css";

// AGREGAR FRAMER MOTION

function Home() {
  return (
    <section className="home">
      <motion.article
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="home-article"
      >
        <img
          src={roman}
          alt="roman de rose frontend"
          className="home-article__img"
        />
        <img src={js} alt="logo-js" className="img-skills" />
        <img src={sass} alt="logo-sass" className="img-skills" />
        <img src={react} alt="logo-recat" className="img-skills" />
        <img src={firebase} alt="logo-firebase" className="img-skills" />
      </motion.article>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", delay: 0.5 }}
        className="home-container-text"
      >
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
      </motion.div>
    </section>
  );
}

export default Home;
