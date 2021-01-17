import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://epic.gsfc.nasa.gov/'
});

export default axios;
