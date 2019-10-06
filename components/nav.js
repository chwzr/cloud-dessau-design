import React from 'react'
import Link from 'next/link'
import Logo from '../static/cloud_logo.svg'

const Nav = () => (
  <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Logo width="112" height="28" className="logo"/>
        </a>
      </div>



      

    </div>
  </nav>
)

export default Nav
