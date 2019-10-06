import React from 'react'



const Push = () => {

  const getToken = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
      } else {
        console.log('Unable to get permission to notify.');
      }
    });    
  }

  return (
    <>
      <div>
        <div className="button is-primary is-medium" onClick={getToken}>
          Bin dabei!
        </div>

        <div className="code">
          {process.browser && window.pushtoken}
        </div> 
      </div>
    </>
  )
}

export default Push