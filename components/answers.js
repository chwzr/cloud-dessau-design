import React, {useState} from 'react';
import * as moment from 'moment';
import {db} from '../components/firebase'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import QuestionWriter from './question'

const Answers = () => {
  const [answers, setAnswers] = useState([])
  const [questions, setQuestions] = useState([])
  const [listening, setListening] = useState(false);
  // const list = useRef(null);
  // let test = [{content: "test"}, {content: "test2"}]

  const listener = () =>{
    if(!listening) {
      setListening(true)
      db.collection('qa').orderBy("created", "asc").onSnapshot((snaps)=>{
        let answers = []
        let questions = []
        snaps.forEach(snap=>{
          let d = snap.data();
          d.created = d.created.toDate();
          d.id = snap.id

          if(d.answered){
            answers.push(d);
          } else {
            questions.push(d);
          }

        })
        setAnswers(answers)
        setQuestions(questions)
      })
    }
  }

  listener()


  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Q & A  &nbsp;
          <span className="tag is-warning">
            Beta
          </span>
        </h1><br/>

        <div className="columns">
          <div className="column is-one-quarter">
              <QuestionWriter/>
          </div>
        </div>


        <h2 className="is-size-2">Open Questions - click to answer</h2><br/>
        <div className="columns is-multiline">
          { questions.map(q=>(<>
            <div className="column is-one-quarter" key={q.id}>
            <Link href="/question/[id]" as={`/question/${q.id}`}>
              <a className="box clickable">
                <h3>{q.question}</h3>
                <div className="time has-text-right is-size-7 has-text-grey-light	">{moment(q.created).fromNow()}</div>
              </a>
            </Link>
            </div> 
          </>))}
        </div>

        <h2 className="is-size-2">Answers - enjoy wisdom</h2><br/>
        <div className="columns is-multiline">
        { answers.map(a=>(<div key={a.id} className="column is-one-quarter" >
          
            <div className="card">
                <div class="card-image">
                  {a.video && <ReactPlayer controls url={a.video} height="auto" width="100%"></ReactPlayer>}
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <div className="title is-4">
                        {a.question}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <p>
                  {a.answer}
                  </p>
                </div>
            </div>
          
        </div>))}
        
        </div>
      </div>
    </section>
  )

}


export default Answers