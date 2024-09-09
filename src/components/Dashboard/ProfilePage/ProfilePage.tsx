"use client";
import logo from "@/assets/logo.png";
import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/profileApi";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export const validationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

const ProfilePage = () => {
  const { userId } = getUserInfo();
  const router = useRouter();

  const { data, isLoading } = useGetUserProfileQuery(userId);
  const [updateProfile, { isLoading: updateProfileLoading }] =
    useUpdateUserProfileMutation();

  const user = data?.data;

  let defaultValues = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  };

  const handleSubmit = async (values: FieldValues) => {
    // console.log(values);
    try {
      const updatedProfileData = { ...values, _id: userId };
      const result = await updateProfile(updatedProfileData).unwrap();
      // console.log({ result });
      if (result?.data?._id) {
        toast.success(result?.message || "Profile Update Success");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Profile Update failed");
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (updateProfileLoading) return router.refresh();

  return (
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
            >
              Update
            </Button>
          </EasyDriveForm>
        </Box>
      </Box>
    </Stack>
  );
};

export default ProfilePage;
