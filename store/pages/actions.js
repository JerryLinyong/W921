/**
 *
 *
 *
 */

import {createAction} from 'redux-actions';
import * as actions from './actionTypes';

// 发送经过saga的事件
export const loadPages   = createAction(actions.LOAD_PAGES);   // 加载分区
export const addPage     = createAction(actions.ADD_PAGE);     // 增加分区
export const removePage  = createAction(actions.REMOVE_PAGE);  // 移除分区
export const updatePage  = createAction(actions.UPDATE_PAGE);  // 更新分区