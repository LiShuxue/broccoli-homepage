import axios from 'axios';

const instance = axios.create();
instance.defaults.timeout = 20 * 1000;
instance.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default instance;
