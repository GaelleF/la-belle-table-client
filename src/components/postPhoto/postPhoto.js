import React, { useState  } from 'react';
import api from '../../api/api'
import './postPhoto.css'

const PostPhoto = () => {

  const [file,setFile] = useState()

  const handleSubmit = (event) => {
    
    event.preventDefault()
    console.log('handle submi', event.target)
    api.uploadPhoto(event)
    .then(res => console.log('response upload ', res))
  }  

  const handleChange = (event) => {
    console.log("new file ", event.target.files[0])
    setFile(URL.createObjectURL(event.target.files[0]))
   
  }

  return (
    <div>
      <p>Poste ta plus belle photo de table de fin de soirée</p>
      <form onSubmit={handleSubmit}>
        <label>
          upload photo : 
          <input type="file" name="newFile" onChange={handleChange}/>
        </label>
      <input type="submit" value="submit" />
      </form>
      <div ><img src={file} id="postPhoto__preview__image" alt="preview"/>{file}</div>
    </div>
  )
}

export default PostPhoto
