import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Articles = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <Section styleName={"bg-white"}>
      <RowContainer color={"white"}>
        {/* <ul>
          {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
              <h2>
                <Link to={`/articles/${document.node.id}`}>{document.node.title}</Link>
              </h2>
              <Img fluid={document.node.image.childImageSharp.fluid}/>
              <p>{document.node.content}</p>
            </li>
          ))}
        </ul> */}
        <div className="row">
          <div className="col l9">
            <div className="row">
              {data.allStrapiArticle.edges.map((document, idx) => {
                if (idx % 3 === 0) {
                  return (
                    <>
                      <div className="col s12 m8 l8 xl8">
                        <div class={`card lg-card lg-card-${idx}`} key={document.node.id} style={{top:"-4rem"}}>
                          <Img fluid={document.node.image.childImageSharp.fluid} />
                          <div class="card-action">
                            <Link to={`/articles/${document.node.id}`}>{document.node.title}</Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                } else {
                  return (
                    <div className="col s12 m4 l4 xl4">
                      <div class="card " key={document.node.id}>
                        <Img fluid={document.node.image.childImageSharp.fluid} />
                        <div class="card-action">
                          <Link to={`/articles/${document.node.id}`}>{document.node.title}</Link>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className="col m3 l3 hide-on-small-only blue" style={{ minHeight: 600 }}></div>
        </div>
      </RowContainer>
    </Section>
  </Layout>
)

export default Articles


export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          content
        }
      }
    }
  }
`