import React, { useState } from 'react';
import api from '../../api/api'
import './postPhoto.css'

const PostPhoto = () => {

  const [file, setFile] = useState()

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
      <h2>Poste ta plus belle photo de table de fin de soirée</h2>
      <p>personne ne doit être reconaissable</p>
      <form onSubmit={handleSubmit} id="post-photo__form">
        <div>
        <input type="file" id="new-file" label="test" name="newFile"  name="newFile" onChange={handleChange} accept=".jpg, .jpeg, .png" />
        {/* <label htmlFor="new-file"> Sélectionner des images à uploader</label> */}
        </div>
        <input type="text" name="title" placeholder=" Titre de la photo" id="post-photo__form__title" />
        <input type="submit" value="Envoyer" id="post-photo__form__submit" />
      </form>
      <div ><img src={file} class={file ? '' : 'post-photo__preview'} id="postPhoto__preview__image" alt="preview" /></div>
    </div>
  )
}

export default PostPhoto
