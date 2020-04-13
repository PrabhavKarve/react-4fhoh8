import React, { Component } from 'react';
import './style.css';
import Greet from './components/Greet';
import Greetclass from './components/Greetclass';
class App extends Component, Greetclass  {

  render() {
    return (
      <div>
      <Greet/>
      <Greetclass/>
      </div>
    );
  }
}

export default App;