import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import chats from './сhats';

const rootReducer = combineReducers({
  user,
  chats,
});

export default rootReducer;