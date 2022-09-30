import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import PageTransition from "gatsby-plugin-page-transitions";

export function Head() {
  return (
    <SEO>
      <title>Projekt | Maximilian Grabau</title>
    </SEO>
  );
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <PageTransition>
      <main className="project-container">
        <article className="content">
          <a href="/">Zurück</a>
          <h1 className="project-title">{frontmatter.title}</h1>
          <div className="project-details">
            <span className="project-date">{frontmatter.date}</span>
            <ul className="pills">
              {frontmatter.tags.map((tag) => {
                return <li key={tag}>{tag}</li>;
              })}
            </ul>
          </div>
          <img className="project-image" src={frontmatter.image} />
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
    </PageTransition>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        slug
        title
        image
        tags
      }
    }
  }
`;
