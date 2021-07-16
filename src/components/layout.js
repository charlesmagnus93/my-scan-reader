import * as React from 'react'
import { Link } from 'gatsby'
import { heading, nav, active, container } from '../components/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <div className={nav}>
        <Link to="/" className={active}>Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className={container}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </div>
    </main>
  )
}

export default Layout
