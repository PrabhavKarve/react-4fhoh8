import React, { Component } from 'react';
import './style.css';
import Greet from './components/Greet';
class App extends Component {

  render() {
    return (
      <div>
        <Greet></Greet>
      </div>
    );
  }
}

export default App;