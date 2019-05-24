import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from "../components/section"
import RowContainer from "../components/rowContainer"

const UserTemplate = ({ data }) => (

    <Layout>
        <Section styleName={"bg-white"}>
            <RowContainer color={"white"}>
                <div className="col s12 m6 l6 xl6">
                    <h2>{data.strapiUser.username}</h2>
                    <h2>{data.strapiUser.details.title}</h2>
                   
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
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
      }
      details {
          title
          image {
           url
          }
      }
    }
  }
` 