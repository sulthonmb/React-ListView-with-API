import React, { Component } from 'react';
import Home from './pages/home/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <Home />;
    /*(

       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My React</h1>
        </header>
        <h2>First Page</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
    );*/
  }
}

export default App;
