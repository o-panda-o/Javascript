/**
 * 1. Store - Globalized state
 * 2. Action - What you want to do
 * 3. Reducer -  Describes how your actions trasnform the state into the next state 
 * 4. Dispatch - Way to execute the `Action`(dispatch the action to the reducer)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux'; // It provides the component access to a particular store

const store = createStore(
                allReducers,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
              );

ReactDOM.render(
  <React.StrictMode>
    {/* This store is accessible along all the components */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
// ACTION
const increment=()=>{
  return{
    type: 'INCREMENT'
  }
}
const decrement=()=>{
  return{
    type: 'DECREMENT'
  }
}

// REDUCER
const counter=(state=0,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state+1;

    case 'DECREMENT':
      return state-1;

    default:
      break;
  }
}

// STORE
let store=createStore(counter);

store.subscribe(()=>console.log(store.getState())); // Display in console

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());

*/