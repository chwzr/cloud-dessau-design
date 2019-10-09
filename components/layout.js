import React from 'react';
import Head from 'next/head'
import Nav from './nav'
import '../styles/index.scss'
import '../components/firebase'


const Layout = (props) => {



  return (
  <div>
    <Head>
      <title>[cloud]</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="make your Next.js application work offline using service workers via Google's workbox"
      />
    </Head>
    <Nav/>
    {props.children}
   </div>
)
  }

export default Layout