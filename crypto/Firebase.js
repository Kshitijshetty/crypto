// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzLoWsbuf1xQU1ldUP5o7bAh1CwFfVJs8",
  authDomain: "login-e4c88.firebaseapp.com",
  databaseURL: "https://login-e4c88.firebaseio.com",
  projectId: "login-e4c88",
  storageBucket: "login-e4c88.appspot.com",
  messagingSenderId: "679662674616",
  appId: "1:679662674616:web:fbc4b35484c38a7092ca4d",
  measurementId: "G-76MHK17RX1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };