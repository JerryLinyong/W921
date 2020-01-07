// 注册全局的方法
import i18n from './language';
import logger from './logger';
import './authority';
import {scaleSizeH, scaleSizeW, setSpText} from '../utils/screen';
import PropTypes from 'prop-types'; // ES6
import {isEmpty} from 'xe-utils';

// 全局的通用函数
global.isEmpty = isEmpty;

// 页面的props类型校验
global.PropTypes = PropTypes;

// 定义自适应屏幕的宽高函数
global.scaleSizeH = scaleSizeH;
global.scaleSizeW = scaleSizeW;
global.setSpText = setSpText;

// 定义全局的语言转换函数,必须用函数的形式,否则会报错 实例:_t('home.test') = 测试
global._t = text => i18n.t(text);
global.i18n = i18n;
// 定义全局的打印
global.logger = logger;
// 后台服务器地址
global.SERVER_ADDRESS = 'http://192.168.116.126:8081';

// 定义是否为开发模式,目前用于模拟数据和设置打印等级
global.isDev = true;
// 根据模式设置需要打印的等级
if (isDev) {
  // 开发模式,全部打印
  logger.setSeverity('debug');
  // 设置本地的环境为中文
  i18n.locale = 'zh-CN';
} else {
  // 发布模式,只打印错误
  logger.setSeverity('error');
}
