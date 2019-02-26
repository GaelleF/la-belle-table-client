import React, { useState,useEffect  } from 'react';


const DisplayPhoto = ({photo}) => {
  let scr
  const [imageUrl, setImageUrl]=useState('')
  console.log('Display1: ', photo.photos)
  
  const uint2Url= async(uintArray) => {
    const res= await uintArray.photos.read()
 
    console.log('Display2: ', res.value,'...')
    let blob= new Blob(res.value, {type:"image/jpg"})
    var urlCreator = window.URL || window.webkitURL;
    const imageUrlTemp = await urlCreator.createObjectURL( blob );
    //console.log('Display3: ',res.read())
    console.log("imageUrl : ", imageUrlTemp)
    scr= imageUrlTemp
    //setImageUrl(imageUrlTemp)
  //.then((imageUrlTemp)=> setImageUrl(imageUrlTemp))
}

useEffect (()=>{
  setImageUrl(uint2Url(photo))
})

  return (
    <div>
      {/*file*/}
      "This is displayPhoto !!!"
      <img src= {scr} alt="IMAGE "/>
    </div>
  )
}

export default DisplayPhoto