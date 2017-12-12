import React, { Component } from 'react';

class ComponentLifecycle extends Component {
  //constructor to initialize state
  constructor(){
    super();
    console.log("I am constructor");
  }

  //componentWillMount, fired after constructor
  componentWillMount(){
    console.log("I am component Will Mount");
  }

  //componentDidMount, fired after render
  componentDidMount(){
    console.log("I am component Did Mount");
  }

  //componentDidMount, fired after render
  componentWillUnmount(){
      console.log("I am component Will Un Mount");
  }

  //render method to display in browser
  render() {
    console.log("I am render");
    return (
      <div>
        <h4>This is to demonstrate component lifecycle! Check console.</h4>
      </div>
    );
  }
}

export default ComponentLifecycle;
