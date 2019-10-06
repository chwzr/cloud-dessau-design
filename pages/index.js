import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import '../styles/index.scss'

import '../components/firebase'
import Messaging from '../components/messaging'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>[cloud]</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#ff0000" />
      <meta
        name="description"
        content="make your Next.js application work offline using service workers via Google's workbox"
      />
    </Head>
    <Nav/>

    <section className="section hero is-fullheight-with-navbar">
      <div className="container">
        <h1 className="title">Shaping Campus Life</h1><br/>
        <div class="columns">
          <div class="column is-two-thirds">
            <h2 className="subtitle">
              Die <strong>[cloud]</strong> ist unser Konzept, aus einem Raum heraus eine Community unter den Studierenden aufzubauen. So schaffen wir eine Plattform, die verschiedene Charaktere zusammenbringt, um sich kennenzulernen und auszutauschen. Ein Ort zum Arbeiten, zum Diskutieren oder um einfach einen Kaffee zu genießen!
            </h2>
          </div>
        </div>

      <Messaging></Messaging>
      </div>
      <img src="/static/project_create_illo_end@2x.png" width={500} className="illo-hero" />
    </section>
  </div>
)

export default Home
