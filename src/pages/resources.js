import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const Resources = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const user = getProfile()

  return(
    <Layout>
      <SEO title="Resources" />
        <h1>Resources</h1>
      {/* <Link to="/">Go back to the homepage</Link>
      {<a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
      </a>} */}
    </Layout>
  )
}


export default Resources