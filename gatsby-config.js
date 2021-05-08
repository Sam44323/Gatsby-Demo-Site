/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-transformer-remark", // transform the markdown files into more useful data
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "Web Warrior",
    description: "web dev portfolio",
    copyright: "This website is copyright 2021 Web Warrior",
    contact: "me@thewebwarrioruk.com",
  },
}
