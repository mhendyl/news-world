import {createSlice} from '@reduxjs/toolkit';
import { GuardianInitialState } from './models';
import { guardianThunk } from './thunk';

export const GuardianSlice = createSlice({
  name: 'guardian',
  initialState: GuardianInitialState,
  reducers: {},
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

// export const {setMatrix} = weatherSlice.actions;
export const GuardianReducer = GuardianSlice.reducer;