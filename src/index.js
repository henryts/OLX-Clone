import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/firebaseContext';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseContext } from './store/firebaseContext';
import  firebase  from './firebase/config';

ReactDOM.render(
    <FirebaseContext.Provider value = {{firebase}}>

<BrowserRouter>
<App />
</BrowserRouter></FirebaseContext.Provider>, document.getElementById('root'));

