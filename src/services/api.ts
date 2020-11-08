import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ohappyhourserver.herokuapp.com'
})

export default api