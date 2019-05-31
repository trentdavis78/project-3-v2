import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import { Link, graphql } from 'gatsby'
import HorzCardSm from '../components/horzCardSm'
import hwImg from "../images/hw.jpg"
import swImg from "../images/sw.jpg"
import servicesImg from "../images/services.svg"
const Services = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <Section styleName={"bg-white"}>
      <RowContainer color={"white"}>
        <div className="row">
         <img className="hide-on-small-only" src={servicesImg} alt="Services" style={{width:"100%",padding: "0 .75rem"}}/>
          <div className="col l12 xl12">
            <div className="row">
              <HorzCardSm image={hwImg} title={"Hardware Repair"} id={"1"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur sagittis lectus nec auctor. Nunc a lobortis massa. Integer libero justo, tempus sit amet velit eu, facilisis mattis nisl.
             </HorzCardSm>
             <HorzCardSm image={swImg} title={"Software Repair"} id={"2"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur sagittis lectus nec auctor. Nunc a lobortis massa. Integer libero justo, tempus sit amet velit eu, facilisis mattis nisl.
             </HorzCardSm>
            </div>
          </div>
        </div>
      </RowContainer>
    </Section>
  </Layout>
)

export default Services
