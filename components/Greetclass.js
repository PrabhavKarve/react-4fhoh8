import React, { Component } from 'react'

class Greetclass extends Component {

  constructor(props){
    super(props)

    this.state = {
      islogged: true
    }
  }

  render() {
    const names = ['a','b','c']
    const namelist = names.map(name => <h2>{name}</h2>)
    return(
      <div>{namelist}</div>
    )
  }
}


export default Greetclass;