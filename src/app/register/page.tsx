"use client";

import logo from "@/assets/logo.png";
import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export const defaultValues = {
  password: "",
  name: "",
  email: "",
  phone: "",
  address: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    console.log(values);
    try {
      // const res = await registerPatient(data);
      // // console.log(res);
      // if (res?.data?.id) {
      //   toast.success(res?.message);
      //   const result = await userLogin({
      //     password: values.password,
      //     email: values.email,
      //   });
      //   if (result?.data?.accessToken) {
      //     storeUserInfo({ accessToken: result?.data?.accessToken });
      //     router.push("/dashboard");
      //   }
      // }
    } catch (err: any) {
      console.error(err.message);
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
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </EasyDriveForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
