import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import React, { Component } from 'react'
import axios from 'axios'

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
console.log(name);
axios.post('.netlify/functions/send_slack', {
  name: name
})

export class News extends Component {  
  render() {
    return (
      <Layout>
      <SEO title="News" />
        <h1>News</h1>
        <p>{}</p>
      <Link to="/"></Link>
    </Layout>
    )
  }
}

export default News
