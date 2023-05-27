import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/firebaseContext';
import Firebase from '../../firebase/config';
import { useNavigate} from 'react-router-dom'

import { getStorage, ref, uploadBytes,  getDownloadURL } from "firebase/storage";
const storage = getStorage(Firebase);
const Create = () => {
  const navigate = useNavigate();
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext);
  const [name,setName]=useState('');
  const [category,setCategory]=useState(' ');
  const [price,setPrice]=useState(' ');
  const [image,setImage]=useState(null);
  const currentDate = new Date();
  const handleSubmit=()=>{
  
  //  storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
  //   ref.getDownloadURL.then((url)=>{
  //        console.log({url});
  const storageRef = ref(storage, `/image/${image.name}`);
  uploadBytes(storageRef, image).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      console.log(url);
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId: user.uid,
        createdAt: currentDate.toDateString()
      });
    });
    navigate("/");
  });
};
  return (
    <Fragment>
      <Header />
      {/* <Card> */}
        <div className="centerDiv">
       
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" value={price}
              onChange={(e)=>{setPrice(e.target.value)}} name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }}
             type="file" />
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
         
        </div>
      {/* </Card> */}
    </Fragment>
  );
};

export default Create;
