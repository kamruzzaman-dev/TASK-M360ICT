import { configureStore } from "@reduxjs/toolkit";
import { UserApi } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(UserApi.middleware),
});
