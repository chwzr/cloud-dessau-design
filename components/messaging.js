import React from 'react'



const Push = () => {

  const getToken = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
        if(process.browser){
          var messaging = firebase.messaging();
          messaging.usePublicVapidKey("BHfApPgxFt25VeufNN7mK9jMCVGteCZb8P5ryH4CE5GOAgprtSTE74U8HVlc2pdo-ZGbw05cjkHgzHuzihouJ74");
          messaging.getToken().then((currentToken) => {
            if (currentToken) {
              console.log("token: ", currentToken)
              window.pushtoken = currentToken;
              // sendTokenToServer(currentToken);
              // updateUIForPushEnabled(currentToken);
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
              // updateUIForPushPermissionRequired();
              // setTokenSentToServer(false);
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // showToken('Error retrieving Instance ID token. ', err);
            // setTokenSentToServer(false);
          });
        }
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