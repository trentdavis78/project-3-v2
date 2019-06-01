import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import ReactMarkdown from "react-markdown" 
import adImg from '../images/yourAdHere.svg'

const moment = require('moment');

const ArticleTemplate = ({ data }) => (
    <Layout>
        <Section styleName={"bg-white"}>
            <RowContainer>
                <div key={data.strapiArticle.id} className="col s12 m9 l9 white" style={{borderRadius:10}}>
                    <div className="article-wrapper">
                        <h1 className="article-heading">{data.strapiArticle.title}</h1>
                        <div className="article-info">
                            <span className="article-author">by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
                                {data.strapiArticle.author.username}
                                </Link></span>
                            <span className="article-created">{moment(data.strapiArticle.createdAt).format("MMM DD, YYYY")}</span>
                        </div>
                        <Img fluid={data.strapiArticle.image.childImageSharp.fluid} /> 
                        
                        <div className="article-content">
                          <ReactMarkdown source={data.strapiArticle.content} />
                        </div>
                    </div>
                </div>
                <div className="col m3 l3 hide-on-small-only">
                  <div className="white-text indigo darken-1" style={{minHeight:548}}> 
                      <img style={{maxWidth:242}} src={adImg} alt="Your Advertisement Could Be Here" />
                  </div>
                </div>
            </RowContainer>
        </Section>
    </Layout>
)

export default ArticleTemplate

export const query = graphql`  
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
      createdAt
    }
  }
`