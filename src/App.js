import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/api.js'
import TestComponent from'./components/testComponent'

class App extends Component {
  state = {
    check: 'ko'
  }
  

  componentDidMount(){
    console.log('state : ',this.state)
    api.getCheck()
    .then(res => this.setState({check:res}))
    .catch((error => console.log('ERROR : ', error)))   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <TestComponent   check={this.state.check}/>
      </div>
    );
  }
}

export default App;
