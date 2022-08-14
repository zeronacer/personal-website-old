import React from "react";
import { graphql } from "gatsby";

export function Head() {
  return (
    <>
      <title>Projekt | Maximilian Grabau</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </>
  );
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <main className="project-container">
      <article className="content">
        <a href="/">Zurück</a>
        <h1 className="project-title">{frontmatter.title}</h1>
        <div className="project-details">
          <span className="project-date">{frontmatter.date}</span>
          <ul className="pills">
            {frontmatter.tags.map((tag) => {
              return <li>{tag}</li>;
            })}
          </ul>
        </div>

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
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
        tags
      }
    }
  }
`;
