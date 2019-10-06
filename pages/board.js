import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import '../styles/index.scss'

import '../components/firebase'
import Messaging from '../components/messaging'
import Nav from '../components/nav'
import Board from '../components/board'

const Home = () => (
  <div>
    <Head>
      <title>[cloud] Board</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Shaping Campus Life"
      />
    </Head>
    <Nav/>

    <Board/>
  </div>
)

export default Home
