import { api } from "./apiSlice";

const AuthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (data: any) => ({
        url: ``,
        method: "POST",
        body: data,
      }),
    }),
    signin: builder.mutation({
      query: (data: any) => ({
        url: ``,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupUserMutation } = AuthApi;
