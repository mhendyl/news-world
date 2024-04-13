import {createSlice} from '@reduxjs/toolkit';

export const tabSlice = createSlice({
  name: 'tab',
  initialState: {tab: 'feed'},
  reducers: {
    setActiveTab: (state, {payload}) => {
      state.tab = payload;
    },
  },
});

export const {setActiveTab} = tabSlice.actions;
export const tabReducer = tabSlice.reducer;