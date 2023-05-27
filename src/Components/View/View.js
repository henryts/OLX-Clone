import React,{useEffect,useState,useContext} from 'react';


import './View.css';
import { PostContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/firebaseContext';
import Firebase from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import { getFirestore} from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
function View() {
  const [userDetails,setUserDetails]=useState();
  const {postDetails}=useContext(PostContext);
  const {firebase}=useContext(FirebaseContext);
  
  useEffect(()=>{
    const{userId}=postDetails;
    const db = getFirestore( Firebase);
    const usersRef = collection(db, "users");
    const q = query(usersRef, where('id','==',userId));
    console.log({q});
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
