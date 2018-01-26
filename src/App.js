import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Explore from './Components/Explore.js';
import ResultBox from './Components/ResultBox.js';
import ResultSingle from './Components/ResultSingle.js';
import Search from './Components/Search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Explore />
        <ResultBox />
        <Search />
      </div>
    );
  }
}

export default App;
