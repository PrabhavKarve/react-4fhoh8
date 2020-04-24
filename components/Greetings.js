import React, {Component} from 'react'

class Greetings extends Component{

  constructor(props){
    super(props)

    this.state = {
      isloged: true
    }
  }
  render(){

   return this.state.isloged ?
   (<div>hi</div>):
   (<div>bye</div>)
    
  }
}

export default Greetings