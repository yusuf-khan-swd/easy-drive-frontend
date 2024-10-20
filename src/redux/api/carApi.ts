import { authKey } from "@/constants/authKey";
import { baseApi } from "./baseApi";

const CAR_URL = "/cars";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (carData) => ({
        url: `${CAR_URL}`,
        method: "POST",
        body: carData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["car"],
    }),

    getAllCars: builder.query({
      query: () => ({
        url: `${CAR_URL}`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        // },
      }),
      providesTags: ["car"],
    }),

    getSingleCar: builder.query({
      query: (id: string) => ({
        url: `${CAR_URL}/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      providesTags: ["car"],
    }),

    returnCar: builder.mutation({
      query: (carData) => ({
        url: `${CAR_URL}/return`,
        method: "PUT",
        body: carData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["car", "booking"],
    }),

    updateCar: builder.mutation({
      query: (carData) => ({
        url: `${CAR_URL}/${carData._id}`,
        method: "PUT",
        body: carData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["car"],
    }),

    deleteCar: builder.mutation({
      query: (id: string) => ({
        url: `${CAR_URL}/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(authKey)}`,
        },
      }),
      invalidatesTags: ["car"],
    }),
  }),
});

export const {
  useCreateCarMutation,
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useReturnCarMutation,
} = carApi;
