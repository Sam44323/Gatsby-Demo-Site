import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { PortfolioInterface } from "../../utils/interfaces"

const ProjectHome: React.FC<{
  data: { allMarkdownRemark: { nodes: PortfolioInterface[] } }
}> = props => {
  const {
    data: {
      allMarkdownRemark: { nodes: portfolio },
    },
  } = props
  console.log(portfolio)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
      </div>
    </Layout>
  )
}

export default ProjectHome
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`
