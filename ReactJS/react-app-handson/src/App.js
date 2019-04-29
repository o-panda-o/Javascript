import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/01.functionalComponent'
import Welcome from './components/02.classComponents'

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome name="Bibhuti"/>
    </div>
  );
}

export default App;
