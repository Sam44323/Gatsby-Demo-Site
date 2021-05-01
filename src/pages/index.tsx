import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

const Home: React.FC<{
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}> = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & web developer based in Manchester</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img
          src="/banner.png"
          alt="banner-image"
          style={{ maxWidth: "100%" }}
        />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
