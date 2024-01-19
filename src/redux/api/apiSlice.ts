import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://reqres.in`,
  }),
  tagTypes: ["user"],
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (body: any) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoginMutation } = UserApi;
