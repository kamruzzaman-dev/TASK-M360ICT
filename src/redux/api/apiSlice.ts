import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://reqres.in`,
  }),
  tagTypes: ["user"],
  endpoints: () => ({}),
});
