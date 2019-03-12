
import React, { Component } from 'react';
import {Link} from '@reach/router'
import './header.css'
import logo from '../../public/celebration.png';
import name from '../../public/late-evening-punk.png';


//add menu 
const Header = () => {

  return (
    <header className="header__main">
      <div id="logo">
        <img id="logo__picture" src={logo} alt="logo" /> 
        <img id="logo__name" src={name} alt="name" /> 
      </div>
      <div id="header__sort-by-tag">
        <ul id="header__sort-by-tag__list">
          <li className="header__sort-by-tag__item"><div className="header_emoticone">{String.fromCodePoint(0x1F37B)}</div> Amateur<br />de bières</li>
          <li className="header__sort-by-tag__item"><div className="header_emoticone">{String.fromCodePoint(0x1F3DE)}</div> Terroir</li>
          <li className="header__sort-by-tag__item"><div className="header_emoticone">{String.fromCodePoint(0x1F3DA)}</div> Creppy</li>
        </ul></div>
      <nav id="header__nav">
        <Link to="/" className="header__item">Home</Link>
        <Link to="postPhoto" className="header__item">Poster une photo</Link>
        <Link to="authentification" className="header__item">Sign in</Link>
      </nav>    
    </header>
    )
}

export default Header

