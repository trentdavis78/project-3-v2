import React, { Component } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
// import { Link, graphql } from 'gatsby'
import HorzCardSm from '../components/horzCardSm'
import hwImg from "../images/hw.jpg"
import swImg from "../images/sw.jpg"
import webImg from "../images/web.jpg"
import logoImg from "../images/logoDesign.jpg"
import servicesImg from "../images/services.svg"


export class Services extends Component {

  render() {
    return (
      <Layout>
      <SEO title="Services" />
      <Section styleName={"bg-white"}>
        <RowContainer color={"white"}>
          <div className="row">
           <img className="hide-on-small-only" src={servicesImg} alt="Services" style={{width:"100%",padding: "0 .75rem"}}/>
            <div className="col l12 xl12">
              <div className="row">
                <HorzCardSm image={hwImg} title={"Hardware Repair"} id={"1"} modalId={"modalHw"}>
                Computer and server repairs and maintenance. Services include building or configuring new hardware, installing and updating packages, and creating and maintaining computer networks.</HorzCardSm>
               <HorzCardSm image={swImg} title={"Software Repair"} id={"2"} modalId={"modalSw"}>
               Software repair services include diagnosis, data recovery, virus and spyware removal, software setup and installation, wi-fi setup or troubleshooting and more.
               </HorzCardSm>
              </div>
              <div className="row">
                <HorzCardSm image={webImg} title={"Website Design"} id={"3"} modalId={"modalWeb"}>
                Our web designers can create the look, layout, and features of your website and work with our development teams and managers to keep your site up-to-date while prioritizing your needs.
                </HorzCardSm>
               <HorzCardSm image={logoImg} title={"Logo & Graphic Design"} id={"4"} modalId={"modalLogo"}>
                Our graphic designers create visual concepts to communicate the ideas that inspire, inform, and captivate your consumers. We can develop the layout and design for advertisements, brochures, magazines, and corporate reports.
               </HorzCardSm>
              </div>
            </div>
          </div>
        </RowContainer>
      </Section>    
    </Layout>
    )
  }
}

export default Services
