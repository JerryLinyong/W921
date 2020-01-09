// 注册全局的方法
import i18n from './language';
import logger from './logger';
import './authority';
import {reactH, reactW, reactT, onePx} from '../utils/screen';
import PropTypes from 'prop-types'; // ES6

// 全局的通用函数

// 页面的props类型校验
global._propTs = PropTypes;

// 定义自适应屏幕的宽高函数
global._reactH = reactH;
global._reactW = reactW;
global._reactT = reactT;
global._onePx = onePx;

// 定义全局的语言转换函数,必须用函数的形式,否则会报错 实例:_t('home.test') = 测试
global._t = text => i18n.t(text);
global._i18n = i18n;
// 定义全局的打印
global._logger = logger;
// 后台服务器地址
global._serverAddress = 'http://192.168.116.126:8081';

// 定义是否为开发模式,目前用于模拟数据和设置打印等级
global._isDev = true;
// 根据模式设置需要打印的等级
if (_isDev) {
  // 服务器地址修改
  global._serverAddress = 'http://192.168.110.12:3000/mock/19/apps/hispro/api';
  // 开发模式,全部打印
  logger.setSeverity('debug');
  // 设置本地的环境为中文
  _i18n.locale = 'zh-CN';
} else {
  // 发布模式,只打印错误
  logger.setSeverity('error');
}
