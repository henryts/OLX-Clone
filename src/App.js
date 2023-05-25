import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>

      <Routes>
        <Route exact path='/'  element={ <Home />}>
       
        </Route>
        <Route path='/signup'  element={ <Signup/>}>
         
          </Route>
          <Route path='/login'  element={ <Login/>}>
         
          </Route>
      </Routes>
    
    </div>
  );
}

export default App;
