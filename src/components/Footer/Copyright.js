
/**
 * @fileoverview This file defines the Copyright component, which displays 
 * a copyright notice with the site name and the current year. It is styled 
 * with a text-center class and allows customization of the site name.
 */

import React from 'react'

/**
 * Copyright Component
 * 
 * @param {Object} props - The props object.
 * @param {string} props.siteName - The name of the site to display in the copyright notice.
 * @param {number} [props.year=new Date().getFullYear()] - The year to display in the copyright notice. Defaults to the current year.
 * 
 * @returns {JSX.Element} A JSX element displaying the copyright notice.
 */

const Copyright = ({ siteName, year = new Date().getFullYear() }) => {
  return (
    <div className="copyright text-center">
      <p>
        © <span>Copyright</span>{' '}
        <strong className="px-1 sitename">{siteName}</strong>{' '}
        <span>All Rights Reserved</span>
      </p>
    </div>
  )
}

export default Copyright
