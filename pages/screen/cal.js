import React from 'react';
import Head from 'next/head'
import Nav from '../../components/nav'
import Calendar  from '../../components/calendar_screen'
import '../../styles/index.scss'

import Logo from '../../static/cloud_logo.svg'

const Layout = (props) => {



  return (
  <div>
    <Head>
      <title>[cloud]</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Campus Platform"
      />
      <link rel="apple-touch-icon" href="/static/icon-512.png"/>
    </Head>
    <br/><br/>
    <div className="columns is-centered">
      <Logo width="112" height="28" className="logo"/>
    </div>
      <div className="columns is-centered">
          <Calendar/>
      </div>
    {/* <Nav/> */}
   </div>
)
  }

export default Layout