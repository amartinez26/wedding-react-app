
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
      All the links in the footer should remain intact. You can delete the links
      only if you've purchased the pro version. Licensing information:{' '}
      <a href={licenseUrl}>{licenseUrl}</a>
      <br />
      Purchase the pro version with working PHP/AJAX contact form:{' '}
      <a href="[buy-url]">[buy-url]</a>
      <br />
      Designed by <a href={designUrl}>{designBy}</a> Distributed by{' '}
      <a href={distributionUrl}>{distributedBy}</a>
    </div>
  )
}

export default Credits
