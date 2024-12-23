import { authKey } from "@/constants/authKey";
import { baseApi } from "./baseApi";

const BOOKING_URL = "/bookings";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: `${BOOKING_URL}`,
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["booking", "car"],
    }),

    getAllBookings: builder.query({
      query: () => ({
        url: `${BOOKING_URL}`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    getSingleBooking: builder.query({
      query: (id: string) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    myBooking: builder.query({
      query: () => ({
        url: `${BOOKING_URL}/my-bookings`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    updateBooking: builder.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/${data._id}`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["booking", "car"],
    }),

    deleteMyBooking: builder.mutation({
      query: (id: string) => ({
        url: `${BOOKING_URL}/my-bookings/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["booking", "car"],
    }),

    deleteBooking: builder.mutation({
      query: (id: string) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["booking", "car"],
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
  useUpdateBookingMutation,
} = bookingApi;
