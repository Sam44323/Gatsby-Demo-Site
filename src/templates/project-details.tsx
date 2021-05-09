import Layout from "../components/Layout"
import React from "react"
import Img from "gatsby-image"
import * as styles from "../styles/project-details.module.css"

const ProjectDetails: React.FC = () => {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>{/* <Img fluid={""} /> */}</div>
        {/* <div dangerouslySetInnerHTML={} className={styles.html} /> */}
      </div>
    </Layout>
  )
}

export default ProjectDetails
