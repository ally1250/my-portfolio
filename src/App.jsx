import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/ProjectDetail/Portfolio';

import { BasicNeeds, CorePlatform, AmazonInternship } from './components/ProjectDetail';

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
  </div>
);

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/core-platform"
        component={CorePlatform}
      />
      <Route
        path="/amazon-internship"
        component={AmazonInternship}
      />
      <Route
        path="/basic-needs"
        component={BasicNeeds}
      />
      <Route
        path="/art"
        component={Portfolio}
      />
      <Route
        path="/art"
        component={Portfolio}
      />
    </Router>
  );
}

export default App;
