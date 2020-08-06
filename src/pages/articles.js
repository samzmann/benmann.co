import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ArticlesPage = () => {
  // const imageData = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: { relativePath: { eq: "typewriter.jpg" } }) {
  //       edges {
  //         node {
  //           childImageSharp {
  //             fluid(maxWidth: 1200) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const articlesData = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { contentType: { eq: "articles" } } }) {
        edges {
          node {
            frontmatter {
              author
              date
              title
              path
            }
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  `)

  console.log({ articlesData })

  return (
    <Layout>
      <SEO title="Articles" />
      {/*<Img*/}
      {/*  className="h-32 sm:h-64"*/}
      {/*  fluid={imageData.allFile.edges[0].node.childImageSharp.fluid}*/}
      {/*/>*/}
      <h1>Articles</h1>
      {articlesData.allMdx.edges.map(el => (
        <Link to={el.node.frontmatter.path} key={el.node.frontmatter.title}>
          <div className="m-4 p-4 border border-w-2 rounded-md border-gray-500">
            <h3 className="text-2xl border-b-2 border-gray-500 mb-2">
              {el.node.frontmatter.title}
            </h3>
            <p className="text-gray-700 mb-2">{el.node.frontmatter.date}</p>
            <p>{el.node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default ArticlesPage
