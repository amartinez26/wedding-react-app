import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>{' '}
            <strong className="px-1 sitename">iPortfolio</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits">
          All the links in the footer should remain intact. You can delete the
          links only if you've purchased the pro version. Licensing information:{' '}
          <a href="https://bootstrapmade.com/license/">
            https://bootstrapmade.com/license/
          </a>
          <br />
          Purchase the pro version with working PHP/AJAX contact form:{' '}
          <a href="[buy-url]">[buy-url]</a>
          <br />
          Designed by <a href="https://bootstrapmade.com/">
            BootstrapMade
          </a>{' '}
          Distributed by <a href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
