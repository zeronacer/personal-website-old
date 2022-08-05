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
			}).setClassToggle('#home-link', 'active')

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
			<section id="home">
				<div className="content">
          <h1 id="heading" className="">Maximilian Grabau</h1>
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