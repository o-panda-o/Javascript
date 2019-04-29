import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/01.functionalComponent'
import Welcome from './components/02.classComponents'
import Message from './components/03.state'
import Counter from './components/04.setState'
import {KnowDesignation,KnowExpectedDesignation} from './components/05.destructuringInFunctionalComponent'

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* 
      <Welcome name="Bibhuti" role="Backend Engineer">
        <p>The technologies I'm working on are Java,MongoDB</p>
      </Welcome> 
      */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <KnowDesignation name="Bibhuti" designation="Backend Engineer" /> */}
      {/* <KnowExpectedDesignation name="Bibhuti" designation="Full-stack Engineer" /> */}
    </div>
  );
}

export default App;
