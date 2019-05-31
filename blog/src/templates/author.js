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
import ReactMarkdown from "react-markdown" 


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
                             <Img  style={{borderRadius:"50%"}} fluid={data.strapiUserdetails.image.childImageSharp.fluid} />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">
                                {data.strapiUserdetails.username}<i className="material-icons right">more_vert</i>
                            </span>
                            <p style={{padding:".33rem .2rem 1rem"}}>{data.strapiUserdetails.title}</p>
                            <div class="card-action">
                            <ul className="social-icons">
                                <li>
                                    { //Check if message failed
                                        (data.strapiUserdetails.linkedin === 'disabled')
                                        ?  <img alt="LinkedIn" className="disabled" src={linkedin} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" rel="noopener noreferrer" href={data.strapiUserdetails.linkedin}><img src={linkedin} style={{width:33}} alt="LinkedIn" /></a> 
                                    }
                                   
                                </li>
                                <li>
                                    { //Check if message failed
                                        (data.strapiUserdetails.github === 'disabled')
                                        ?  <img alt="Github" className="disabled" src={github} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" rel="noopener noreferrer" href={data.strapiUserdetails.github}><img alt="Github" src={github} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                                <li>
                                    { //Check if message failed
                                        (data.strapiUserdetails.twitter === 'disabled')
                                        ?  <img alt="Twitter" className="disabled" src={twitter} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" rel="noopener noreferrer" href={data.strapiUserdetails.twitter}><img alt="Twitter" src={twitter} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                                <li>
                                    { //Check if message failed
                                        (data.strapiUserdetails.facebook === 'disabled')
                                        ?  <img alt="Facebook" className="disabled" src={facebook} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" rel="noopener noreferrer" href={data.strapiUserdetails.facebook}><img alt="Facebook" src={facebook} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                                <li>
                                    { //Check if message failed
                                        (data.strapiUserdetails.www === 'disabled')
                                        ?  <img alt="Website" className="disabled" src={www} style={{width:33,opacity:.5}} />
                                        :  <a target="_blank" rel="noopener noreferrer" href={data.strapiUserdetails.www}><img alt="Website" src={www} style={{width:33}} /></a> 
                                    }
                                   
                                </li>
                            </ul>
                        </div>
                        </div>
                        
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Bio<i className="material-icons right">close</i></span>
                            <p>{data.strapiUserdetails.bio}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6 xl6">
                    <h5>Articles By This Author</h5>
                    {data.strapiUser.articles.map(article => (
                            <div className="col s12">
                            <div className="card horizontal">
                                <div className="card-stacked">
                                <div className="card-content author-articles">
                                    <h5>{article.title}</h5>
                                    <p><ReactMarkdown  
                                        source={article.content.substring(0, 50).concat("...")}
                                        className="indexArticle"
                                        />
                                    </p>
                                </div>
                                <div className="card-action">
                                <Link to={`articles/Article_${article.id}`}>Read More...</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        ))}                    
                </div>
            </RowContainer>
        </Section>
    </Layout>
)

export default UserTemplate

export const query = graphql`
query UserDetailsQuery($id: String!, $user: String!) 
{ 
    strapiUser(id: { eq: $id }) {
        id
        username
        articles {
            id
            title
            content
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
          }
        }


        strapiUserdetails(id: {eq: $user}) {
            id
            title
            bio
            linkedin
            facebook
            twitter
            github
            www
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
          }
}
 
` 