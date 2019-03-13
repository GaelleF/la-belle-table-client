import * as firebase from 'firebase'



const hostname = process.env.HOSTNAME || 'http://localhost:5000';
//const apiFirebase = 

const path = route => `${hostname}${route}`

const getCheck = () => fetch(path('/'))
  .then(res=>res.text())

const uploadPhoto = (formEvent) => fetch(path('/photos/upload'), 
  { method: 'post',
    body:  new FormData(formEvent.target)})
  .then(res=>res.text())


const getPhotos = () => fetch(path('/photos')) //not use
  // .then(res=>console.log('getPhotos', res))

const getUrlPhotos = () => fetch(path('/url'))
.then(res => res.json())

const downloadPhoto = (url) => path(`/${url}`)

// Firebase

const uploadPhotoFirebase = (file, author, title, idUser, storageRef, dbRef) => {
    const timestamp = Number(new Date());
    const fileRef = storageRef.child('storage-photos/'+timestamp.toString()+'-'+file.name)
    .put(file)
    .then(snapshot => {
      return dbRef.collection("photos").add({
        author: author,
        title: title,
        createdAt: Date.now(),
        idPhoto : timestamp.toString()+'-'+file.name,
        idUser: idUser

      })})
    .catch(error => console.error(error.message))
  }
  


export default {
  getCheck,
  uploadPhoto,
  getPhotos,
  getUrlPhotos,
  downloadPhoto,
  uploadPhotoFirebase,
}