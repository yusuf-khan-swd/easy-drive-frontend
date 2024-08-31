import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: loginData,
      }),
    }),

    signup: builder.mutation({
      query: (signupData) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        body: signupData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
