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
  name: z.string().trim().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

//  TODO: For Login and register try to use server action because it is more secure

const RegisterPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const router = useRouter();

  const [register, { isLoading }] = useSignupMutation();

  const handleRegister = async (values: FieldValues) => {
    try {
      const result = await register(values).unwrap();
      if (result?.data?._id) {
        toast.success(result?.message);
        router.push("/login");
      } else {
        toast.error(result?.message || "Registration failed");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(
        error?.data?.message || error?.data?.data || "Registration failed"
      );
    }
  };

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
                  Register User
                </Typography>
              </Link>
            </Box>
          </Stack>

          <Box>
            <EasyDriveForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
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
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={termsAccepted}
                  onClick={() => setTermsAccepted(!termsAccepted)}
                  className=""
                />
                <span className="ml-2 text-gray-700">
                  I accept the{" "}
                  <Link href="/terms" className="text-blue-500 underline">
                    Terms & Conditions
                  </Link>
                </span>
              </label>
              <Button
                disabled={!termsAccepted || isLoading}
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login" className="text-blue-600 font-semibold">
                  Login
                </Link>
              </Typography>
              <div className="mt-4 text-sm text-center">
                <Link href="/privacy" className="text-gray-600 underline">
                  Privacy Policy
                </Link>{" "}
                |
                <Link href="/tos" className="text-gray-600 underline ml-2">
                  Terms of Service
                </Link>
              </div>
            </EasyDriveForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
