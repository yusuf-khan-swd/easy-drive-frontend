import { baseApi } from "./baseApi";

const BOOKING_URL = "/bookings";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: `${BOOKING_URL}`,
        method: "POST",
        body: bookingData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      invalidatesTags: ["booking"],
    }),

    getAllBookings: builder.query({
      query: () => ({
        url: `${BOOKING_URL}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      providesTags: ["booking"],
    }),

    getSingleBooking: builder.query({
      query: (id: string) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      providesTags: ["booking"],
    }),

    myBooking: builder.query({
      query: () => ({
        url: `${BOOKING_URL}/my-bookings`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      providesTags: ["booking"],
    }),

    deleteMyBooking: builder.mutation({
      query: (id: string) => ({
        url: `${BOOKING_URL}/my-bookings/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      invalidatesTags: ["booking"],
    }),

    deleteBooking: builder.mutation({
      query: (id: string) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useMyBookingQuery,
  useDeleteMyBookingMutation,
  useDeleteBookingMutation,
  useGetSingleBookingQuery,
} = bookingApi;
