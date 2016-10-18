import { combineReducers } from 'redux';

import sushiReducer from './sushiReducer';

const reducers = combineReducers({
  sushi: sushiReducer,
});

export default reducers;
