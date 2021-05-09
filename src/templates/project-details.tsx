import Layout from "../components/Layout"
import React from "react"
import Img from "gatsby-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"
import { ProjectTemplateInterface } from "../utils/interfaces"

const ProjectDetails: React.FC<{ data: ProjectTemplateInterface }> = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, stack, featuredImg },
    },
  },
}) => {
  console.log(featuredImg)
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childrenImageSharp[0].fluid.src} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={styles.html}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectTemplate($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
