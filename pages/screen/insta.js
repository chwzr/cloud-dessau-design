import React from 'react';
import Head from 'next/head'
import '../../styles/index.scss'
import fetch from 'isomorphic-unfetch';


const Feed = (props) => {

  // console.log(props.feed)


  return (
  <div>
    <Head>
      <title>[cloud]</title>
    </Head>
    <div className="instacenter">
      <h2 className="is-size-2 marge">instagram.com/cloud_dessau</h2>
    </div>
      <div className="instacenter">
        <img src={props.feed ? props.feed[0].node.display_url : ""} className="instafull"/>
      </div>
    
   </div>
)
}

Feed.getInitialProps = async function() {
  // console.log("LOAD")
  let json  = false
  try{
    let data = await fetch(`https://www.instagram.com/cloud_dessau/?__a=1`);
    json = await data.json();
  }
  catch (error) {
    console.log(error)
  }
  // console.log(json)
  return {
    feed: json ? json.graphql.user.edge_owner_to_timeline_media.edges : false
  }
}

export default Feed