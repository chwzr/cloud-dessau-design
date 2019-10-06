import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import '../styles/index.scss'
import Logo from '../static/cloud_logo.svg'

import '../components/firebase'
import Messaging from '../components/messaging'

const Home = () => (
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

    <section className="section">
      <div className="container">
        <h1 className="title"><Logo  className="logo"/> </h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
      <Messaging></Messaging>
    </section>
  </div>
)

export default Home
