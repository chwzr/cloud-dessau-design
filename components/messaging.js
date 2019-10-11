import React from 'react'



const Push = () => {

  const getToken = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Unable to get permission to notify.');
      }
    });    
  }

  return (
    <>
      <div>
        Do you want to get Push Notifications?
      </div>
      <div>
        {process.browser && !window.pushtoken && <>
          <div className="button is-primary is-medium" onClick={getToken}>
            Yes I do!
          </div>
        </>}
        {process.browser && window.pushtoken && <>
          <div className="button is-primary is-medium" onClick={getToken}>
            Du bist dabei!
          </div>
        </>}
      </div>
    </>
  )
}

export default Push