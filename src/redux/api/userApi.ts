import { api } from "./apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getUser: builder.query({
      query: ({ page, per_page }: { page: number; per_page: number }) => ({
        url: `/api/users?page=${page}&per_page=${per_page}`,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
