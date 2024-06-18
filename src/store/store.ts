import { combineReducers, createStore } from 'redux';
import userReducer from './reducer/listUserReducer';
import profileReducer from './reducer/profileReducer';
import productReducer from './reducer/listProductReducer';
import countReducer from './reducer/countReducer';
import randomReducer from './reducer/randomNumberReducer'; 
import changeStateReducer from './reducer/changeStateReducer';
import darkModeReducer from './reducer/darkModeReducer';

const rootReducer = combineReducers({
  users: userReducer,
  profile: profileReducer,
  products: productReducer,
  count: countReducer,
  randomNumbers: randomReducer,
  company: changeStateReducer,
  darkModeReducer: darkModeReducer,
});

const store = createStore(rootReducer);

export default store;
