import {
    createAction,
    createReducer,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  export const setLogin = createAction("SET_LOGIN");
  
  export const postLogin = createAsyncThunk(
    "LOGIN",
    ({
      email, 
      password
    }) => {
        console.log({email, password})
      return axios.post("/api/admin/login", {
        email,
        password
      });
    }
  );
  
  
  const loginReducer = createReducer([],{
      [setLogin]: (state, action)=> action.payload, 
  [postLogin.fulfilled]:(state, action)=>
  action.payload
  }
      );
  
      export default loginReducer