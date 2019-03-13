import React, { Component, setState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/api.js'
import TestComponent from'./components/testComponent'
import PostPhoto from './components/postPhoto/postPhoto';
import ShowPhotos from './components/showPhotos/showPhotos';
import Authentification from './components/authentification/authentification';
import { Router, Redirect } from '@reach/router';
import Header from'./components/header/header';
import * as firebase from 'firebase'
import app from 'firebase/app';

const  config = {
  apiKey: "AIzaSyAElJGokZs5lu9j0RKHpl6XqeLjvVPueY0",
  authDomain: "lateatevening.firebaseapp.com",
  databaseURL: "https://lateatevening.firebaseio.com",
  projectId: "lateatevening",
  storageBucket: "lateatevening.appspot.com",
  messagingSenderId: "893285356337"
};

class App extends Component {
  state = {
    check: 'ko',
    photos: undefined
  }

  constructor(){
    super()
    app.initializeApp(config);
    // firebase.storage()
    //  firebase.storage().ref();
  }

 
  

  
  componentDidMount(){
    
    // api.getUrlPhotos()
    // .then(res=> {
    //   const urlPhotos = JSON.parse(res)//.map(image => image.url)
    //   console.log('getPhotosUrl app : ', JSON.parse(res))
    //   return this.setState({photos:urlPhotos})
    // }) 
    const photos = []
    const  db = firebase.firestore();
    db.collection("photos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log('querySnapshot', doc.data());
          photos.push(doc.data())
      });
      this.setState({photos:photos})
 });
  }

  render() {

    
    //firebase.app.initializeApp(this.config);
    return (
      <div className="App">
      <Header />
      <Router className="main">
        {/* <Redirect from='/' to='/'/> */}
        <ShowPhotos path="/" photos={this.state.photos}/>
        <PostPhoto path="postPhoto"/>
        <Authentification  path="authentification" />
      </Router>
      </div>
    );
  }
}

export default App;
