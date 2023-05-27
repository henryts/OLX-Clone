import React, {useContext, useState} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/firebaseContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Firebase from '../../firebase/config';

import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


import { useNavigate} from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import {  updateProfile } from "firebase/auth";





const db = getFirestore( Firebase);

export default function Signup() {
  const navigate = useNavigate();

  const [username,setUsername]=useState('');
  const [email,setEmail]= useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const {firebase}= useContext(FirebaseContext);
  const handleSubmit=(e)=> {
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: username
      }).then(() => {
        // Profile updated!
        alert("changed")
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      
        
        
      })
          try {
            const docRef =  addDoc(collection(db, "users"), {
              email:email,
              username:username,
              password: password,
              phone: phone
            }).then(()=>{
              navigate("/login");
            console.log("Document written with ID: ", docRef.id);
          })
          } catch (e) {
            console.error("Error adding document: ", e);
          }
         

          // .then(() => {
          // //  history.push("/login");
          // // })
          // .catch((error) => {
          //   const errorCode = error.code;
          //   const errorMessage = error.message;
          //   console.log(errorMessage);
          //   // ...
          // });
        };
    
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}

            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
           
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
