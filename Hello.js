import React, { Component } from 'react';
import './style.css';
import Greet from './components/Greetclass';
class App extends Component, Greetclass, Message{

  render() {
    return (
      <div>
        <Greet></Greet>
      </div>
    );
  }
}

export default App;