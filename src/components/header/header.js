
import React, { Component } from 'react';
import {Link} from '@reach/router'
import './header.css'


//add menu 
const Header = () => {

  return (
    <header className="header__main">
      <nav id="header__nav">
        <Link to="/" className="header__item">Home</Link>
        <Link to="postPhoto" className="header__item">Poster une photo</Link>
        <Link to="authentification" className="header__item">Sign in</Link>
      </nav>    
    </header>
    )
}

export default Header

