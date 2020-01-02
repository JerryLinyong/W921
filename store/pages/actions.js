/**
 *
 *
 *
 */

import {createAction} from 'redux-actions';
import * as actions from './actionTypes';

// 发送经过saga的事件
export const loadPages   = createAction(actions.LOAD_PAGES);   // 加载页面
export const addPage     = createAction(actions.ADD_PAGE);     // 增加页面
export const removePage  = createAction(actions.REMOVE_PAGE);  // 移除页面
export const updatePage  = createAction(actions.UPDATE_PAGE);  // 更新页面
// 返回成功
export const loadPagesSuccess   = createAction(actions.LOAD_PAGES_SUCCESS);   // 加载页面
export const addPageSuccess     = createAction(actions.ADD_PAGE_SUCCESS);     // 增加页面
export const removePageSuccess  = createAction(actions.REMOVE_PAGE_SUCCESS);  // 移除页面
export const updatePageSuccess  = createAction(actions.UPDATE_PAGE_SUCCESS);  // 更新页面
// 返回失败
export const loadPagesFail   = createAction(actions.LOAD_PAGES_FAIL);   // 加载页面
export const addPageFail     = createAction(actions.ADD_PAGE_FAIL);     // 增加页面
export const removePageFail  = createAction(actions.REMOVE_PAGE_FAIL);  // 移除页面
export const updatePageFail  = createAction(actions.UPDATE_PAGE_FAIL);  // 更新页面