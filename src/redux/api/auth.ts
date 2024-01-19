import { api } from "./apiSlice";

const AuthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (data) => ({
        url: `/api/register`,
        method: "POST",
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: `/api/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpUserMutation } = AuthApi;
