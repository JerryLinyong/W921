import {combineReducers} from 'redux';
import areas from './areas/reducers';
import pages from './pages/reducers';
import my from './my/reducers';
import theme from './theme/reducers';

export default combineReducers({
  areas,
  pages,
  my,
  theme,
});
