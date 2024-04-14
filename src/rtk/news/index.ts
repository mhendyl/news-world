import {createSlice} from '@reduxjs/toolkit';
import { NewsInitialState } from './models';
import { newsGetAuthorThunk, newsGetFeedThunk, newsThunk } from './thunk';

export const NewsSlice = createSlice({
  name: 'news',
  initialState: NewsInitialState,
  reducers: {
    resetNews: (state) => {
      state.article = null;
      state.getAuthor = null;
      state.feed = null
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
      })
      .addCase(newsGetAuthorThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getAuthor = action.payload;
      })
      .addCase(newsGetAuthorThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(newsGetAuthorThunk.rejected, state => {
        state.isLoading = false;
        state.getAuthor = null;
        // state.error = state.error;
      })
      .addCase(newsGetFeedThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.article = action.payload;
      })
      .addCase(newsGetFeedThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(newsGetFeedThunk.rejected, state => {
        state.isLoading = false;
        state.article = null;
        // state.error = state.error;
      });
  },
});

export const {resetNews} = NewsSlice.actions;
export const NewsReducer = NewsSlice.reducer;