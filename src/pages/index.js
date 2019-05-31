import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Parallax from "../components/parallax"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import parallax1 from "../images/parallax1.jpg"
import parallax2 from "../images/parallax2.jpg"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import FeatureBox from "../components/featureBox"
import servicesImg from "../images/services.svg"
import articlesImg from "../images/articles.svg"
import resourcesImg from "../images/resources.svg"
import servicesImgSm from "../images/services-sm.svg"
import articlesImgSm from "../images/articles-sm.svg"
import resourcesImgSm from "../images/resources-sm.svg"
import UserCard from "../components/userCard";
import user1img from "../images/User_1.jpg"
import user2img from "../images/User_2.jpg"
import user3img from "../images/User_3.jpg"
import Modal from "../components/modal";

export default class IndexPage extends React.Component {
  // Since `addToMailchimp` returns a promise, you
  state = {
    email: '',
    listFields: '',
    returnData: ""
  }

  _handleChange = e => {
    console.log("In Handle changes")
    this.setState({ email: e.target.value });
  }

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        console.log(data)
        this.setState({ returnData: data });

      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Parallax imgPath={parallax1} altTag="Austin Skyline">
          <h1>All Things Tech in Austin, Texas</h1>
        </Parallax>
        <Section styleName={"bg-white"}>
          <RowContainer color={"white"}>
            <FeatureBox title="services" imageSm={servicesImgSm} image={servicesImg} deg="105deg" txtcolor="#fff"  bgcolor="1,87,155"  icon="arrow_forward" btncss="indigo darken-4 btn-bottom">          
            We coordinate with customers to create unique projects, utilizing a variety of web development tools and technology.  We develop custom web sites and apps based upon your specific business needs and provide comprehensive tech support.              
            </FeatureBox>
            <FeatureBox title="articles" imageSm={articlesImgSm} image={articlesImg} deg="-105deg" align="right" txtcolor="#fff" bgcolor="245,0,87" icon="arrow_forward" btncss="pink darken-4 btn-right btn-bottom">
            Check out the latest blogs from our Austin homegrown tech team. We  focus on industry trends, advancing technology and corporate marketing transitions affecting the Austin tech community.  
              </FeatureBox>
            <FeatureBox title="resources" imageSm={resourcesImgSm} image={resourcesImg} deg="105deg" txtcolor="#fff" bgcolor="0,200,83" icon="lock" btncss=" green darken-2 btn-bottom">Subscribe to ATXPC.com to receive supplemental resources designed to help you become Employer Competitive so that you stand out in the tech marketplace, and receive resources specifically selected to help develop your skills in coding languages and programs.                 
              </FeatureBox>
          </RowContainer>
        </Section>
        <Parallax imgPath={parallax2} altTag="Congress Bridge">
          <div className="subscribe-container">
            <h5>Stay up to date with the latest news and events</h5>
            <form onSubmit={this._handleSubmit}>
              <div className="input-field inline">
                <input id="emailId" type="email" className="validate" value={this.state.email} onChange={this._handleChange} />
                <label htmlFor="emailId">Email</label>
              </div>
              <div className="input-field inline">
                <button data-target="modal1" className="waves-effect waves-light btn-flat red white-text modal-trigger" id="subscribme" type="submit">Subscribe</button>
                <Modal modalId={"modal1"} actionText={"Close"} >
                  You've subscribed!
                </Modal>
              </div>
            </form>
          </div>
        </Parallax>

        <Section styleName={"bg-white"}>
        <RowContainer color={"white"}>
          <h3 style={{padding:"2rem", textAlign:"center"}}>Meet The Team</h3>
            <UserCard user={"User_1"} userImg={user1img} userName="Trent Davis" userTitle={"Frontend Developer"} userTagline={"Evil Genius"} />             
            <UserCard user={"User_2"} userImg={user2img} userName="Chandni Patel" userTitle={"Backend Developer"} userTagline={"Auth Master"} />
            <UserCard user={"User_3"} userImg={user3img} userName="Penny Arnold" userTitle={"Lead Content Creator"}  userTagline={"Writing Wizard"} />
        </RowContainer>
        </Section>
      </Layout>

    )
  }
}


