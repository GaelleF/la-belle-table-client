import React, { useState, useEffect  } from 'react';
import api from '../../api/api'
import './showPhotos.css'
import DisplayPhotos from '../displayPhoto/displayPhoto'

const ShowPhotos = (photos) => {

  //const [photos,setphotos] = useState()
  console.log('photo  :  ', photos)
  useEffect(() => {
    // api.getPhotos()
    // .then(res=> {
    //   console.log('getPhotos show : ', res)
    //   //return setphotos(res)
    })

    // const displayPhotos = (photos) => {
    //   //return photos.map(photo => {
    //     console.log('F : ' , photos)
    //    // return "test"
    //  // })
    // }
  //})

  const displayPhotos = (photos) => {
    console.log('photo : display : ',photos)
    if (photos.photos !== undefined){
    // return photos.map(photo => {
    //   console.log('F : ' , photos)
      return  (<DisplayPhotos photo={photos} />)
  
    }
    return "test"
  }

  return (
    <div >
      {displayPhotos(photos)}
    </div>
  )
}

export default ShowPhotos
