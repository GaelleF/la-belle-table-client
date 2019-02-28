import React, { Component, setState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/api.js'
import TestComponent from'./components/testComponent'
import PostPhoto from './components/postPhoto/postPhoto';
import ShowPhotos from './components/showPhotos/showPhotos';
import { Router } from '@reach/router';
import Header from'./components/header/header';

class App extends Component {
  state = {
    check: 'ko',
    photos: undefined
  }
  
  componentDidMount(){
    console.log('state : ',this.state)
    api.getCheck()
    .then(res => this.setState({check:res}))
    .catch((error => console.log('ERROR : ', error))) 
    
    api.getUrlPhotos()
    .then(res=> {
      const urlPhotos = JSON.parse(res).map(image => image.url)
      console.log('getPhotosUrl app : ', urlPhotos)
      return this.setState({photos:urlPhotos})
    }) 
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Router className="main">
        <ShowPhotos path="/" photos={this.state.photos}/>
        <PostPhoto path="postPhoto"/>
        <TestComponent  path="authentification"  check={this.state.check}/>
      </Router>
      </div>
    );
  }
}

export default App;
