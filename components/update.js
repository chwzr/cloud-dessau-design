import React from 'react';

const Update = () => {

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
        })
      } 
    }
  }

  return (
    <div>
      <button className="button" onClick={clearCache}>Update Me</button>
    </div>
  )
}

export default Update