import React, {useState, useRef} from 'react'
import cloud from './cloud'

import BoardWriter from './boardWriter'
import * as moment from 'moment';


const Board = () => {

  const [tiles, setTiles] = useState([])
  const [listening, setListening] = useState(false);
  const list = useRef(null);
  // let test = [{content: "test"}, {content: "test2"}]

  const listener = () =>{
    if(!listening) {
      setListening(true)
      cloud.firestore().collection('board').orderBy("created", "asc").onSnapshot((snaps)=>{
        let nt = []
        snaps.forEach(snap=>{
          let d = snap.data();
          // console.log(d.created.toDate())
          d.created = d.created.toDate()
          nt.push(d);
        })
        setTiles(nt)
        if(list.current){
          list.current.scrollTop = list.current.scrollHeight;
        }
        
      })
    }
  }

  listener();


  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Board &nbsp;
          <span className="tag is-warning">
            beta
          </span>
        </h1>
        <p>A live messaging service.</p><br/>
        <div className="columns is-multiline">
          <div className="column is-half">
            <div className="fade"></div>
            <div className="board" ref={list}>
              {tiles.map((tile,i) => <div key={i}>
                <article className="message fadein is-marginless	" >
                  <div className="message-body">{tile.content}</div>
                </article>
                <div className="time has-text-right is-size-7 has-text-grey-light	">{moment(tile.created).fromNow()}</div>
              </div> )}
            </div>
          </div>
          <div className="column is-half"></div>
          <div className="column is-half">
            <BoardWriter/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Board