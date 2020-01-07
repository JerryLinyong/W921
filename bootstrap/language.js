// 定义全局的语言,可以通过i18n.locale来进行修改语言类型
import i18n from 'react-native-i18n';
import en_US from '../assets/languages/en-US';
import zh_CN from '../assets/languages/zh-CN';

// 设置默认的本地语言
i18n.defaultLocale = 'zh-CN';
// 自动按顺序去本地查找,如:en_US=>en-US=>en
i18n.fallbacks = true;
// 语言转化文件映射
i18n.translations = {
  'zh-CN': zh_CN,
  'en-US': en_US,
};

// i18n.getLanguages获取用户首选的语言环境
// i18n.locale = 'zh-CN' 设置本地语言环境
// i18n.defaultLocale首选默认语言

export default i18n;
