import {all, fork, call, take} from 'redux-saga/effects';
import areasWorkflow from './areas';
import pagesWorkflow from './pages';

export default function* sagas() {
  yield all([fork(pagesWorkflow)]);
  yield all([fork(areasWorkflow)]);
}
