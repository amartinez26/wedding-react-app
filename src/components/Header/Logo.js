
/**
 * @file Logo.js
 * @description This file defines the Logo component, which renders a clickable logo element
 *              for the application. The logo can optionally include an image and displays
 *              the site name passed as a prop.
 */
import React from 'react'
import logo from '../../assets/img/logo.png'

const Logo = ({ siteName }) => {
  return (
    <a
      href="index.html"
      className="logo d-flex align-items-center justify-content-center"
    >
      {/* Uncomment the line below if you also wish to use an image logo */}
      <img src={logo} alt="Logo" />
      <h1 className="sitename">{siteName}</h1>
    </a>
  )
}

export default Logo
