import React, { useState,useEffect  } from 'react';
import api from '../../api/api'


const DisplayPhoto = ({photo}) => {
  console.log('DISPLAY components : ', photo)
  return (
    <div className="">
      "This is displayPhoto 2 !!!"
      <img src= {api.downloadPhoto(photo)} alt="IMAGE "/>
    </div>
  )
}

export default DisplayPhoto