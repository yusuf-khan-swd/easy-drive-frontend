"use client";

import logo from "@/assets/logo.png";
import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import { useSignupMutation } from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

const UpdateUser = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  // const { data, isLoading } = useGetSingleUserQuery(id || "");
  // const user = data?.data;

  const router = useRouter();

  const [defaultValues, setDefaultValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [updateUser, { isLoading }] = useSignupMutation();

  const handleUpdateUser = async (values: FieldValues) => {
    console.log(values);
    try {
      // const result = await updateUser(values).unwrap();
      // if (result?.data?._id) {
      //   toast.success(result?.message || "Registration Success");
      //   router.push("/dashboard/admin/manage-users");
      // }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Registration failed");
    }
  };

  // useEffect(() => {
  //   if (!isLoading && user) {
  //     setDefaultValues({
  //       name: user?.name || "",
  //       email: user?.email || "",
  //       phone: user?.phone || "",
  //       address: user?.address || "",
  //     });
  //   }
  // }, [isLoading, user]);

  // if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
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
              <Link href="/">
                <Typography variant="h6" fontWeight={600}>
                  Update User
                </Typography>
              </Link>
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
                    disabled
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

export default UpdateUser;
