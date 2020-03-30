import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      {/* Can only contain one route or will throw error when you come back from one page */}
      <BrowserRouter> 
      {/* Necessary so as not to print the error component everywhere */}
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>{/* exact matches to the exact route */}
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route component={Error} />{/* default rendering in case of unnecessary url */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
