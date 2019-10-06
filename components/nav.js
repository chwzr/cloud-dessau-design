import React from 'react'
import Link from 'next/link'
import Logo from '../static/cloud_logo.svg'

const Nav = () => (
  <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div className="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <Logo width="112" height="28"/>
        </a>
      </div>

    </div>
  </nav>
)

export default Nav
