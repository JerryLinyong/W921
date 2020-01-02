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
// 返回成功
export const loadAreasSuccess   = createAction(actions.LOAD_AREAS_SUCCESS);   // 加载分区
export const addAreaSuccess     = createAction(actions.ADD_AREA_SUCCESS);     // 增加分区
export const removeAreaSuccess  = createAction(actions.REMOVE_AREA_SUCCESS);  // 移除分区
export const updateAreaSuccess  = createAction(actions.UPDATE_AREA_SUCCESS);  // 更新分区
// 返回失败
export const loadAreasFail   = createAction(actions.LOAD_AREAS_FAIL);   // 加载分区
export const addAreaFail     = createAction(actions.ADD_AREA_FAIL);     // 增加分区
export const removeAreaFail  = createAction(actions.REMOVE_AREA_FAIL);  // 移除分区
export const updateAreaFail  = createAction(actions.UPDATE_AREA_FAIL);  // 更新分区