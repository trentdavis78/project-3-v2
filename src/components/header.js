import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import Sidenav from "./sidenav"

const Header = ({ siteTitle }) => (
  <div>
  <div className="navbar-fixed">
      <Navbar />     
    </div>
     <Sidenav />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
