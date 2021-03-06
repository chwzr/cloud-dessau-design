import React from 'react'
import Layout from '../components/layout'
import Messaging from '../components/messaging'
import Update  from '../components/update'
import Calendar  from '../components/calendar'

const Home = () => (
  <Layout>
    <section className="section hero is-fullheight-with-navbar">
      <div className="container">
          <div className="columns is-multiline">
              <Update test="okok"/>
              <div className="column is-one-third">
                <h1 className="title">Shaping Campus Life</h1><br/>
                <div className="columns">
                  <div className="column is-two-thirds">
                    <h2 className="subtitle">
                      The <strong>[cloud]</strong> is our concept for building a student community out of a room. We are creating a platform that brings together different characters to connect and interchange. It is a place to get together, work, discuss or simply have a coffee!
                    </h2>
                  </div>
                </div>
              </div>
              <div className="column is-one-third is-hidden-mobile">
                <img src="/static/hero_illo_v2.svg" width={280} className="illo-hero" />
              </div>
              <div className="column is-one-quarter">
                <Messaging/>
              </div>         
                <Calendar/>
          </div>
          
      <br/>
      
     
      </div>
    </section>
  </Layout>
)

export default Home
