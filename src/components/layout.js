import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to='/design/'>
          <h6 className='taut knb'>| design {">"}</h6>
        </Link>
          <h6 className='taut kra'>{"<"} contact |</h6>
          <h6 className='taut kna'>| masterpiece {">"}</h6>
        <Link to='/skill/'>
          <h6 className='taut krb'>{"<"} skill set |</h6>
        </Link>
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
