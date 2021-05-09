import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { PortfolioInterface } from "../../utils/interfaces"
import Img from "gatsby-image"

const ProjectHome: React.FC<{ data: PortfolioInterface }> = ({
  data: {
    contact: {
      siteMetadata: { contact },
    },
    projects: { nodes },
  },
}) => {
  console.log(contact, nodes)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {nodes.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <Img
                  fluid={project.frontmatter.thumb.childrenImageSharp[0].fluid}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export default ProjectHome
export const query = graphql`
  query ProjectPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          thumb {
            childrenImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
