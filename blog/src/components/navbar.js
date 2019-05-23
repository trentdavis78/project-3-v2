import React, { Component } from 'react'
import { Link } from "gatsby"
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


export class Navbar extends Component {
    componentDidMount() {
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});
    }
  render() {
    return (
        <nav>
        <div className="nav-wrapper"
        style={{
              background: `#003594`
            }}
        >
         <Link to="/" className="brand-logo"><img style={{width: 150, marginLeft: 20}} src="/assets/images/logo.svg" alt="ATXPC" /></Link>
          <a href="#!" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><a className="waves-effect waves-light btn pink accent-3 modal-trigger" href="#modal1">Login</a></li>
          </ul>
        </div>        
      </nav>
    )
  }
}

export default Navbar
