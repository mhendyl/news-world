import {createSlice} from '@reduxjs/toolkit';
import { NewYorkInitialState } from './models';
import { newYorkFeedThunk, newYorkThunk } from './thunk';

export const NewYork = createSlice({
  name: 'newYork',
  initialState: NewYorkInitialState,
  reducers: {
    resetNewYork: (state) => {
      state.article = null;
      state.articleFeed = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(newYorkThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.article = action.payload;
      })
      .addCase(newYorkThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(newYorkThunk.rejected, state => {
        state.isLoading = false;
        state.article = null;
        // state.error = state.error;
      })
      .addCase(newYorkFeedThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articleFeed = action.payload;
      })
      .addCase(newYorkFeedThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(newYorkFeedThunk.rejected, state => {
        state.isLoading = false;
        state.articleFeed = null;
        // state.error = state.error;
      });
  },
});

export const {resetNewYork} = NewYork.actions;
export const NewYorkReducer = NewYork.reducer;