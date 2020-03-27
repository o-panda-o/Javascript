import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
/**
 * 4 steps involved to create or convert your application into redux app:
 *  1. Create a store:
 *      + 2 pieces of information is needed to create the same:
 *          a. reducer
 *          b. state
 *  2. Reducer:(agent(like james bond): does what we tell it to do)
 *      + 2 things needed to be done:
 *          a. state
 *          b. action
 *  3. Subscribe:(like connected to the base(like james bond needs to be connected 
 *                to the base for taking orders))
 *      + Programmatically it means get the current state
 *  4. Dispatch: (action sent(like james bond is said to get nuclear code....)) 
 */