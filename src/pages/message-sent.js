import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import React, { Component } from 'react'
import axios from 'axios'

export class MsgSent extends Component {  

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    console.log(name);
    axios.post('.netlify/functions/send_slack', {
      name: name
})

  }
  render() {
    return (
      <Layout>
      <SEO title="Your Message Has Been Sent!" />
      <Section styleName={"bg-white"}>
      <RowContainer color={"white"} >
      <div class="col s12 m6 offset-m3">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Your Message Has Been Sent!</span>
          <p>Someone from our staff will reply to you shortly. If this is a priority, feel free to call 512.555.1212</p>
        </div>
        <div class="card-action">         
          <Link to="/services">Back to Services</Link>
        </div>
      </div>
    </div>
      </RowContainer>
      </Section>   
    </Layout>
    )
  }
}

export default MsgSent
