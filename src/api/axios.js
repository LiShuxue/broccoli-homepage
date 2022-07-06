import axios from 'axios';

const instance = axios.create();
instance.defaults.timeout = 20 * 1000;
instance.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// need to config detail interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// need to config detail interceptor
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default instance;
