import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Test from './components/Test';

import { BasicNeeds, CorePlatform } from './components/ProjectDetail';

const Home = () => (
  <div className="App">
    <Navigation />
    <Landing />
    <About />
    <div style={{ height: '30vh' }} />
    <Projects />
    <div className="resume-container">
      <Resume />
    </div>
    <Contact />
    <div style={{ height: 2000, width: '100%' }} />
  </div>
);

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/basic-needs"
        component={BasicNeeds}
      />
      <Route
        path="/core-platform"
        component={CorePlatform}
      />
      <Route
        path="/test"
        component={Test}
      />
    </Router>

  );
}

export default App;
