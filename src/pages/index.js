import React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import ScrollMagic from "scrollmagic"
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

    useEffect(() => {
			let controller = new ScrollMagic.Controller();

			let home_scene = new ScrollMagic.Scene({
				triggerElement: '#home',
        duration: '100%'
			}).setClassToggle('#home-link', 'text-primary')

      let about_scene = new ScrollMagic.Scene({
				triggerElement: '#about',
        duration: '100%'
			}).setClassToggle('#about-link', 'active')

      let projects_scene = new ScrollMagic.Scene({
				triggerElement: '#projects',
        duration: '100%'
			}).setClassToggle('#projects-link', 'active')

      let contact_scene = new ScrollMagic.Scene({
				triggerElement: '#contact',
        duration: '100%'
			}).setClassToggle('#contact-link', 'active')

      controller.addScene([
        home_scene, about_scene, projects_scene, contact_scene
      ])
		}, []);
    
  return (
		<Layout>
			<section id="home" className="bg-pattern text-primary">
				<div className="content">
          <span id="name-subheading">Hi, ich bin</span>
          <h1 id="name-heading">Maximilian</h1>
          <ul className="pills pills-large">
            <li>Symfony</li>
            <li>WordPress</li>
            <li>React</li>
            <li>UI/UX</li>
          </ul>
        </div>
			</section>
			<section id="about" className="bg-primary">
				<div className="content">
          <h2>Über mich</h2>
        </div>
			</section>
			<section id="projects" className="bg-secondary-light text-primary">
				<div className="content">
          <h2>Projekte</h2>
          <div className="grid">
            {Projects}
          </div>
        </div>
			</section>
			<section id="contact" className="bg-primary">
				<div className="content">
          <h2>Kontakt</h2>
        </div>
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
            tags
          }
        }
      }
    }
  }
`