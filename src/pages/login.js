import React from "react"
import { Link } from "gatsby"
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