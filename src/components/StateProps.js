import React, { Component } from 'react';

class Board extends Component {
  //constructor to initialize state
  constructor(){
    super();
  }

  //render method to display in browser
  render() {
    return (
      <div>
        <br/>
        <Person name="Jimmy Wales" age={51} />
        <br/>
        <Person name="Bill Gates" age={62} />
      </div>
    );
  }
}

class Person extends Component {
  //constructor to initialize state
  constructor(){
    super();
    this.state={
      place:"USA"
    }
  }

  //render method to display in browser
  render() {
    return (
      <div>
        Hello, I am {this.props.name}! My age is {this.props.age} years. I am from {this.state.place}.
      </div>
    );
  }
}

export default Board;
