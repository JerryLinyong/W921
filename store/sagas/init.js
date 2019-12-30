/**
 *
 * app初始化
 *
 */

import {take, call, delay} from 'redux-saga/effects';
import http from '@utils/http';
import {getMacAddress} from 'react-native-device-info';

export default function* initWorkflow() {
  yield delay(1000);
  try {
    // const request = yield call(http, 'www.baidu.com');
    // const mac = yield call(getMacAddress);
  } catch (e) {
    logger.error('初始化app数据失败:' + e);
  }
}
