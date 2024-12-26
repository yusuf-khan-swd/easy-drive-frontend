import { baseApi } from "./baseApi";

const PROFILE_URL = "/profile";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (id) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),

    updateUserProfile: builder.mutation({
      query: (userData) => ({
        url: `${PROFILE_URL}/${userData._id}`,
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  profileApi;
