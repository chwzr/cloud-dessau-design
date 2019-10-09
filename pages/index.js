import React from 'react'
import Layout from '../components/layout'
import Messaging from '../components/messaging'

const Home = () => (
  <Layout>
    <section className="section hero is-fullheight-with-navbar">
      <div className="container">
        <h1 className="title">Shaping Campus Life</h1><br/>
        <div className="columns">
          <div className="column is-two-thirds">
            <h2 className="subtitle">
              The <strong>[cloud]</strong> is our concept for building a student community out of a room. We are creating a platform that brings together different characters to connect and interchange. It is a place to get together, work, discuss or simply have a coffee!
            </h2>
          </div>
        </div>

      <Messaging></Messaging>
      </div>
      <img src="/static/project_create_illo_end@2x.png" width={500} className="illo-hero" />
    </section>
  </Layout>
)

export default Home
