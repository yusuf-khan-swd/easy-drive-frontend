"use client";

import logo from "@/assets/logo.png";
import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

const UpdateUserPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data, isLoading } = useGetSingleUserQuery(id || "");

  const user = data?.data;

  const defaultValues = {
    name: user?.name || "abc",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  };

  const [updateUser] = useUpdateUserMutation();

  const handleUpdateUser = async (values: FieldValues) => {
    // console.log(values);
    try {
      const updatedUserData = { ...values, _id: id };
      const result = await updateUser(updatedUserData).unwrap();
      // console.log({ result });
      if (result?.data?._id) {
        toast.success(result?.message || "Update User Success");
        router.push("/dashboard/admin/manage-users");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(
        error?.data?.message || error?.data?.data || "Update User failed"
      );
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          my: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Link href="/">
                <Image src={logo} width={50} height={50} alt="logo" />
              </Link>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Update User
              </Typography>
            </Box>
          </Stack>

          <Box>
            <EasyDriveForm
              onSubmit={handleUpdateUser}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <EasyDriveInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EasyDriveInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EasyDriveInput
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    name="phone"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                  <EasyDriveInput
                    label="Address"
                    fullWidth={true}
                    name="address"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
                disabled={isLoading}
              >
                Update
              </Button>
            </EasyDriveForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default UpdateUserPage;
