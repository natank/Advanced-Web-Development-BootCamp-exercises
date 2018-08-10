import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props) {
      super(props);
    }
    render(){
      const boxStyle = {
        backgroundColor: this.props.color
      };
      return <div className= 'Box' style={boxStyle} />;
    }
}
export default Box;
