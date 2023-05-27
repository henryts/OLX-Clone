import React, { useContext, useEffect } from 'react';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ViewPost from './Pages/ViewPost'
import './App.css';
import { AuthContext, FirebaseContext } from './store/firebaseContext';
import Create from './Pages/Create'
import Post from './store/postContext';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Firebase from './firebase/config'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

function App() {
  const{user,setUser} =useContext(AuthContext);
  const {firebase}=useContext(FirebaseContext);
  useEffect(()=>{
   
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
     // setUser(user);
      }
    })
  });
  return (
    <div>
  <Post>
      <Routes>
        <Route exact path='/'  element={ <Home />}>
       
        </Route>
        <Route path='/signup'  element={ <Signup/>}>
         
          </Route>
          <Route path='/login'  element={ <Login/>}>
         
          </Route>
          <Route path='/create'  element={ <Create/>}>
         
          </Route>
          <Route path='/view'  element={ <ViewPost/>}>
         
         </Route>
      </Routes>
      </Post>
    </div>
  );
}

export default App;
