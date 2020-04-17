import React, { Component } from 'react'

class Message extends Component {

  constructor(){
    super()
    this.state = {
      message : "hello"
    }
  }

  subscriber(){
    console.log("ok")
    this.setState ({
      message: "subscribed"
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick = {()=> this.subscriber()}>subscribe</button>
        </div>
    );
  }
}

export default Message