/**
http请求封装,做发送和返回值的拦截处理
*/

import axios from 'axios';
import {getMacAddress} from 'react-native-device-info';
import Ajv from 'ajv';

// url 验证
const ajv = new Ajv();
const validateUrl = ajv.compile({format: 'url'});

// 获取mac地址,需要权限
let mac = '';
function getMac() {
  getMacAddress()
    .then(macAdress => {
      // "E5:12:D8:E5:69:97"
      mac = macAdress.replace(/,/g, '');
    })
    .catch(e => {
      logger.error('获取mac地址失败:' + e);
    });
}
getMac();

// 设置返回值状态
const ApiResponseStatus = {
  success: true,
  ok: true,
  failed: _t('failed'),
  denied: _t('denied'),
  error: _t('error'),
  unauthorized: _t('unauthorized'),
};

/**
 * 根据响应包判断API执行是否出错
 * 如果不成功，返回出错信息
 */
function getApiResponseMessage(response) {
  if (response.status && ['ok', 'success'].includes(response.status)) {
    return true;
  } else {
    if (response.status && response.status in ApiResponseStatus) {
      return response.message || ApiResponseStatus[response.status];
    } else {
      logger.debug(response);
      return _t('http.errorMsg');
    }
  }
}

// 创建 axios 实例
const httpApiRequest = axios.create({
  timeout: 5000, // request timeout
});

// 创建请求拦截器
const apiRequestInterceptor = [
  config => {
    // 如果mac地址不存在,则重新请求
    if (!mac) getMac();
    // 统一更改http请求的url
    // 添加mac地址
    config.url = SERVER_ADDRESS + '/' + mac + config.url;
    // 验证URL
    if (validateUrl(config.url)) {
      logger.error('url格式错误:' + config.url);
    }
    return config;
  },
  error => {
    logger.error(error);
    return Promise.reject(error);
  },
];

// 返回值拦截
const apiResponseInterceptor = [
  response => {
    const res = response.data;
    let apiAnswerMessage = getApiResponseMessage(res);
    if (apiAnswerMessage === true) {
      return res;
    } else {
      logger.error('发送http请求错误:' + apiAnswerMessage);
      return Promise.reject(apiAnswerMessage);
    }
  },
  error => {
    logger.error('发送http请求错误:' + error);
    return Promise.reject(error);
  },
];

// 安装拦截器进行通用逻辑处理
httpApiRequest.interceptors.request.use(...apiRequestInterceptor);
httpApiRequest.interceptors.response.use(...apiResponseInterceptor);

export default httpApiRequest;
