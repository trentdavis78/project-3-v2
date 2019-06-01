import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import SEO from "../components/seo"
import resourcesImg from "../images/resources.svg"

import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const Resources = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const user = getProfile()

  return(
    <Layout>
    <SEO title="Resources" />
    <Section styleName={"bg-white"}>
      <RowContainer color={"white"}>
        <div className="row">
         <img className="hide-on-small-only" src={resourcesImg} alt="Resources" style={{width:"100%",padding: "0 .75rem"}}/>
          <div className="col l12 xl12">
            <div style={{color:"#01C954"}} className="row">
              <div className="col s12 m4 text-center">
                <div style={{padding:"1rem", margin:10, border:"1px solid #01C954", cursor:"pointer"}} >
                    <i style={{fontSize:"10rem"}} class="material-icons">library_books</i>
                    <p style={{fontSize:"2rem", margin:0}}>Manuals</p>
                  </div>
                </div>
                <div className="col s12 m4 text-center">
                <div style={{padding:"1rem", margin:10, border:"1px solid #01C954", cursor:"pointer"}} >
                    <i style={{fontSize:"10rem"}} class="material-icons">settings</i>
                    <p style={{fontSize:"2rem", margin:0}}>Tools</p>
                  </div>
                </div>
                <div className="col s12 m4 text-center">
                <div style={{padding:"1rem", margin:10, border:"1px solid #01C954", cursor:"pointer"}} >
                    <i style={{fontSize:"10rem"}} class="material-icons">file_download</i>
                    <p style={{fontSize:"2rem", margin:0}}>ISO Files</p>
                  </div>
                </div>
            </div>
            <div style={{color:"#01C954"}} className="row">
              <div className="col s12 m4 text-center">
                <div style={{padding:"1rem", margin:10, border:"1px solid #01C954", cursor:"pointer"}} >
                    <i style={{fontSize:"10rem"}} class="material-icons">ondemand_video</i>
                    <p style={{fontSize:"2rem", margin:0}}>Tutorials</p>
                  </div>
                </div>
                <div className="col s12 m4 text-center">
                <div style={{padding:"1rem", margin:10, border:"1px solid #01C954", cursor:"pointer"}} >
                    <i style={{fontSize:"10rem"}} class="material-icons">contacts</i>
                    <p style={{fontSize:"2rem", margin:0}}>Directory</p>
                  </div>
                </div>
                <div className="col s12 m4 text-center">
                <div style={{padding:"1rem", margin:10, border:"1px solid #01C954", cursor:"pointer"}} >
                    <i style={{fontSize:"10rem"}} class="material-icons">lock_outline</i>
                    <p style={{fontSize:"2rem", margin:0}}>Vault</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        
      </RowContainer>
    </Section> 
  </Layout>
  )
}


export default Resources