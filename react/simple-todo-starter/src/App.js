import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './todo-form';
import TodoList from './todo-list'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: ["sfdfsd" , "sdkjg e"]
    }
  }
  
  UpdateTodos = (todo) => {
    const todos = [...this.state.Todos, todo];

    this.setState({Todos: todos});
    //console.log("update todos" + this.state.Todos); 
  }
  

  render() {
    console.log("render app new todo: " + this.state.Todos);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Todo App</h1>
        </header>
        <TodoForm UpdateTodos = {this.UpdateTodos}/>
        <TodoList Todos = {this.state.Todos}/>
      </div>
    );
  }
}

export default App;
