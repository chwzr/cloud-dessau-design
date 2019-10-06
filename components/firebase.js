import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/messaging";


var firebaseConfig = {
  apiKey: "AIzaSyDz2264TI0D2iFVX1k4pOtUozr2jO8SLtU",
  authDomain: "cloud-dessau-design.firebaseapp.com",
  databaseURL: "https://cloud-dessau-design.firebaseio.com",
  projectId: "cloud-dessau-design",
  storageBucket: "",
  messagingSenderId: "1026750393563",
  appId: "1:1026750393563:web:919229eda2ee388c9970fe",
  measurementId: "G-36EJZWWL0V"
};
// Initialize Firebase
try{
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} catch {
  console.log("skip fb init")
}




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