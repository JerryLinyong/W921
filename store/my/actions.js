/**
 *
 *
 *
 */

import {createAction} from 'redux-actions';
import * as actions from './actionTypes';

// 发送经过saga的事件
export const updateMy  = createAction(actions.UPDATE_MY);  // 更新分区