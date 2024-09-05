"use client";

import {
  useDeleteBookingMutation,
  useMyBookingQuery,
} from "@/redux/api/bookingApi";
import { useDebounced } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

// *  TODO: Delete booking operation can't be done because I think it is only admin route.
// *  So in backend check role if it admin then delete operation can done directly.
// *  if role is the user then check booking user is same if true then delete operation can be permitted

const ManageBookings = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  // console.log(searchTerm);

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading, isError } = useMyBookingQuery(undefined);
  const [deleteBooking] = useDeleteBookingMutation();

  const bookings = data?.data;
  console.log(bookings);

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteBooking(id).unwrap();
      toast.success(result?.message || "Booking deleted Successfully");
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Booking delete failed");
    }
  };

  const columns: GridColDef[] = [
    {
      field: "user",
      headerName: "User",
      flex: 1,
      valueGetter: (value: any) => value?.email,
    },
    {
      field: "car",
      headerName: "Car",
      flex: 1,
      valueGetter: (value: any) => value?.name,
    },
    {
      field: "car.status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row }) => row.car.status,
    },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "StartTime", flex: 1 },
    { field: "endTime", headerName: "EndTime", flex: 1 },
    { field: "totalCost", headerName: "TotalCost", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 2,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        console.log({ row });
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row._id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <Link href={`/dashboard/admin/manage-bookings/edit/${row._id}`}>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div></div>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search bookings"
        />
      </Stack>
      {isError || !bookings || bookings?.length < 1 ? (
        <h2>No Data Available</h2>
      ) : (
        <Box sx={{ my: 2, minWidth: "840px" }}>
          <DataGrid
            rows={bookings}
            columns={columns}
            getRowId={(row) => row._id}
            loading={isLoading}
            slotProps={{
              loadingOverlay: {
                variant: "linear-progress",
                noRowsVariant: "skeleton",
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default ManageBookings;
