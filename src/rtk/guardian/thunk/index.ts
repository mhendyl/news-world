import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface GuardianThunkParams {
  query: string | null;
  date: string | null;
}

export const guardianThunk = createAsyncThunk(
  'guardian/search',
  async ({ query = null, date }: GuardianThunkParams) => {
    if (date === null) {
      throw new Error("Date is required.");
    }
    const URL = `https://content.guardianapis.com/search?q=${query}&from-date=${date}&api-key=42f26645-8d2f-46c1-9386-e157f529cf4f`;
    
    try {
      const response = await axios.get(URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);
