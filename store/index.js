import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware(); // 执行
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// 必须放在applyMiddleware后面
sagaMiddleware.run(sagas);

export default store;
