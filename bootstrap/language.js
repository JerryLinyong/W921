import i18n from 'react-native-i18n';
import en_US from '../assets/languages/en-US';
import zh_CN from '../assets/languages/zh-CN';

// 设置默认的本地语言
i18n.defaultLocale = 'zh_CN';
// 自动按顺序去本地查找,如:en_US=>en-US=>en
i18n.fallbacks = true;
// 语言转化文件映射
i18n.translations = {
  'en-US': en_US,
  'zh-CN': zh_CN,
};

// I18n.getLanguages获取用户首选的语言环境
// I18n.locale: 设置本地语言环境
// I18n.defaultLocale首选默认语言

export default i18n;
