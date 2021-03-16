import firebase from 'firebase';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCIShxPD73mxkeNskRBplxoxNaFnfdm4xA",
    authDomain: "poke-info-a.firebaseapp.com",
    databaseURL: "https://poke-info-a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "poke-info-a",
    storageBucket: "poke-info-a.appspot.com",
    messagingSenderId: "919038967169",
    appId: "1:919038967169:web:d15726e9b425cf2ce17c80",
    measurementId: "G-Y43SWS9TZ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth;

  export default auth;
  export const db = firebase.database();