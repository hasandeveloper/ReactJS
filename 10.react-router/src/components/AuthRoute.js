import React from 'react'

const AuthRoute = ({ children }) => {
  const loggedIn = true
  if (!loggedIn) return <h1>Access denied</h1>
  return (
    <div>{ children }</div>
  )
}

export default AuthRoute