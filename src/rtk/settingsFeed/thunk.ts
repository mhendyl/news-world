import {createSlice} from '@reduxjs/toolkit';

export type FeedTypes = {
  source: string;
  category: string;
  author: string;
}

export const feedSettings = createSlice({
  name: 'feedSettings',
  initialState: {feed: {
    source: '',
    category: '',
    author: '',
  }},
  reducers: {
    setFeedOption: (state, {payload}) => {
      state.feed = payload;
    },
  },
});

export const {setFeedOption} = feedSettings.actions;
export const feedReducer = feedSettings.reducer;