import React, { useState, useEffect  } from 'react';
import api from '../../api/api'
import './showPhotos.css'
import DisplayPhotos from '../displayPhoto/displayPhoto'
import * as firebase from 'firebase'

const ShowPhotos = ({photos}) => {

  console.log('AUTH ', firebase.auth())


  const displayPhotos = (photos) => {
    //console.log('photo : display : ',firebase.auth())

    if (photos !== undefined){
      return photos.map(photo => {
        console.log('F : ' , photo)
        return  (<DisplayPhotos key={photo.idPhoto} photo={photo} />) 
      })
    }
    return "loading fail"
  }
  
  
  return (
    <div className="show-photos__container">
      {displayPhotos(photos)}
    </div>
  )
}

export default ShowPhotos
