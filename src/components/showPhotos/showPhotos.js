import React, { useState, useEffect  } from 'react';
import api from '../../api/api'
import './showPhotos.css'
import DisplayPhotos from '../displayPhoto/displayPhoto'

const ShowPhotos = ({photos}) => {

  const displayPhotos = (photos) => {
    console.log('photo : display : ',photos)
    if (photos !== undefined){
      return photos.map(photo => {
        console.log('F : ' , photo)
        return  (<DisplayPhotos key={photo} photo={photo} />) 
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
