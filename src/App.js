import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./Form"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Jasmine - The text editor for all</h2>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
