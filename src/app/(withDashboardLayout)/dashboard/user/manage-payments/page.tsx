"use client";

import { useMyOrdersQuery } from "@/redux/api/orderApi";
import { useDebounced } from "@/redux/hooks";
import { Box, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

const ManagePayments = () => {
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

  const { data, isLoading, isError } = useMyOrdersQuery("");
  const myOrders = data?.data;

  const columns: GridColDef[] = [
    {
      field: "car",
      headerName: "Car",
      flex: 1,
      valueGetter: (car: any) => car?.name,
    },
    {
      field: "car.pricePerHour",
      headerName: "PricePerHour",
      flex: 1,
      renderCell: ({ row }) => row?.car?.pricePerHour,
    },
    { field: "totalCost", headerName: "TotalCost", flex: 1 },
    { field: "paymentStatus", headerName: "Payment", flex: 1 },
    { field: "transactionId", headerName: "TransactionId", flex: 1 },
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
        <Box sx={{ my: 2, minWidth: "940px" }}>
          <DataGrid
            rows={myOrders}
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

export default ManagePayments;
