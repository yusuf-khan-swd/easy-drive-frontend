"use client";

import { useDebounced } from "@/redux/hooks";
import { Box, Button, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
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

  // const columns: GridColDef[] = [
  //   { field: "name", headerName: "Name", flex: 1 },
  //   { field: "email", headerName: "Email", flex: 1 },
  //   { field: "contactNumber", headerName: "Contact Number", flex: 1 },
  //   { field: "gender", headerName: "Gender", flex: 1 },
  //   { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     flex: 1,
  //     headerAlign: "center",
  //     align: "center",
  //     renderCell: ({ row }) => {
  //       return (
  //         <Box>
  //           <IconButton
  //             onClick={() => handleDelete(row.id)}
  //             aria-label="delete"
  //           >
  //             <DeleteIcon sx={{ color: "red" }} />
  //           </IconButton>
  //           <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
  //             <IconButton aria-label="delete">
  //               <EditIcon />
  //             </IconButton>
  //           </Link>
  //         </Box>
  //       );
  //     },
  //   },
  // ];

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
      {/* {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )} */}
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default ManageCars;
