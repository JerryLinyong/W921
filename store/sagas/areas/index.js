/**
 *
 * 处理呼叫消息
 *
 */

import {delay} from 'redux-saga';
import {take} from 'redux-saga/effects';
import * as actions from '../../areas/actionTypes';

export default function* areasWorkflow() {
  while (true) {
    let action = yield take([
      actions.LOAD_AREAS,
      actions.ADD_AREA,
      actions.REMOVE_AREA,
      actions.UPDATE_AREA,
    ]);
    const TYPE = action.type;
    if (TYPE === actions.LOAD_AREAS) {
    }
  }
}
