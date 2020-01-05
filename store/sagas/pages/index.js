/**
 *
 * 处理呼叫消息
 *
 */

import {take, call, put} from 'redux-saga/effects';
import * as actions from '@store/pages/actionTypes';
import {loadPagesSuccess} from '@store/pages/actions';
import {loadPages} from '@apis/pages';

export default function* areasWorkflow() {
  while (true) {
    let action = yield take([
      actions.LOAD_PAGES,
      actions.ADD_PAGE,
      actions.REMOVE_PAGE,
      actions.UPDATE_PAGE,
    ]);
    const {params, callBack = () => {}} = action.payload;
    const type = action.type;
    if (type === actions.LOAD_PAGES) {
      try {
        const {payload, status} = yield loadPages(params);
        yield put(loadPagesSuccess(payload));
        callBack({payload, status});
      } catch (e) {
        const message = '加载所有页面失败:' + e;
        logger.error(message);
        callBack({status: 'fail', message});
      }
    }
  }
}
