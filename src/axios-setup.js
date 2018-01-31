import axios from 'axios';

const instance = axios.create({
  baseURL:"https://stressgo-963b1.firebaseio.com/"
});

export default instance
