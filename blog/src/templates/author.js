import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import Img from 'gatsby-image'
import linkedin from "../images/icons/linkedin.svg" 
import twitter from "../images/icons/twitter.svg" 
import github from "../images/icons/github.svg" 
import facebook from "../images/icons/facebook.svg" 
import www from "../images/icons/www.svg"
const UserTemplate = ({ data }) => (

    <Layout>
        <Section styleName={"bg-white"}>
            <RowContainer color={"white"}>
                <div className="col s12 m6 l6 xl6">
                    <div className="card author-card">
                        <div className="card-image waves-effect waves-block waves-light" 
                        style={{left:"50%",
                                transform:"translateX(-50%)",
                                top:"2rem",
                                marginBottom:50
                                }}>
                            <Img style={{borderRadius:"50%"}} fluid={data.details.image.childImageSharp.fluid} />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">
                                {data.strapiUser.username}<i className="material-icons right">more_vert</i>
                            </span>
                            <p style={{padding:".33rem .2rem 1rem"}}>{data.details.title}</p>
                            <div class="card-action">
                            <ul className="social-icons">
                                <li>
                                    { //Check if message failed
                                        (data.details.linkedin === 'disabled')
                                        ?  <img className="disabled" src={linkedin} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" href={data.details.linkedin} alt="LinkedIn"><img src={linkedin} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                                <li>
                                    { //Check if message failed
                                        (data.details.github === 'disabled')
                                        ?  <img className="disabled" src={github} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" href={data.details.github} alt="Github"><img src={github} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                                <li>
                                    { //Check if message failed
                                        (data.details.twitter === 'disabled')
                                        ?  <img className="disabled" src={twitter} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" href={data.details.twitter} alt="Twitter"><img src={twitter} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                                <li>
                                    { //Check if message failed
                                        (data.details.facebook === 'disabled')
                                        ?  <img className="disabled" src={facebook} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" href={data.details.facebook} alt="Facebook"><img src={facebook} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                                <li>
                                    { //Check if message failed
                                        (data.details.www === 'disabled')
                                        ?  <img className="disabled" src={www} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" href={data.details.www} alt="Website"><img src={www} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                            </ul>
                        </div>
                        </div>
                        
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Bio<i className="material-icons right">close</i></span>
                            <p>{data.details.bio}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6 xl6">
                    <h5>More From This Author..</h5>
                    <ul>
                        {data.strapiUser.articles.map(article => (
                            <li key={article.id}>
                                <h6>
                                    <Link to={`articles/Article_${article.id}`}>{article.title}</Link>
                                </h6>

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
             fluid(maxWidth: 200) {
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
         title
         bio
         linkedin
         facebook
         twitter
         github
         www
    }
  }
` 