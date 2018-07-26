import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(()=>{ //remove a random hobbie of a randome instructor
      const randInd = Math.floor(
        Math.random() * 
        this.state.instructors.length
      );
      const randInst = this.state.instructors[randInd];
      const hobbyIndex = Math.floor(
        Math.random * 
        randInst.hobbies.length
      )
      const instructors = this.state.instructors.slice(0);
      instructors[randInd]
            .hobbies.splice(hobbyIndex,1); //hobbie removed
      this.setState({instructors})
      

    },5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
