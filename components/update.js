import React from 'react';

const Update = () => {

  if ('serviceWorker' in navigator) {
    var workerContainerInstance = navigator.serviceWorker;
    console.log(workerContainerInstance)
    // Supported!
  }

  return (
    <div>
      <button className="button">Update Me</button>
    </div>
  )
}

export default Update