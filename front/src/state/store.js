import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import carpetaReducer from "./reducers/carpeta";
import {carpetaSingleReducer} from "./reducers/carpetaSingle";
import loginReducer from "./reducers/login";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    carpeta: carpetaReducer,
    carpetaSingle: carpetaSingleReducer,
    login: loginReducer
  },
});

export default store;
