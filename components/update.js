import React from 'react';

const Update = () => {

  if(process.browser){
    if ('serviceWorker' in navigator) {
      var workerContainerInstance = navigator.serviceWorker;
      console.log(workerContainerInstance);
    }
  }

  const clearCache = () => {
    if ('caches' in window) {
      console.log("delete")
      caches.delete('https-calls');
    } 
  }

  return (
    <div>
      <button className="button" onClick={clearCache}>Update Me</button>
    </div>
  )
}

export default Update