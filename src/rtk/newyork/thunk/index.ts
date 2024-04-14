import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewsThunkParams {
  query: string | null;
  date: string | null;
}

interface NewsFeedThunkParams {
  category: string | null;
  // date: string | null;
}

export const newYorkThunk = createAsyncThunk(
  'newYork/search',
  async ({ query = null, date }: NewsThunkParams) => {
    if (date === null) {
      throw new Error("Date is required.");
    }
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${date.replaceAll('-', '')}&facet=false&facet_fields=document_type&q=${query}&api-key=I282NsttscSCwdMnZADv1IZ0FYqvRBxL`;
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

export const newYorkFeedThunk = createAsyncThunk(
  'newYork/feed',
  async ({ category = null }: NewsFeedThunkParams) => {

    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_fields=${category}&api-key=I282NsttscSCwdMnZADv1IZ0FYqvRBxL`;
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
