import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Home from './components/Home'
import BootstrapNavBar from './components/BootstrapNavBar';

function App() {
  return(
    <Router>
      <BootstrapNavBar />
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/aboutme" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/interests" component={Interests} />
      </Switch>
    </Router>
  );
}

export default App;
