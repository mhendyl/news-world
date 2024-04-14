import {createSlice} from '@reduxjs/toolkit';
import { GuardianInitialState } from './models';
import { guardianNoDateThunk, guardianThunk } from './thunk';

export const GuardianSlice = createSlice({
  name: 'guardian',
  initialState: GuardianInitialState,
  reducers: {
    resetGuardian: (state) => {
      state.article = null;
    },
    resetDetailsGuardian: (state) => {
      state.details = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(guardianThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.article = action.payload;
      })
      .addCase(guardianThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(guardianThunk.rejected, state => {
        state.isLoading = false;
        state.article = null;
        // state.error = state.error;
      })
      .addCase(guardianNoDateThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.article = action.payload;
      })
      .addCase(guardianNoDateThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(guardianNoDateThunk.rejected, state => {
        state.isLoading = false;
        state.article = null;
        // state.error = state.error;
      });
  },
});

export const {resetGuardian} = GuardianSlice.actions;
export const GuardianReducer = GuardianSlice.reducer;