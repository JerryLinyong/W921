import i18n from './language';
import logger from './logger';
import theme from './theme';

// 定义全局的语言转换函数 实例:_t('home.test') = 测试
global._t = i18n.t;
// // 定义全局的打印
global.logger = logger;
// 定义全局的样式
global.theme = theme;
