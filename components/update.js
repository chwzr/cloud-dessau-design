import React, {useState} from 'react';
import cloud from './cloud'


const Update = (props) => {

  const [update, setUpdate] = useState(true)

  if(process.browser){
    if ('serviceWorker' in navigator) {
      var workerContainerInstance = navigator.serviceWorker;
      console.log(workerContainerInstance);
    }
  }

  const clearCache = () => {
    if(process.browser){
      if ('caches' in window) {
        caches.keys().then(keys => {
          // keys is an array with the list of keys
          keys.forEach(key => {
            caches.delete(key);
          })
          window.location.reload();
        })
      } 
    }
  }

  cloud.firestore().collection('version').doc('version').get().then((snap)=>{
    setUpdate(snap.data().version === '1.2')
  })

  if(!update) {
    return (
      <div className="column is-one-quarter">
        <div className="box">
          <h2 className="is-2">There is a new version of the Cloud App</h2><br/>
          <button className="button is-primary" onClick={clearCache}>Click to refresh!</button>
        </div>
      </div>
    )
  } else return null;
}


export default Update