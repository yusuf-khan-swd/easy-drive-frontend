"use client";

import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const ManageUsers = () => {
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

  const { data: usersData, isLoading } = useGetAllUsersQuery(undefined);
  const users = usersData?.data;
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteUser(id).unwrap();
      toast.success(result?.message || "User deleted Successfully");
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "User delete failed");
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
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
            <Link href={`/dashboard/admin/manage-users/edit/${row._id}`}>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Link>
            <Button size="small">Make Admin</Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Link href="/dashboard/admin/manage-users/create-user">
            <Button>User</Button>
          </Link>
          <Link href="/dashboard/admin/manage-users/create-admin">
            <Button>Admin</Button>
          </Link>
        </Stack>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search users"
        />
      </Stack>
      <Box my={2}>
        <DataGrid
          rows={users}
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
    </Box>
  );
};

export default ManageUsers;
