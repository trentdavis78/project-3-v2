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
              <div className="col s12 m8 l8">
                {data.allStrapiArticle.edges.map(document => (
                <div key={document.node.id}>                  
                  <Img fluid={document.node.image.childImageSharp.fluid}/>
                  <h4>
                    <Link to={`/articles/${document.node.id}`}>{document.node.title}</Link>
                  </h4>
                </div>
              ))}
            </div>
            <div className="col s12 m4 l4">
                {data.allStrapiArticle.edges.map(document => (
                <div key={document.node.id}>                  
                  <Img fluid={document.node.image.childImageSharp.fluid}/>
                  <h6>
                    <Link to={`/articles/${document.node.id}`}>{document.node.title}</Link>
                  </h6>
                </div>
              ))}
            </div>
            </div>
          </div>
          <div className="col m3 l3 hide-on-small-only blue" style={{minHeight:600}}></div>
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