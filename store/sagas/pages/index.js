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
    const {callBack = () => {}} = action.payload;
    const type = action.type;
    if (type === actions.LOAD_PAGES) {
      try {
        const {payload, message} = yield loadPages();
        // 数据名称转换
        const newPages = {
          showTabBar: payload.showTabBar,
          pages: payload.mainmenu,
        };
        yield put(loadPagesSuccess(newPages));
        callBack({status: 'success', message});
      } catch (message) {
        // 在这里打印异步请求的错误,让后台可以看见
        logger.error('加载所有页面失败:' + message);
        callBack({status: 'fail', message});
      }
    }
  }
}
