import {all, fork, call} from 'redux-saga/effects';
import areasWorkflow from './areas';
import initWorkflow from './init';

export default function* sagas() {
  // 从远端获取设备相应的数据,用来渲染设备
  yield call(initWorkflow);
  yield all([fork(areasWorkflow)]);
}
