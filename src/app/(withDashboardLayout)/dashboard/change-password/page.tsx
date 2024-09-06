"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import KeyIcon from "@mui/icons-material/Key";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
// import { useChangePasswordMutation } from '@/redux/api/authApi';
import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const validationSchema = z.object({
  oldPassword: z.string().min(6, "Must be at least 6 characters long"),
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
});

const ChangePassword = () => {
  //  const [changePassword] = useChangePasswordMutation();
  const [changePassword, setChangePassword] = useState(false);

  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    console.log({ values });
    try {
      toast.success("Password Changed Successfully");

      // const res = await changePassword(values);
      //  if ('data' in res && res.data.status === 200) {
      //     removeUser();
      //     router.push("/login")
      //     toast.success('Password Changed Successfully');
      //  } else {
      //     throw new Error('Incorrect Old Password');
      //  }
    } catch (error) {
      toast.success("Incorrect Old Password");
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
          Change password
        </Typography>
      </Stack>
      <EasyDriveForm
        onSubmit={onSubmit}
        defaultValues={{ oldPassword: "", newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <EasyDriveInput
              name="oldPassword"
              type="password"
              label="Old Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <EasyDriveInput
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          Change Password
        </Button>
      </EasyDriveForm>
    </Box>
  );
};

export default ChangePassword;
