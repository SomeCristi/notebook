import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://notebook-8a17d-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;