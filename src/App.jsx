import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

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
      <div style={{ height: 2000, width: '100%' }} />
    </div>
  );
}

export default App;
