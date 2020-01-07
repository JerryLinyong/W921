/**
 *
 * 处理呼叫消息
 *
 */

import {take, put} from 'redux-saga/effects';
import * as actions from '@store/my/actionTypes';
import {changeThemeSuccess} from '@store/theme/actions';

export default function* myWorkflow() {
  while (true) {
    let action = yield take([actions.UPDATE_MY_SUCCESS]);
    const TYPE = action.type;
    if (TYPE === actions.UPDATE_MY_SUCCESS) {
      // 当主题变化时,主题仓库对应变化
      if ('theme' in action.payload) {
        yield put(changeThemeSuccess({name: action.payload.theme}));
      }
    }
  }
}
