import {combineReducers} from '@reduxjs/toolkit';
import { tabReducer } from './tab/thunk';
import { GuardianReducer } from './guardian';
import { NewsReducer } from './news';


const rootReducer = combineReducers({
  tabReducer: tabReducer,
  guardianReducer: GuardianReducer,
  newsReducer: NewsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;