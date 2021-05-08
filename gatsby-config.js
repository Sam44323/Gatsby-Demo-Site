/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/notes/`,
      },
    },
  ],
  siteMetadata: {
    title: "Web Warrior",
    description: "web dev portfolio",
    cpoyright: "This website is copyright 2021 Web Warrior",
  },
}
