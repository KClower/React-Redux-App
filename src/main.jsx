import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

// step 5
// import reducer function
import { reducer } from './Reducers';
import App from './App.jsx';


// step 1
// import what you think you will be using in the application

// step 2 
// create a reducer folder with index.js file to import
// go to file and create reducer



// step 6
// create store
const store = createStore(reducer, applyMiddleware(thunk));

// step 7
// wrap App with Provider and add store to Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
// step 8
// NOW BUILD YOU COMPONENTS
