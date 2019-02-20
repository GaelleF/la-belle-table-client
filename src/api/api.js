const hostname = process.env.HOSTNAME || 'http://localhost:5000';

const path = route => `${hostname}${route}`

const getCheck = () => fetch(path('/'))
  .then(res=>res.text())


export default {
  getCheck,
}