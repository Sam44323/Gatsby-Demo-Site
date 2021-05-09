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
