import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-e5682.firebaseio.com/',
});

export default instance;
