import * as React from 'react'
import { Link } from 'gatsby'
import { heading, nav, active } from '../components/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <div className={nav}>
        <Link to="/" className={active}>Home</Link>
        <Link to="/about">About</Link>
      </div>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
