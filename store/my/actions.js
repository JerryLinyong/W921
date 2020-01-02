/**
 *
 *
 *
 */

import {createAction} from 'redux-actions';
import * as actions from './actionTypes';

// 发送经过saga的事件
export const updateMy = createAction(actions.UPDATE_MY); // 更新我的消息
// 返回成功
export const updateMySuccess = createAction(actions.UPDATE_MY_SUCCESS); // 更新我的消息成功
// 返回失败
export const updateMyFail = createAction(actions.UPDATE_MY_FAIL); // 更新我的消息成功
