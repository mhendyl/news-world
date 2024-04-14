import {combineReducers} from '@reduxjs/toolkit';
import { tabReducer } from './tab/thunk';
import { GuardianReducer } from './guardian';
import { NewsReducer } from './news';
import { NewYorkReducer } from './newyork';
import { feedReducer } from './settingsFeed/thunk';


const rootReducer = combineReducers({
  tabReducer: tabReducer,
  guardianReducer: GuardianReducer,
  newsReducer: NewsReducer,
  newYorkReducer: NewYorkReducer,
  feedReducer: feedReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;