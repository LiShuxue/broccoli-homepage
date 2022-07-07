import axios from './axios';

// 表单信息提交到后台
export const submitFormInfo = (params) => {
  return axios({
    method: 'post',
    url: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    data: params,
  });
};
