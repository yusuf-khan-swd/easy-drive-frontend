"use client";

import {
  useDeleteReviewMutation,
  useGetMyReviewsQuery,
} from "@/redux/api/reviewApi";
import { useDebounced } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "sonner";

const ManageReviews = () => {
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

  const { data, isLoading, isError } = useGetMyReviewsQuery("");
  const [deleteReview] = useDeleteReviewMutation();

  const reviews = data?.data;

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteReview(id).unwrap();
      toast.success(result?.message || "Review deleted Successfully");
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Review delete failed");
    }
  };

  const columns: GridColDef[] = [
    {
      field: "car",
      headerName: "Car",
      flex: 1,
      valueGetter: (value: any) => value?.name,
    },

    { field: "title", headerName: "Title", flex: 1 },
    { field: "rating", headerName: "Rating", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row._id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
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
          placeholder="search Reviews"
        />
      </Stack>
      {isError ? (
        <h2>No Data Available</h2>
      ) : (
        <Box sx={{ my: 2, minWidth: "840px" }}>
          <DataGrid
            rows={reviews}
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

export default ManageReviews;
