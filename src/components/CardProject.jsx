import React from "react";
import "./CardProject.css";

function CardProject({
  imgProject,
  titleProject,
  descriptionProject,
  urlProject,
  urlGithub,
}) {
  return (
    <div className="card">
      <article>
        <img src={imgProject} alt="" />
      </article>
      <div className="card-hover__overlay">
        <h3>{titleProject}</h3>
        <p>{descriptionProject}</p>
        <div>
          <a href={urlProject}>ver demo</a>
          <a href={urlGithub}>github</a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
