import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/01.functionalComponent'
import Welcome from './components/02.classComponents'
import Message from './components/03.state'
import Counter from './components/04.setState'

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome name="Bibhuti" role="Backend Engineer">
        <p>The technologies I'm working on are Java,MongoDB</p>
      </Welcome>
      <Message />
      <Counter />
    </div>
  );
}

export default App;
