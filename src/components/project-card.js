import React from "react";

export default function ProjectCard({
  title = "",
  subtitle = "",
  date = "",
  jobTitle = "",
  cardImg = {},
  cardImgAlt = "",
  description = "",
  links = {}
}) {
  return (
    <div id="project-card">
      <div id="project-card-header">
        <h1 id="project-card-title">{title}</h1>
        <h2 id="project-card-subtitle">{subtitle}</h2>
        <h3 id="project-card-job-title">{jobTitle}</h3>
        <p id="project-card-date">{date}</p>
      </div>
      <div id="project-card-body">
        <img id="project-card-img" src={cardImg} alt={cardImgAlt}></img>
        <p id="project-card-description">{description}</p>
      </div>
      <ul id="project-card-links">
        {links.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>
    </div>
  );
}
