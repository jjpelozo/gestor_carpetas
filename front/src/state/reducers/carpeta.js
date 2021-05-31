import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCarpeta = createAction("SET_CARPETA");

export const postData = createAsyncThunk(
  "CREATE_CARPETA",
  ({
    numero,
    autos,
    juzgado, 
    estado, 
    aportante,
    operativo,
    representado,
    derivacion,
    comentario,
  }) => {
    return axios.post("/api/carpetas/nuevacarpeta", {
      numero,
      autos,
      juzgado, 
      estado, 
      aportante,
      operativo,
      representado,
      derivacion,
      comentario,
    });
  }
);


const carpetaReducer = createReducer([],{
    [setCarpeta]: (state, action)=> action.payload, 
[postData.fulfilled]:(state, action)=>
action.payload
}
    );

    export default carpetaReducer