module.exports = {
  siteMetadata: {
    siteUrl: `https://grabau.dev`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/project-pages`,
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass'
  ],
}
