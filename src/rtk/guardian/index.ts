import {createSlice} from '@reduxjs/toolkit';
import { GuardianInitialState } from './models';
import { guardianThunk } from './thunk';

export const GuardianSlice = createSlice({
  name: 'guardian',
  initialState: GuardianInitialState,
  reducers: {
    resetGuardian: (state) => {
      state.article = null;
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
      });
  },
});

export const {resetGuardian} = GuardianSlice.actions;
export const GuardianReducer = GuardianSlice.reducer;