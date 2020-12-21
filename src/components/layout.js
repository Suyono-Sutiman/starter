import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Head2 from '../components/head2'
import "./layout.css"
import Kontak from "./kontak";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Head2 siteTitle={data.site.siteMetadata?.title || `Title`} style={{marginBottom:'2rem'}}/>
      <div>
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          <Kontak/>
          © {new Date().getFullYear()}, Realine.All Rights Reserved.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
