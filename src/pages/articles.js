import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ArticlesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "typewriter.jpg" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Articles" />
      <Img
        className="h-32 sm:h-64"
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      />
      <h1>Articles</h1>
    </Layout>
  )
}

export default ArticlesPage
