import React, { Component } from 'react'
import axios from 'axios'

class postreq extends Component {
constructor(props){
  super(props)
  this.state = {
    password : "",
    username : "",
    body : ""
  }
}

changehandle = (e) => {
  this.setState({[e.target.name] : e.target.value})
}

submithandle = e =>{
  e.preventDefault()
  console.log(this.state)

  axios.post("https://192.168.1.8:8005/APIservice/rest/rootclass/userlogin")
  //axios.post("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    console.log(response)
  })
  .catch(e => {console.log(response)})
}

  render(){
    const {password, username, body} = this.state

    return(
      <div>
        <form onSubmit = {this.submithandle}>
          <div>
            <input type = "text" name = "password" value = {password} onChange = {this.changehandle}></input>
          </div>

          <div>
            <input type = "text" name = "username" value = {username} onChange = {this.changehandle}></input>
          </div>

          <div>
            <input type = "text" name = "body" value = {body} onChange = {this.changehandle}></input>
          </div>
        <button type = "submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default postreq