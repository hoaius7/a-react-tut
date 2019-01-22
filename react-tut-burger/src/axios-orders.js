import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-tut-burger.firebaseio.com/'
});

export default instance;