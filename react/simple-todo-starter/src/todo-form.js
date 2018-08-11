import React, { Component } from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''    
    }; 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });

  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault(); 
    this.props.UpdateTodos(this.state.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="what needs to be done?"/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm