/**
  http请求封装,做发送和返回值的拦截处理
*/

import axios from 'axios';

// url 验证
const validateUrl = _ajv.compile({format: 'url'});

// 根据状态,返回不同的文字
const ApiResponseStatus = {
  200: _t('success'),
  404: _t('timeout'),
};

/**
 * 根据响应包判断API执行是否出错
 * 如果不成功，返回出错信息
 */
function getApiResponseMessage(response) {
  return ApiResponseStatus[response.status];
}

// 创建 axios 实例
const httpApiRequest = axios.create({
  timeout: 5000, // request timeout
});

// 创建请求拦截器
const apiRequestInterceptor = [
  config => {
    // 统一更改http请求的url
    config.url = _serverAddress + config.url;
    // 验证URL
    if (validateUrl(config.url)) {
      throw new Error('url格式错误');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
];

// 返回值拦截
const apiResponseInterceptor = [
  response => {
    let apiAnswerMessage = getApiResponseMessage(response);
    // 成功则返回成功的数据,不成功则抛出错误
    if (response.status === 200) {
      return {payload: response.data, message: apiAnswerMessage};
    } else {
      return Promise.reject(apiAnswerMessage);
    }
  },
  error => {
    return Promise.reject(error);
  },
];

// 安装拦截器进行通用逻辑处理
httpApiRequest.interceptors.request.use(...apiRequestInterceptor);
httpApiRequest.interceptors.response.use(...apiResponseInterceptor);

export default httpApiRequest;
