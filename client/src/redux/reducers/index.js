
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import storeReducer from './storeReducer';
import orderReducer from './orderReducer';
import generalReducer from './generalReducer';

const rootReducer = combineReducers({
  userDetails: userReducer,
  storeDetails: storeReducer,
  order: orderReducer,
  general: generalReducer,
});

export default rootReducer;