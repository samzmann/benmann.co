import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const TravelBlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "travel.jpg" } }) {
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
      <SEO title="Travel Blog" />
      <Img
        className="h-32 sm:h-64"
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      />
      <h1>Travel Blog</h1>
    </Layout>
  )
}

export default TravelBlogPage
