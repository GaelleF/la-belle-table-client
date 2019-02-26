const hostname = process.env.HOSTNAME || 'http://localhost:5000';

const path = route => `${hostname}${route}`

const getCheck = () => fetch(path('/'))
  .then(res=>res.text())

const uploadPhoto = (formEvent) => fetch(path('/photos/upload'), 
  { method: 'post',
    body:  new FormData(formEvent.target)})
  .then(res=>res.text())

const getPhotos = () => fetch(path('/photos'))
  // .then(res=>console.log('getPhotos', res))

export default {
  getCheck,
  uploadPhoto,
  getPhotos,
}