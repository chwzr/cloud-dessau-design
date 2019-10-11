import firebase from 'firebase/app';
// import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/analytics";
import "firebase/messaging";
import "firebase/storage"


var firebaseConfig = {
  apiKey: "AIzaSyDz2264TI0D2iFVX1k4pOtUozr2jO8SLtU",
  authDomain: "cloud-dessau-design.firebaseapp.com",
  databaseURL: "https://cloud-dessau-design.firebaseio.com",
  projectId: "cloud-dessau-design",
  storageBucket: "cloud-dessau-design.appspot.com",
  messagingSenderId: "1026750393563",
  appId: "1:1026750393563:web:919229eda2ee388c9970fe",
  measurementId: "G-36EJZWWL0V"
};
// Initialize Firebase


const cloud = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
cloud.firestore();

if(process.browser){
  //init on client side
  console.log("init Analytics")
  cloud.analytics();
    console.log("init Messaging")
    cloud.messaging().usePublicVapidKey("BHfApPgxFt25VeufNN7mK9jMCVGteCZb8P5ryH4CE5GOAgprtSTE74U8HVlc2pdo-ZGbw05cjkHgzHuzihouJ74");
}

export default cloud
