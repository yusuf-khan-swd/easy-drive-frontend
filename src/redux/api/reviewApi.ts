import { authKey } from "@/constants/authKey";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/reviews";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (reviewData) => ({
        url: `${REVIEW_URL}`,
        method: "POST",
        // body: reviewData, // ? for redux use body property to sending post data
        data: reviewData, // ? for axios use data property to sending post data
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["review"],
    }),

    getAllReviews: builder.query({
      query: () => ({
        url: `${REVIEW_URL}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      providesTags: ["review"],
    }),

    getMyReviews: builder.query({
      query: () => ({
        url: `${REVIEW_URL}/my-reviews`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      providesTags: ["review"],
    }),

    getSingleReview: builder.query({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      providesTags: ["review"],
    }),

    carReviews: builder.query({
      query: (id) => ({
        url: `${REVIEW_URL}/car/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      providesTags: ["review"],
    }),

    updateReview: builder.mutation({
      query: (reviewData) => ({
        url: `${REVIEW_URL}/${reviewData._id}`,
        method: "PUT",
        body: reviewData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["review"],
    }),

    deleteReview: builder.mutation({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useCarReviewsQuery,
  useGetMyReviewsQuery,
} = reviewApi;
