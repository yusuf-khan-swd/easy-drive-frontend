import { baseApi } from "./baseApi";

const REVIEW_URL = "/reviews";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (reviewData) => ({
        url: REVIEW_URL,
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["review"],
    }),

    getAllReviews: builder.query({
      query: () => ({
        url: REVIEW_URL,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    getMyReviews: builder.query({
      query: () => ({
        url: `${REVIEW_URL}/my-reviews`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    getSingleReview: builder.query({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    carReviews: builder.query({
      query: (id) => ({
        url: `${REVIEW_URL}/car/${id}`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    updateReview: builder.mutation({
      query: (reviewData) => ({
        url: `${REVIEW_URL}/${reviewData._id}`,
        method: "PUT",
        body: reviewData,
      }),
      invalidatesTags: ["review"],
    }),

    deleteReview: builder.mutation({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
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
