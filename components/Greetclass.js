import React, { Component } from 'react'
import '../stylesheet.css'

class Greetclass extends Component {
  constructor(props){
    super(props)
    this.state = {
      text : "",
      select: "react"
    }
  }

  ontextChangeHandle = (event) =>{
    this.setState({
      text: event.target.value
    })
  }

  onSelectHandle = event =>{
    this.setState({
      select: event.target.value
    })
  }

  onSubmitHandle = event =>{
    alert(`${this.state.text} ${this.state.select}`)
  }

  render() {
    return(
      <form onSubmit = {this.onSubmitHandle}>
        <div>
          <lable>Name </lable>
          <input type = "text" value = {this.state.text} onChange = {this.ontextChangeHandle}></input>
        </div>

        <div>
          <select value = {this.state.select} onChange = {this.onSelectHandle}>
            <option>vue</option>
            <option>angular</option>
            <option>react</option>
          </select>
        </div>
        <button type = 'submit'>Submit</button>
      </form>
    )
  }
}


export default Greetclass;