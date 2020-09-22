import React, { Component } from 'react'
import '../stylesheet.css'
import axios from 'axios'

class getreq extends Component {
  constructor(props){
    super(props)
    this.state = {
      post : []
    }
  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data)
    this.setState({post : response.data})
  })
  .catch(error => {console.log(error)})
}

  render(){
    const { post } = this.state
    return(
      <div>
      {
        post.map(post => <div key = {post.id}>{post.title}</div>)
      }
      </div>
      )
  }
}

export default getreq