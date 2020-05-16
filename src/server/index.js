import axios from 'axios';

export default {
  axiosInstance: axios.create({
    baseURL: 'https://bm-ac.ml/api',
  }),
};
