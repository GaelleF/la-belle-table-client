import React, { useState,useEffect  } from 'react';
import api from '../../api/api';
import './displayPhoto.css'


const DisplayPhoto = ({photo}) => {
  console.log('DISPLAY components : ', photo)
  let icone = String.fromCodePoint(0x1F37B)
  const [compteurs,setCompteurs] = useState([0, 0, 0, 0, 0, 0])
  //const [animations,setAnimations] = useState([false, false,false, false,false, false])
  const [animation,setAnimation] = useState(false)
  const [tagPopup, setTagPopup] = useState('')
  //incrementCompteur(compteur1
  //console.log('BUTTON click', compteur1)
  const incrementCompteur = (indexCompteur, tag)=> {
    console.log('INCREMENT ')
    setTagPopup(tag)
    //setAnimations(animations.map((animation, index) => (index === indexCompteur)? true : false))
    setAnimation(true)
    setTimeout(()=> setAnimation(false), 1000)
    return setCompteurs(compteurs.map((compteur, index) => (index === indexCompteur)? compteur + 1 : compteur))
  }

  return (
    <div className="display-photo__element">
    <div id="display-photo__header">
    <ul id="display-photo__tag__list">
          <li className="display-photo__tag__item">
            <button className="display-photo_emoticone" onClick={()=>incrementCompteur( 0, 'amateur de bière')}>
              {String.fromCodePoint(0x1F37B)}
            </button>{compteurs[0]}
          </li>
          <li className="display-photo__tag__item">
            <button className="display-photo_emoticone" onClick={()=>incrementCompteur(1, 'TERROIR')}>
              {String.fromCodePoint(0x1F3DE)}</button>
            {compteurs[1]}
          </li>
          <li className="display-photo__tag__item"><div className="display-photo_emoticone">
          {String.fromCodePoint(0x1F3DA)}</div> {compteurs[2]}</li>
        </ul>
        <h3 id="display-photo__title">SUPER soirée !!! {icone}</h3>
        <div></div>
      </div>
      <div className="display-photo__image-container">
        <span className={`display-photo__image__tag ${animation?'animation_tag':''}`} >{tagPopup}</span>
        <img  className="display-photo__image" src= {api.downloadPhoto(photo)} alt="IMAGE "/>
      </div>
      
      {/* <div className="display-photo__image" style={{backgroundImage:'url('+api.downloadPhoto(photo)+')'}}>bla bla </div> */}
    </div>
  )
}

export default DisplayPhoto