import { baseApi } from "./baseApi";

const USER_URL = "/users";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (carData) => ({
        url: `${USER_URL}/admin`,
        method: "POST",
        body: carData,
      }),
      invalidatesTags: ["user"],
    }),

    makeAdmin: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/make-admin/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: `${USER_URL}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    getSingleUser: builder.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    updateUser: builder.mutation({
      query: (userData) => ({
        url: `${USER_URL}/${userData._id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),

    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetSingleUserQuery,
  useMakeAdminMutation,
} = userApi;
