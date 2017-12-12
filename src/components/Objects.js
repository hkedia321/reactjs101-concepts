import React, { Component } from 'react';

class Objects extends Component {
  //constructor to initialize state
  constructor(){
    super();
  }

  //render method to display in browser
  render() {
    var person={
      age:33,
      name:"Mark Zuckerberg",
      company:"Facebook"
    }
    return (
      <div>
        <br/><br/>
        The person's name is: {person.name}
        <br/>
        The person's age is: {person.age}
        <br/>
        The person's company is: {person.company}
        <br/>
      </div>
    );
  }
}

export default Objects;
