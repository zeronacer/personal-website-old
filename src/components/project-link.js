import React from "react"
import { Link } from "gatsby"

const ProjectLink = ({ project }) => (
  <div>
    <Link to={project.frontmatter.slug}>
      {project.frontmatter.title} ({project.frontmatter.date})
    </Link>
  </div>
)

export default ProjectLink