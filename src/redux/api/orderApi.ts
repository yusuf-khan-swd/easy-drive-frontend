import { authKey } from "@/constants/authKey";
import { baseApi } from "./baseApi";

const ORDER_URL = "/orders";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (payload) => ({
        url: `${ORDER_URL}/create`,
        method: "POST",
        body: payload,
      }),
    }),

    myOrders: builder.query({
      query: () => ({
        url: `${ORDER_URL}/my-orders`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      providesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation, useMyOrdersQuery } = orderApi;
