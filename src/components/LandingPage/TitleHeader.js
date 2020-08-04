import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const TitleHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "skyline.jpg" } }) {
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
    <div className="text-center">
      <Img
        className="h-32 sm:h-64"
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      />
      <h1 className="text-5xl p-8 md:pt-16 md:pb-8">Hi, I'm Ben 👋</h1>
      <h3 className="text-xl">
        Welcome to my website all about{' '}
        <span className="font-semibold border-b-2 text-indigo-500 bg-indigo-100 p-2 rounded">
          urban planning
        </span>{' '}
        and some other passions of mine. Enjoy!
      </h3>
    </div>
  )
}
