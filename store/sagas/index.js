import {all, fork, delay} from 'redux-saga/effects';
import areasWorkflow from './areas';

export default function* sagas() {
  yield all([fork(areasWorkflow)]);
}
