
/**
 * @file Credits.js
 * @description This component renders a footer section containing licensing information,
 *              purchase links, and credits for design and distribution. It ensures that
 *              the footer links remain intact unless the pro version is purchased.
 * @module components/Footer/Credits
 */
import React from 'react'

const Credits = ({
  licenseUrl,
  designBy,
  designUrl,
  distributedBy,
  distributionUrl,
}) => {
  return (
    <div className="credits">
      This site was rebuilt in React utilizing a Bootstrap
      template. Customized to be used as a wedding site . Licensing information:{' '}
      <a href={licenseUrl} target="_blank" rel="noopener noreferrer">{licenseUrl}</a>
      <br />
      Designed by Antonio Martinez Distributed by{' '}
      <a href="https://bootstrapmade.com" target="_blank" rel="noopener noreferrer">BootstrapMade</a> and{' '}
      <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
    </div>
  )
}

export default Credits
