import { configureStore } from "@reduxjs/toolkit";
//import { productsApi } from "./../api/productsApi";
// import filtersReducer from "./filtersSlice";
// import searchReducer from "./searchSlice";
// import { urlSyncMiddleware } from "../middleware/urlSyncMiddleware";

import {productsApi, filtersReducer, searchReducer,urlSyncMiddleware } from "./storeBarrel";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    search: searchReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(urlSyncMiddleware),
});