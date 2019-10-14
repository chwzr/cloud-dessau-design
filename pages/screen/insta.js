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
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Campus Platform"
      />
      <link rel="apple-touch-icon" href="/static/icon-512.png"/>
    </Head>
    {/* <section className="section">
      <div className="content widem">
        <div className="columns is-multiline">
            {props.feed.map((item, i)=>(
                <div key={i} className="column is-one-third">
                      <img src={item.node.display_url} className="instapic"/>
                </div>
            ))}
        </div>
      </div>
    </section> */}
    <div className="instacenter">
      <img src={props.feed[0].node.display_url} className="instafull"/>
    </div>
    
   </div>
)
}

Feed.getInitialProps = async function() {
  // console.log("LOAD")
  let data = await fetch(`https://www.instagram.com/cloud_dessau/?__a=1`);
  let json = await data.json();
  // console.log(json)
  return {
    feed: json.graphql.user.edge_owner_to_timeline_media.edges
  }
}

export default Feed