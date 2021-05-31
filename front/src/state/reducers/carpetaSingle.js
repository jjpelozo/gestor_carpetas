import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setCarpetaSingle = createAsyncThunk("SET_CARPETASINGLE", (id) => {
  return axios.get(`/api/carpetasingle/${id}`).then((res) => res.data);
});

export const carpetaSingleReducer = createReducer([], {
  [setCarpetaSingle.fulfilled]: (state, action) => action.payload,
});

