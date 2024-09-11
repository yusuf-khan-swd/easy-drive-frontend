import { authKey } from "@/constants/authKey";
import { baseApi } from "./baseApi";

const PROFILE_URL = "/profile";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (id) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      providesTags: ["profile"],
    }),

    updateUserProfile: builder.mutation({
      query: (userData) => ({
        url: `${PROFILE_URL}/${userData._id}`,
        method: "PATCH",
        body: userData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  profileApi;
