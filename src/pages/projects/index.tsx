import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { PortfolioInterface } from "../../utils/interfaces"

const ProjectHome: React.FC<{
  data: {
    projects: { nodes: PortfolioInterface[] }
    contact: {
      siteMetadata: {
        contact: string
      }
    }
  }
}> = ({
  data: {
    projects: { nodes: portfolio },
    contact: {
      siteMetadata: { contact },
    },
  },
}) => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {portfolio.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
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
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
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
