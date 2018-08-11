import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Todo App</h1>
        </header>
        <p className="App-intro">
          <form action="#">
            <input type="text" name="todo" placeholder="what needs to be done?" />
          </form>
        </p>
      </div>
    );
  }
}

export default App;
