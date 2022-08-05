import React from "react"
import { Link } from "gatsby"

const ProjectLink = ({ project }) => (
  <div className="project-link-wrapper">
    <Link to={project.frontmatter.slug} className="project-link">
      
      <div class="project-details">
        <h3 className="project-title">{project.frontmatter.title}</h3>
        <span className="project-date">{project.frontmatter.date}</span>
      </div>
      <ul className="pills">
        <li>Test</li>
        <li>Test 2</li>
      </ul>
    </Link>
  </div>
)

export default ProjectLink