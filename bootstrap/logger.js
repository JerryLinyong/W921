import {logger as rnLogger, chromeConsoleSyncTransport} from 'react-native-logs';

// msg: any
// level: { severity: number; text: string }
// cb?: () => boolean
function customTransport(msg, level, cb) {
  // 采用谷歌的打印方式,具有颜色
  chromeConsoleSyncTransport(msg, level);
  // 根据不同等级做自定义处理
  if (level.severity === 3) {
  }
  return true;
}

const config = {
  transport: customTransport, // 自定义处理函数
  // 自定义打印等级
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
};

// 创建打印实例
let logger = rnLogger.createLogger(config);

export default logger;
