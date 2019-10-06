import React, {useRef} from 'react'

import {db} from '../components/firebase'

const BoardWriter = () => {

  const inputEl = useRef(null);

  const sendMessage = () => {
    if(inputEl.current.value){
      db.collection('board').add({content: inputEl.current.value, created: new Date()}).then(()=>{
        inputEl.current.value = ""
      })
    }
  }

  return (
    <div>
      <div className="field">
        <label className="label">Spread the Word!</label>
        <div className="control">
          <textarea ref={inputEl} class="textarea" type="text" placeholder="Your Message" />
        </div>
        <p className="help">Be kind!</p>
      </div>
      <div class="control">
        <button onClick={sendMessage} class="button is-primary">Submit</button>
      </div>
    </div>
  )
}

export default BoardWriter