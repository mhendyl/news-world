import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewsThunkParams {
  query: string | null;
  date: string | null;
}

export const newsThunk = createAsyncThunk(
  'news/search',
  async ({ query = null, date }: NewsThunkParams) => {
    if (date === null) {
      throw new Error("Date is required.");
    }
    const URL = `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=a6d444b234dd48399021d8b32170f91d`;
    
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
