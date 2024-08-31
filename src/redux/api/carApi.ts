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
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      invalidatesTags: ["car"],
    }),

    getAllCars: builder.query({
      query: () => ({
        url: `${CAR_URL}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      providesTags: ["car"],
    }),

    getSingleCar: builder.query({
      query: (id: string) => ({
        url: `${CAR_URL}/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
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
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
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
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
        },
      }),
      invalidatesTags: ["car"],
    }),

    deleteCar: builder.mutation({
      query: (id: string) => ({
        url: `${CAR_URL}/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("easy-drive-token")}`,
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
