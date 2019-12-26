/**
 *
 *
 *
 */

import {createAction} from 'redux-actions';
import * as actions from './actionTypes';

// 发送经过saga的事件
export const loadAreas   = createAction(actions.LOAD_AREAS);   // 加载分区
export const addArea     = createAction(actions.ADD_AREA);     // 增加分区
export const removeArea  = createAction(actions.REMOVE_AREA);  // 移除分区
export const updateArea  = createAction(actions.UPDATE_AREA);  // 更新分区