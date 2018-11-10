import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <AboutMe />
        <Portfolio />
      </div>
    );
  }
}

export default App;
