import React, { Component, setState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/api.js'
import TestComponent from'./components/testComponent'
import PostPhoto from './components/postPhoto/postPhoto';
import ShowPhotos from './components/showPhotos/showPhotos';
import { Router } from '@reach/router';
import Header from'./components/header/header';
import * as firebase from 'firebase'

class App extends Component {
  state = {
    check: 'ko',
    photos: undefined
  }


  config = {
    apiKey: "AIzaSyAElJGokZs5lu9j0RKHpl6XqeLjvVPueY0",
    authDomain: "lateatevening.firebaseapp.com",
    databaseURL: "https://lateatevening.firebaseio.com",
    projectId: "lateatevening",
    storageBucket: "lateatevening.appspot.com",
    messagingSenderId: "893285356337"
  };
  

  
  componentDidMount(){
    console.log('state : ',this.state)
    api.getCheck()
    .then(res => this.setState({check:res}))
    .catch((error => console.log('ERROR : ', error))) 
    
    api.getUrlPhotos()
    .then(res=> {
      const urlPhotos = JSON.parse(res)//.map(image => image.url)
      console.log('getPhotosUrl app : ', JSON.parse(res))
      return this.setState({photos:urlPhotos})
    }) 
  }

  render() {
    firebase.initializeApp(this.config);
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
