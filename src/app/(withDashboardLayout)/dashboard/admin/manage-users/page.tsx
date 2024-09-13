"use client";

import { USER_ROLE } from "@/constants/role";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useMakeAdminMutation,
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

  const { data, isLoading, isError } = useGetAllUsersQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  const [makeAdmin] = useMakeAdminMutation();

  const users = data?.data;

  const handleMakeAdmin = async (id: string) => {
    try {
      // console.log(id);
      const result = await makeAdmin(id).unwrap();
      toast.success(result?.message || "Making user to an admin successfully");
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Making user to admin failed");
    }
  };

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
        const id = row._id;
        const role = row.role;

        return (
          <Box>
            <IconButton onClick={() => handleDelete(id)} aria-label="delete">
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <Link href={`/dashboard/admin/manage-users/edit/${id}`}>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Link>
            <Button
              onClick={() => handleMakeAdmin(id)}
              disabled={role === USER_ROLE.ADMIN}
              size="small"
            >
              Make Admin
            </Button>
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
            <Button size="small" sx={{ px: 1 }}>
              User
            </Button>
          </Link>
          <Link href="/dashboard/admin/manage-users/create-admin">
            <Button size="small" sx={{ px: 1 }}>
              Admin
            </Button>
          </Link>
        </Stack>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search users"
        />
      </Stack>
      {isError ? (
        <h2>No Data Available</h2>
      ) : (
        <Box sx={{ my: 2, minWidth: "840px" }}>
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
      )}
    </Box>
  );
};

export default ManageUsers;
