import React from 'react';
import Head from 'next/head'
import Nav from '../../components/nav'
import Calendar  from '../../components/calendar_screen'
import '../../styles/index.scss'
import fetch from 'isomorphic-unfetch';
import Logo from '../../static/cloud_logo.svg'
import * as moment from 'moment';


const Cal = (props) => {

  console.log(props)

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
          <Calendar events={props.events}/>
      </div>
    {/* <Nav/> */}
   </div>
)
}

Cal.getInitialProps = async function() {
  let data = await fetch(`https://www.googleapis.com/calendar/v3/calendars/rvr1vpoap6v75n5l4u8388amoo@group.calendar.google.com/events?key=AIzaSyDz2264TI0D2iFVX1k4pOtUozr2jO8SLtU&maxResults=5&timeMin=${encodeURIComponent(moment().format())}&singleEvents=true&orderBy=startTime&`);
  let json = await data.json();
  console.log("OKK")
  return {
    events: json.items
  }
}

export default Cal