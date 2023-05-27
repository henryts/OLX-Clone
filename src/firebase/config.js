// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";

// import "firebase/auth";
// import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";



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

const Firebase=firebase.initializeApp(firebaseConfig);

 export default  Firebase
