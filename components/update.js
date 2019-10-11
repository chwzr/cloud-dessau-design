import React from 'react';

const Update = () => {

  if(process.browser){
    if ('serviceWorker' in navigator) {
      var workerContainerInstance = navigator.serviceWorker;
      console.log(workerContainerInstance);
    }
  }

  return (
    <div>
      <button className="button">Update Me</button>
    </div>
  )
}

export default Update