// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import checker from './online_checker';


const rootReducer = combineReducers({
  counter,
  router,
  checker
});

export default rootReducer;
