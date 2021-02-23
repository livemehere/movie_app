import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home}/>
      <Route path='/about' component={About}/>
    </HashRouter>
  );
}

export default App;