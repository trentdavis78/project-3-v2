import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Parallax from "../components/parallax"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import HorzCardSm from "../components/horzCardSm"
import parallax1 from "../images/parallax1.jpg" 
import parallax2 from "../images/parallax2.jpg" 
import addToMailchimp from 'gatsby-plugin-mailchimp'


export default class IndexPage extends React.Component {
  // Since `addToMailchimp` returns a promise, you
  state = {
    email: 'Login',
    listFields:'',
    returnData:""
}

    _handleChange = e => {
      console.log("In Handle changes")
      this.setState({email: e.target.value});
    }

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
    .then(data => {
           console.log(data)
           this.state.returnData=data

    })
    .catch(() => {
     
    })
  }

render() {
  return (
  <Layout>
    <SEO title="Home" />
    <Parallax imgPath={parallax1} altTag="Austin Skyline" />
    <Section styleName={"bg-white"}>
      <RowContainer color={"white"}>
        <h6 className="category-header">Recent Articles</h6>
         <HorzCardSm />       
         <HorzCardSm />     
         <HorzCardSm />     
         <HorzCardSm />     
      </RowContainer>
    </Section>
    <Parallax imgPath={parallax2} altTag="Austin Skyline" />
    
    <form onSubmit={this._handleSubmit}>
    <Section styleName={"bg-white"}> <RowContainer color={"white"}><div> <input id="emailId"  value={this.state.email} placeholder="Enter email id" onChange={this._handleChange} ></input> <button id="subscribme" type="submit">Subscribe Me</button></div></RowContainer></Section>
    </form>
    <Section styleName={"bg-white"}><div></div></Section>
  </Layout>
  
)}
}
// export default IndexPage