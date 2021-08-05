import React, { Component } from 'react'

export default class App extends Component {
  
  componentDidMount() { // once component mounts invoke this lifecycle method
    fetch('http://api.open-notify.org/astros.json') // fetch data
    .then(resp => resp.json())
    .then(people => console.log(people))  // log it once returned
  }

  render() { // render this when component is called
    return (
      <div></div>
    )
  }
}
