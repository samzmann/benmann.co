import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "projects.jpg" } }) {
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
      <SEO title="Projects" />
      <Img
        className="h-32 sm:h-64"
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      />
      <h1>Projects</h1>
    </Layout>
  )
}

export default ProjectsPage
