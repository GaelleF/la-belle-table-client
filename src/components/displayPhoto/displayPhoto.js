import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import './displayPhoto.css'


const DisplayPhoto = ({ photo }) => {

  const icones = [
    { id: 1, icone: '0x1F37B', name: 'amateur de bières' },
    { id: 2, icone: '0x1F3DE', name: 'TERROIR' },
    { id: 3, icone: '0x1F3DA', name: 'CREPPY' },
    { id: 4, icone: '0x1F347', name: 'OENOLOGUE' },
    { id: 5, icone: '0x1F37E', name: 'GRAND LUXE' },
  ]

  console.log('DISPLAY components : ', photo)
  let icone = String.fromCodePoint(0x1F37B)

  const [compteurs, setCompteurs] = useState([0, 0, 0, 0, 0, 0])
  const [animation, setAnimation] = useState(false)
  const [tagPopup, setTagPopup] = useState('')

  const incrementCompteur = (indexCompteur, tag) => {
    setTagPopup(tag)
    setAnimation(true)
    setTimeout(() => setAnimation(false), 3000)
    return setCompteurs(compteurs.map((compteur, index) => (index === indexCompteur) ? compteur + 1 : compteur))
  }

  return (
    <div className="display-photo__element" >
      <div id="display-photo__header">
        <ul id="display-photo__tag__list">
          {icones.map((icone, index) => {
            return (<li className="display-photo__tag__item" key={index}>
              <button className="display-photo_emoticone" onClick={() => incrementCompteur(index, icone.name)}>
                {String.fromCodePoint(icone.icone)}
              </button>{compteurs[index]}
            </li>)
          })}
        </ul>
        
        <h3 id="display-photo__title">{photo.title}</h3>
        <div></div>
      </div>
      <div className="display-photo__image-container">
        <span className={`display-photo__image__tag ${animation ? 'animation_tag' : ''}`} >{tagPopup}</span>
        <img className="display-photo__image" src={api.downloadPhoto(photo.url)} alt="IMAGE " />
        <span className="display-photo__image__author" >{photo.author}</span>
      </div>
    </div>
  )
}

export default DisplayPhoto