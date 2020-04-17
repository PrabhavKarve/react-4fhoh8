import React, { Component } from 'react';
import './style.css';
import Greet from './components/Greet';
import Greetclass from './components/Greetclass';
import Message from './components/message';
class App extends Component, Greetclass, Message{

  render() {
    return (
      <div>
        <Message/>
      </div>
    );
  }
}

export default App;