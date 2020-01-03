import {combineReducers} from 'redux';
import areas from './areas/reducers';
import pages from './pages/reducers';
import my from './my/reducers';

export default combineReducers({
  areas,
  pages,
  my,
});
