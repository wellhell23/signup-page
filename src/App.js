import React, { Component } from 'react'
import SignUpPage from './Containers/SignUpPage'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="mainDiv">
        <div class="main-div-heading">Welcome to the sign up page</div>
        < SignUpPage />
      </div>
    )
  }
}

export default App
