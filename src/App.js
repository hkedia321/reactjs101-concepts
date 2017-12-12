import React, { Component } from 'react';
import logo from './logo.svg';

import Objects from './components/Objects';
import StateProps from './components/StateProps';
import ChangingProps from './components/ChangingProps';
import ComponentLifecycle from './components/ComponentLifecycle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentLifecycle/>
      </div>
    );
  }
}

export default App;
