// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDReH0msGlVBijyYsWgCeOrZ6vNHO7GeWc",
  authDomain: "theolxclone.firebaseapp.com",
  projectId: "theolxclone",
  storageBucket: "theolxclone.appspot.com",
  messagingSenderId: "472286516352",
  appId: "1:472286516352:web:5868e1bb6f27989573c265",
  measurementId: "G-64DF2Y24VZ"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default Firebase;