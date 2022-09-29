import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectLink from "../components/project-link";
import SEO from "../components/seo";
import PageTransition from "gatsby-plugin-page-transitions";

export function Head() {
  return (
    <SEO>
      <title>Maximilian Grabau</title>
      <meta
        name="description"
        content="Hi, ich bin Maximilian Grabau. Als Full-Stack-Webentwickler aus Lübeck arbeite ich mithilfe von PHP, React und WordPress daran, das Netz zu einem besseren Ort zu machen."
      />
    </SEO>
  );
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <ProjectLink key={edge.node.id} project={edge.node} />);

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    gsap.registerPlugin(ScrollTrigger);
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: "#" + section,
        start: "-10% top",
        end: "90% top",
        toggleClass: {
          targets: "#" + section + "-link .navLink",
          className: "active",
        },
      });
    });
  }, []);

  return (
    <PageTransition>
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
            <p>
              Seit ich im Alter von 9 Jahren (ca. 2008) gemeinsam mit meinem
              Vater meine erste Website gestaltet und veröffentlicht hatte, war
              es mein Ziel, Programmierer zu werden.
            </p>
            <p>
              Mein Ziel ist es seitdem, Menschen mit Software den Alltag zuhause
              und im Büro leichter, produktiver und unbeschwerter zu machen.
              Eine nutzerorientierte Digitalisierung von Prozessen sowie Freude
              bei der Benutzung sind die Kriterien, die meiner Meinung nach
              ausschlaggebend für die Qualität von Software sind.
            </p>
            <p>
              <strong>
                Die beste Anwendung bringt Niemandem etwas, wenn sie ungern oder
                erst gar nicht benutzt wird.
              </strong>
            </p>
          </div>
        </section>
        <section id="projects" className="bg-secondary-light text-primary">
          <div className="content">
            <h2>Projekte</h2>
            <div className="grid">{Projects}</div>
          </div>
        </section>
        <section id="contact" className="bg-primary">
          <div className="content">
            <h2>Kontakt</h2>
            <p>
              Denkst du, dass meine Ambitionen zu deiner Firma und/oder deinem
              Projekt passen? Dann schreib mir gern eine Nachricht!
            </p>
            <div className="button-group">
              <a href="mailto:max@grabau.dev" className="button">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
                Email
              </a>
              <a
                href="https://www.xing.com/profile/Maximilian_Grabau"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Xing
              </a>
              <a
                href="https://github.com/zeronacer"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default IndexPage;

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
`;
