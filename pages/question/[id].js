import React, {useState, useRef} from 'react'
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import VideoUpload from '../../components/videoUpload';
import cloud from '../../components/cloud'


export default function Post() {
  const router = useRouter();
  const [question, setQuestion] = useState({})
  const [file, setFile] = useState(false)
  const [progress, setProgress] = useState(0)

  const getQuestion = () => {
    cloud.firestore().collection('qa').doc(router.query.id).onSnapshot(snap=>{
      setQuestion(snap.data());
    })
  }

  if(router.query.id){
    getQuestion()
  }

  const inputEl = useRef(null);


  const fileChange = (e) => {
    setFile(e.target.files[0])
    console.log(file)
  }


  const sendMessage = () => {

    if(file){
      var uploadTask = cloud.storage().ref('answers').child(new Date() + file.name).put(file);
      uploadTask.on('state_changed', (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(prog)
      }, (error) => {
        // Handle unsuccessful uploads
      }, () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
            db.collection('qa').doc(router.query.id)
              .update(
                {
                  answer: inputEl.current.value ? inputEl.current.value : "", 
                  answerTime: new Date(),
                  answered: true,
                  video: downloadURL
                })
              .then(()=>{
              inputEl.current.value = ""
            })
        });
      });
      
    } else {
      if(inputEl.current.value){
        cloud.firestore().collection('qa').doc(router.query.id)
          .update(
            {
              answer: inputEl.current.value, 
              answerTime: new Date(),
              answered: true
            })
          .then(()=>{
          inputEl.current.value = ""
        })
      }
    }
  }

  return (
    <Layout>
      <section className="section">
        <div className="container">
        {question.answered && <>
          <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <div className="title is-4">
                        {question.question}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <p>
                  {question.answer}
                  </p>
                  {question.video && <ReactPlayer controls url={question.video} height="auto" width="100%"></ReactPlayer>}
                </div>
          </div>
        </>}

        {!question.answered && <>
            <h1 className="is-size-3">{question.question}</h1>
            <div>
              <div className="field">
                <label className="label">Answer this question!</label>
                <div className="control">
                  <textarea ref={inputEl} className="textarea" type="text" placeholder="Your Answer" />
                </div>
              </div>

              <label className="label">Upload a Video Answer (optional)</label>
              <VideoUpload onFileChange={fileChange} progress={progress}></VideoUpload>

              <br/>
              <div className="control">
                <button onClick={sendMessage} className="button is-primary">Submit</button>
              </div>
            </div>
        </>}
        </div>
      </section>
    </Layout>
  );
}