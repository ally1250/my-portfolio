import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
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
}

export default App;
