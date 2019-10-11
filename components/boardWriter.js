import React, {useRef} from 'react'

import cloud from './cloud'

const BoardWriter = () => {

  const inputEl = useRef(null);

  const sendMessage = () => {
    if(inputEl.current.value){
      cloud.firestore().collection('board').add({content: inputEl.current.value, created: new Date()}).then(()=>{
        inputEl.current.value = ""
      })
    }
  }

  return (
    <div>
      <div className="field">
        <label className="label">Spread the Word!</label>
        <div className="control">
          <textarea ref={inputEl} className="textarea" type="text" placeholder="Your Message" />
        </div>
        <p className="help">Be kind!</p>
      </div>
      <div className="control">
        <button onClick={sendMessage} className="button is-primary">Submit</button>
      </div>
    </div>
  )
}

export default BoardWriter