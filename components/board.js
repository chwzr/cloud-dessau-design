import React, {useState} from 'react'
import {db} from '../components/firebase'

import BoardWriter from './boardWriter'

const Board = () => {

  const [tiles, setTiles] = useState([{content: "test"}, {content: "test2"}])
  const [listening, setListening] = useState(false);

  // let test = [{content: "test"}, {content: "test2"}]

  const listener = () =>{
    if(!listening) {
      setListening(true)
      db.collection('board').orderBy("created", "desc").onSnapshot((snaps)=>{
        let nt = []
        snaps.forEach(snap=>{
          let d = snap.data();
          console.log(d)
          nt.push(d);
        })
        if(nt !== tiles){
          setTiles(nt)
        }
      })
    }
  }

  listener();


  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Board</h1><br/>
        <div className="columns">
          <div className="column">
            <BoardWriter/>
          </div>
          <div className="column">
            {tiles.map((tile,i) => <>
              <article class="message fadein" key={i}>
                <div className="message-body" >{tile.content}</div>
              </article>
            </> )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Board