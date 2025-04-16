// redux installation

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
export default store;