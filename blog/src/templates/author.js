import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import Img from 'gatsby-image'


const UserTemplate = ({ data, pageContext }) => (
    
    <Layout>
        <Section styleName={"bg-white"}>
            <RowContainer color={"white"}>
                <div className="col s12 m6 l6 xl6">
                    <h2>{data.strapiUser.username}</h2>
                    <Img fluid={data.details.image.childImageSharp.fluid} /> 
                </div>
                <div className="col s12 m6 l6 xl6">
                    <ul>
                        {data.strapiUser.articles.map(article => (
                            <li key={article.id}>
                                <h4>
                                    <Link to={`/Article_${article.id}`}>{article.title}</Link>
                                </h4>
                                <p>{article.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </RowContainer>
        </Section>
    </Layout>
)
  
export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!, $user: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
      }
    }
    details: strapiUserdetails(id: { eq: $user }) {
        id
        image {
            childImageSharp {
             fluid(maxWidth: 1000) {
               base64
               tracedSVG
               aspectRatio
               src
               srcSet
               srcWebp
               srcSetWebp
               sizes
               originalImg
               originalName
             }
           }
         }
    }
  }
` 