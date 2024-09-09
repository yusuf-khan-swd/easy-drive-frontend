"use client";
import logo from "@/assets/logo.png";
import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/profileApi";
import { getUserInfo } from "@/services/auth.service";

export const validationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

const ProfilePage = () => {
  const { userId } = getUserInfo();
  const { data, isLoading } = useGetUserProfileQuery(userId);
  const [updateProfile] = useUpdateUserProfileMutation();

  const user = data?.data;

  const [defaultValues, setDefaultValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  console.log(data);

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    try {
      // const result = await updateProfile(values).unwrap();
      // console.log({ result });
      // if (result?.data?._id) {
      //   toast.success(result?.message);
      // }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Registration failed");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Stack
        sx={{
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
              <Typography variant="h6" fontWeight={600}>
                Profile Page
              </Typography>
            </Box>
          </Stack>

          <Box>
            <EasyDriveForm
              onSubmit={handleSubmit}
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
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
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
                <Grid size={{ xs: 12, md: 6 }}>
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
              >
                Update
              </Button>
            </EasyDriveForm>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default ProfilePage;
