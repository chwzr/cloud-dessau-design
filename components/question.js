import React, {useRef} from 'react'

import {db} from '../components/firebase'

const QuestionWriter = () => {

  const inputEl = useRef(null);

  const sendMessage = () => {
    if(inputEl.current.value){
      db.collection('qa').add({
        question: inputEl.current.value, 
        created: new Date(),
        answered: false
      })
      .then(()=>{
        inputEl.current.value = ""
      })
    }
  }

  return (
    <div className="box"> 
              <p>
        We supply the answers to your searching questions. All together. Do you have a burning question?
        </p><br/>
      <div className="field">
        <div className="control">
          <input ref={inputEl} className="input" type="text" placeholder="Your Question" />
        </div>
      </div>
      <div className="control">
        <button onClick={sendMessage} className="button is-primary">Submit</button>
      </div>
    </div>
  )
}

export default QuestionWriter