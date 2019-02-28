const hostname = process.env.HOSTNAME || 'http://localhost:5000';

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

export default {
  getCheck,
  uploadPhoto,
  getPhotos,
  getUrlPhotos,
  downloadPhoto,
}