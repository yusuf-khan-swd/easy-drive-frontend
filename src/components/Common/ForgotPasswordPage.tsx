"use client";

import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckIcon from "@mui/icons-material/Check";
import KeyIcon from "@mui/icons-material/Key";
import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
});

const ForgotPasswordPage = () => {
  //  const [forgotPassword, { isSuccess }] = useForgotPasswordMutation();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (values: FieldValues) => {
    console.log(values);
    setIsSuccess(true);
    try {
      //  const res = await forgotPassword(values);
      toast.success("Check Your Email for Reset Link");

      //  if ('data' in res && res.data.status === 200) {
      //     toast.success('Check Your Email for Reset Link');
      //  } else {
      //     throw new Error('Something Went Wrong, Try Again');
      //  }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: { sm: "100vh" },
      }}
    >
      <Box
        sx={{
          px: 4,
          py: 2,
          maxWidth: 600,
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
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
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
            Forgot password
          </Typography>
        </Stack>

        {isSuccess && (
          <Box>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              An Email with reset password link was sent to your email
            </Alert>
          </Box>
        )}

        {!isSuccess && (
          <EasyDriveForm
            onSubmit={onSubmit}
            defaultValues={{ email: "" }}
            resolver={zodResolver(validationSchema)}
          >
            <Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EasyDriveInput
                  name="email"
                  type="email"
                  label="Your email"
                  sx={{ mb: 2 }}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Button type="submit" sx={{ width: "100%", my: 2 }}>
              Forgot Password
            </Button>
          </EasyDriveForm>
        )}
      </Box>
    </Stack>
  );
};

export default ForgotPasswordPage;
