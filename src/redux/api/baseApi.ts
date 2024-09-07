import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/getBaseUrl";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: ["car", "booking", "user"],
});
