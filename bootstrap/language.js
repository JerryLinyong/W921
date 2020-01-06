import i18n from 'react-native-i18n';
import en_US from '../assets/languages/en-US';
import zh_CN from '../assets/languages/zh-CN';

// 设置默认的本地语言
i18n.defaultLocale = 'zh_CN';
// 设置本地的环境为中文,根据配置再进行修改
i18n.locale = 'zh-CN';
// 自动按顺序去本地查找,如:en_US=>en-US=>en
i18n.fallbacks = true;
// 语言转化文件映射
i18n.translations = {
  'zh-CN': zh_CN,
  'en-US': en_US,
};

// i18n.getLanguages获取用户首选的语言环境
// i18n.locale: 设置本地语言环境
// i18n.defaultLocale首选默认语言

export default i18n;
