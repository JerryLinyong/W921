/**
 *
 *
 *
 */

import {createAction} from 'redux-actions';
import * as actions from './actionTypes';

// 发送经过saga的事件
// 返回成功
export const changeThemeSuccess = createAction(actions.CHANGE_THEME_SUCCESS); // 更改主题成功
// 返回失败
