import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Parallax from "../components/parallax"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import HorzCardSm from "../components/horzCardSm"
import parallax1 from "../assets/images/parallax1.jpg" 
import parallax2 from "../assets/images/parallax2.jpg" 

const IndexPage = () => (
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
    <Section styleName={"bg-white"}><div>Lorem ipsum dolerat</div></Section>
  </Layout>
)

export default IndexPage
