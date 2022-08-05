import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectLink from "../components/project-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <ProjectLink key={edge.node.id} project={edge.node} />)

  return (
		<Layout>
			<section id="home">
				<div className="content">
          <h1 className="">Maximilian Grabau</h1>
        </div>
			</section>
			<section id="about">
				<div class="content">About</div>
			</section>
			<section id="projects">
				<div class="content">Projects{Projects}</div>
			</section>
			<section id="contact">
				<div class="content">Contact</div>
			</section>
		</Layout>
	);
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "D. MMMM YYYY")
            slug
            title
          }
        }
      }
    }
  }
`