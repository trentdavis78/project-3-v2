import React, { Component } from 'react'
import { Link } from "gatsby"
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import logo from "../assets/images/logo.svg" 
import { logout, isAuthenticated, login,getProfile } from "../utils/auth"

export class Navbar extends Component {
    state = {
          text: 'Login',
          userName:'',
          userNameDisplay:"none"
    }
//  userName="";

    componentDidMount() {
    
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});
        if (!isAuthenticated())
         {
            this.setState({
              text: 'Login',
              userName:'',
              userNameDisplay:"none"
            });
           }
          else
          {
            const user = getProfile()
          
            console.log(user);
            this.setState({
              text: 'Logout',
              userName:user.name,
              userNameDisplay:"inline"
            });

          }
    }
    loginClick = event =>{
      event.preventDefault();
      if (isAuthenticated()) {
        window.location.href = "/login";
        logout();
      }
      else{
        login();
        event.preventDefault();
      }
    }
  render() {
    return (
        <nav>
        <div className="nav-wrapper"
        style={{
              background: `#003594`
            }}
        >
         <Link to="/" className="brand-logo"><img style={{width: 150, marginLeft: 20}} src={logo} alt="ATXPC" /></Link>
          <a href="#!" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            
            <li><Link to="/news">News</Link></li>
            <li><Link to="/articles">Articles</Link></li><li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/services">Services</Link></li>
           <li><label className="waves-effect waves-light btn pink accent-3" > {this.state.userName} </label></li>
            
            <li><a className="waves-effect waves-light btn pink accent-3" id="login-trigger" onClick={this.loginClick}>{this.state.text}</a></li>
            
          </ul>
        </div>        
      </nav>
    )
  }
}

export default Navbar
