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
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
