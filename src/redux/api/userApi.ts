import { api } from "./apiSlice";

interface UserData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IDataType[];
  support: {
    url: string;
    text: string;
  };
}

interface IDataType {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ page, per_page }: { page: number; per_page: number }) => ({
        url: `/api/users?page=${page}&per_page=${per_page}`,
      }),
      transformResponse: (response: UserData) => {
        return {
          response,
        };
      },
      providesTags: ["user"],
    }),
    CreateUser: builder.mutation({
      query: (data) => ({
        url: `/api/users`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation } = userApi;
