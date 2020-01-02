import {combineReducers} from 'redux';
import areas from './areas/reducers';
import pages from './pages/reducers';

export default combineReducers({
  areas,
  pages,
});
