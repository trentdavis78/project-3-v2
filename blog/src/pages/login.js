import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const Login = () => {
  
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return(
  <Link to="/">Home</Link>
  )
}


export default Login