"use client";

import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { useDebounced } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

// import DoctorModal from "./components/DoctorModal";

const ManageCars = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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

  // const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  // const [deleteDoctor] = useDeleteDoctorMutation();
  const { data, isLoading } = useGetAllCarsQuery("");
  const cars = data?.data;
  console.log(data?.data);

  // console.log(data);
  // const doctors = data?.doctors;
  // const meta = data?.meta;
  // console.log(doctors);

  const handleDelete = async (id: string) => {
    // console.log(id);
    try {
      // const res = await deleteDoctor(id).unwrap();
      const res = { id: 1 };
      // console.log(res);
      if (res?.id) {
        toast.success("Doctor deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 3 },
    { field: "pricePerHour", headerName: "PricePerHour", flex: 1 },
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
            <Link href={`/dashboard/admin/cars/edit/${row._id}`}>
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
        <Button onClick={() => setIsModalOpen(true)}>Create New Cars</Button>
        {/* <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} /> */}
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search cars"
        />
      </Stack>
      <Box my={2}>
        <DataGrid
          rows={cars}
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

export default ManageCars;
