import React from "react";
import { useEffect } from "react";
import gsap, { Linear } from "gsap";
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
    gsap.to("#blob1", {
      rotation: "360",
      ease: Linear.easeNone,
      repeat: -1,
      duration: 90,
    });

    gsap.to("#blob2", {
      rotation: "-360",
      ease: Linear.easeNone,
      repeat: -1,
      duration: 80,
    });

    gsap.to("#scrollindicator", {
      duration: .8,
      y: 5,
      ease: "circ.in",
      repeat: -1,
      yoyo: true
    })
  }, []);

  const mailLink = "mailto:max@grabau.dev";

  return (
    <PageTransition>
      <Layout>
        <section id="home" className="bg-pattern text-primary">
          <div className="content">
            <div className="heading">
              <span id="name-subheading">Hi, ich bin</span>
              <h1 id="name-heading">Maximilian</h1>
            </div>
            <ul className="pills pills--large">
              <li><h2>Web Development</h2></li>
              <li><h2>Symfony</h2></li>
              <li><h2>WordPress</h2></li>
              <li><h2>UI/UX</h2></li>
            </ul>
            <a href="#about" className="scroll-indicator" id="scrollindicator">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </a>
            <img src="blob1.svg" className="blob" id="blob1" />
            <img src="blob2.svg" className="blob" id="blob2" />
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
            <h3>Skills</h3>
            <ul className="pills pills--large pills--slider">
              <li>PHP</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS (Sass, Less)</li>
              <li>Symfony</li>
              <li>React</li>
              <li>SQL</li>
              <li>GraphQL</li>
              <li>GSAP</li>
              <li>Versionsverwaltung (Git)</li>
            </ul>
            <h3>Tools</h3>
            <ul className="pills pills--large pills--slider">
              <li>Jira</li>
              <li>Visual Studio Code</li>
              <li>PHPStorm</li>
              <li>WordPress</li>
              <li>Github</li>
              <li>Office 365</li>
              <li>Figma / Penpot</li>
              <li>Linux Shell</li>
            </ul>
          </div>
        </section>
        <section id="projects">
          <div className="content">
            <h2>Projekte</h2>
            <div className="grid">{Projects}</div>
          </div>
        </section>
        <section id="contact" className="bg-secondary text-primary section--compact">
          <div className="content">
            <h2>Kontakt</h2>
            <p>
              Denkst du, dass meine Ambitionen zu deiner Firma und/oder deinem
              Projekt passen? Dann schreib mir gern eine Nachricht!
            </p>
            <div className="button-group">
              <a href={mailLink} className="button">
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
        <footer>
          <span className="copyright">© 2022 Maximilian Grabau</span>
          <span className="built-by">Gemacht mit ❤️ von <a href="#home">mir</a></span>
          <a className="to-top" href="#home">nach oben</a>
        </footer>
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
