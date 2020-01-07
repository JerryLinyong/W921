import {all, fork, call, take} from 'redux-saga/effects';
import areasWorkflow from './areas';
import pagesWorkflow from './pages';
import myWorkflow from './my';

export default function* sagas() {
  yield all([fork(pagesWorkflow)]);
  yield all([fork(areasWorkflow)]);
  yield all([fork(myWorkflow)]);
}
