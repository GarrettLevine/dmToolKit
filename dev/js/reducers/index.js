import { combineReducers } from 'redux';

import npc from './npc-reducer';
import userAuth from './userAuth-reducer';

const rootReducer = combineReducers({
  userAuth,
  npc,
});

export default rootReducer;
