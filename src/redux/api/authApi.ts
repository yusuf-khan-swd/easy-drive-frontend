import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        // data: loginData, // ! Need use data property instead of body property for sending post data in server because of axios
        body: loginData, // ? For redux use body property to send post data
      }),
    }),

    signup: builder.mutation({
      query: (signupData) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        body: signupData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
