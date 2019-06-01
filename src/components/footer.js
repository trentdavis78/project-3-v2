import React from 'react'
import twitter from "../images/icons/twitter.svg" 
import github from "../images/icons/github.svg" 
import facebook from "../images/icons/facebook.svg" 

export default function footer() {
  return (
    <footer className="page-footer" style={{background: `#003594`}}>
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">ATXPC.COM</h5>
          <p className="grey-text text-lighten-4">Contact details coming soon!</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <ul>
            <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
            <li><a className="grey-text text-lighten-3" href="/services">Services</a></li>
            <li><a className="grey-text text-lighten-3" href="/articles">Articles</a></li>
            <li><a className="grey-text text-lighten-3" href="/resources">Resources</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} 
      {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
      </div>
    </div>
  </footer>
  )
}
