import React from 'react';
import './App.css';

import Header from './Header';
import LandingPage from './LandingPage';
import Project from './Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Project />
    </div>
  );
}

export default App;
