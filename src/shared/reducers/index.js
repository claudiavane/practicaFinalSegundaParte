import { combineReducers } from 'redux';
import auth from '../../reducers/authReducer';
import book from '../../reducers/bookReducer';

const rootReducer = combineReducers({
  auth,
  book,
});

export default rootReducer;
