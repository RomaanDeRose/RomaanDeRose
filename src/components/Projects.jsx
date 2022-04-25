import React from "react";
import { motion } from "framer-motion";
import gamesShop from "../assets/ecommerce.png";
import Ruleta from "../assets/ruleta.png";
import MathsApp from "../assets/maths-app.png";
import ToDoList from "../assets/todo-list.png";
import GuessNumber from "../assets/number.png";
import EconomyTricks from "../assets/economy.png";
import TrophyDeportes from "../assets/trophy.png";
import CardProject from "./CardProject";
import "./Projects.css";

// AGREGAR FRAMER MOTION

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -350 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
      className="projects"
    >
      <h2>
        Proyectos<span>.</span>
      </h2>
      <div className="container-projects">
        <CardProject
          imgProject={gamesShop}
          titleProject={"Ecommerce Games Shop"}
          descriptionProject={"Tienda de videojuegos"}
        />
        <CardProject
          imgProject={Ruleta}
          titleProject={"Ruleta Americana"}
          descriptionProject={"Ruleta Americana - Casino"}
        />
        <CardProject
          imgProject={MathsApp}
          titleProject={"Maths App"}
          descriptionProject={"Aplicación de matemáticas"}
        />
        <CardProject
          imgProject={ToDoList}
          titleProject={"To Do List"}
          descriptionProject={"Lista de tareas"}
        />
        <CardProject
          imgProject={GuessNumber}
          titleProject={"Guess Number"}
          descriptionProject={"Juego de 'Adivina el número'"}
        />
        <CardProject
          imgProject={EconomyTricks}
          titleProject={"Economy Tricks"}
          descriptionProject={"Landing page de economía"}
        />
        <CardProject
          imgProject={TrophyDeportes}
          titleProject={"Trophy Deportes"}
          descriptionProject={"Ecommerce de artículos deportivos (HTML - CSS)"}
        />
      </div>
    </motion.section>
  );
}

export default Projects;
