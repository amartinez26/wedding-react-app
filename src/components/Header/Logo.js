import React from 'react'

const Logo = ({ siteName }) => {
  return (
    <a
      href="index.html"
      className="logo d-flex align-items-center justify-content-center"
    >
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt="Logo" /> */}
      <h1 className="sitename">{siteName}</h1>
    </a>
  )
}

export default Logo
