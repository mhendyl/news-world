import {createSlice} from '@reduxjs/toolkit';
import { NewsInitialState } from './models';
import { newsThunk } from './thunk';

export const NewsSlice = createSlice({
  name: 'news',
  initialState: NewsInitialState,
  reducers: {
    resetNews: (state) => {
      state.article = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(newsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.article = action.payload;
      })
      .addCase(newsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(newsThunk.rejected, state => {
        state.isLoading = false;
        state.article = null;
        // state.error = state.error;
      });
  },
});

export const {resetNews} = NewsSlice.actions;
export const NewsReducer = NewsSlice.reducer;