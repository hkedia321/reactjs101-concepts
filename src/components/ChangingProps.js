import React, { Component } from 'react';

class ChangingProps extends Component {

  //constructor to initialize state
  constructor(){
    super();
    //ser initial state
    this.state={
      name:"Jimmy Wales",
      age:51
    }
  }

  // change age in state
  handleAgeChange = () =>{
    this.setState({
      age: 62
    })
  }

  //change name in state
  handleNameChange = () =>{
    this.setState({
      name: "Bill Gates"
    })
  }

  //render method to display in browser
  render() {
    return (
      <div>
        <br/>
        <Person
          name={this.state.name}
          age={this.state.age}
          handleAgeChange={this.handleAgeChange}
          handleNameChange={this.handleNameChange}
        />
        <br/>

      </div>
    );
  }
}

// Person component to represent a Person
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
        <h2>Hello, I am {this.props.name}! My age is {this.props.age}. I am from {this.state.place}.</h2>
        <br/><br/>
        <button onClick={this.props.handleNameChange}>I am Bill Gates!</button>
        <br/>
        <button onClick={this.props.handleAgeChange}>My age is 62 years!</button>
      </div>
    );
  }
}

export default ChangingProps;
