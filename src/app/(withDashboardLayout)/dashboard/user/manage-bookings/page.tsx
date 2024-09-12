"use client";

import { PAYMENT_STATUS } from "@/constants/global";
import {
  useDeleteMyBookingMutation,
  useMyBookingQuery,
} from "@/redux/api/bookingApi";
import { useDebounced } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

//   TODO: I think Delete booking operation should be remove for both user and admin

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
  const [deleteBooking] = useDeleteMyBookingMutation();

  const bookings = data?.data;

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
      field: "car",
      headerName: "Car",
      flex: 1,
      valueGetter: (value: any) => value?.name,
    },
    {
      field: "car.pricePerHour",
      headerName: "PricePerHour",
      flex: 1,
      renderCell: ({ row }) => row?.car?.pricePerHour,
    },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "StartTime", flex: 1 },
    { field: "endTime", headerName: "EndTime", flex: 1 },
    { field: "totalCost", headerName: "TotalCost", flex: 1 },
    { field: "paymentStatus", headerName: "Payment", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 3,
      headerAlign: "center",
      align: "right",
      renderCell: ({ row }) => {
        const id = row._id;
        const totalCost = row.totalCost;
        const paymentStatus = row?.paymentStatus;
        const isPaid = paymentStatus === PAYMENT_STATUS.Paid;

        return (
          <Box>
            {!paymentStatus && (
              <>
                <IconButton
                  onClick={() => handleDelete(id)}
                  aria-label="delete"
                >
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
                <Link href={`/dashboard/user/manage-bookings/edit/${id}`}>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </Link>
              </>
            )}
            {totalCost ? (
              <Button size="small" color="success" disabled={isPaid}>
                <Link href={`/dashboard/user/manage-bookings/order/${id}`}>
                  Payment
                </Link>
              </Button>
            ) : (
              <Link href={`/dashboard/user/manage-bookings/return/${id}`}>
                <Button size="small">Return</Button>
              </Link>
            )}
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
      {isError ? (
        <h2>No Data Available</h2>
      ) : (
        <Box sx={{ my: 2, minWidth: "975px" }}>
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
