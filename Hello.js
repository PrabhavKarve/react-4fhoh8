import React, { Component } from 'react';
import './style.css';
import Greet from './components/Greet';
import Greetclass from './components/Greetclass';
import Message from './components/message';
import Counter from './components/counter';
class App extends Component, Greetclass, Message{

  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
}

export default App;