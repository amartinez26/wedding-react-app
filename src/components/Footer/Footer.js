
/**
 * Footer component that renders the footer section of the application.
 * It includes copyright information and credits for design and distribution.
 *
 * @component
 * @returns {JSX.Element} The rendered footer section.
 */
import React from 'react'
import Copyright from './Copyright'
import Credits from './Credits'

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <Copyright siteName="iPortfolio" />
        <Credits
          licenseUrl="https://bootstrapmade.com/license/"
          designBy="BootstrapMade"
          designUrl="https://bootstrapmade.com/"
          distributedBy="ThemeWagon"
          distributionUrl="https://themewagon.com"
        />
      </div>
    </footer>
  )
}

export default Footer
