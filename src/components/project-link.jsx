import React from "react";
import { Link } from "gatsby";

const ProjectLink = ({ project }) => (
  <div className="project-link-wrapper">
    <Link to={project.frontmatter.slug} className="project-link">
      <div className="project-details">
        <h3 className="project-title">{project.frontmatter.title}</h3>
        <span className="project-date">{project.frontmatter.date}</span>
      </div>
      <ul className="pills">
        {project.frontmatter.tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    </Link>
  </div>
);

export default ProjectLink;
