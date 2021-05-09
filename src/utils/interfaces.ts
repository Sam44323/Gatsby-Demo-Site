interface PortfolioObjectInterface {
  frontmatter: {
    slug: string
    stack: string
    title: string
    thumb: {
      childrenImageSharp: { fluid: { src: string } }[]
    }
  }
  id: string
}

export interface PortfolioInterface {
  contact: {
    siteMetadata: {
      contact: string
    }
  }
  projects: {
    nodes: PortfolioObjectInterface[]
  }
}

export interface ProjectTemplateInterface {
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
      stack: string
      featuredImg: {
        childrenImageSharp: { fluid: { src: string } }[]
      }
    }
  }
}
