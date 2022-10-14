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
    <div id="project-card-background">
      <div id="project-card">
        <div id="header-date-container">
          <h1 id="project-card-title">{title}</h1>
          <p id="project-card-date">{date}</p>
        </div>
        <h2 id="project-card-subtitle">{subtitle}</h2>
        <h3 id="project-card-job-title">{jobTitle}</h3>
        <img id="project-card-img" src={cardImg} alt={cardImgAlt}></img>
        <p id="project-card-description">{description}</p>
        <div id="project-card-links">{links}</div>
      </div>
    </div>
  );
}
