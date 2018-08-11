import React, { Component } from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Todos:" + this.props.Todos);
    return (

      this.props.Todos.map((todo, index) => (
        <p> {index+1}. {todo} </p>
        ))
    );

  }
}

export default TodoList