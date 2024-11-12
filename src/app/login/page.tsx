"use client";

import logo from "@/assets/logo.png";
import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import { useLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
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
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

//  TODO: For Login and register try to use server action because it is more secure
// TODO: Use persist-redux to store user login info

const LoginPage = () => {
  const [error, setError] = useState("");
  const [defaultValues, setDefaultValues] = useState({
    email: "user@easy.com",
    password: "Pa$$w0rd!",
  });

  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);

    // ! Below code is for redux fetchBaseQuery
    // try {
    //   const result = await login(values).unwrap();
    //   console.log("login result", result);

    //   if (result?.data?.token) {
    //     storeUserInfo({ accessToken: result?.data?.token });
    //     toast.success(result?.data?.message || "Login Success!!");
    //     router.push("/dashboard");
    //   }
    // } catch (error: any) {
    //   console.log("Error: ", error);
    //   setError(error?.data?.message);
    //   toast.error(error?.data?.message || "login failed");
    // }

    // ! Below code is for axiosBaseQuery
    try {
      const result = await login(values).unwrap();
      console.log("login result", result);
      if (result?.token) {
        toast.success(result?.message || "Login Success!!");
        storeUserInfo({ accessToken: result?.token });
        router.push("/dashboard");
      } else {
        toast.error(result?.message || "login failed");
      }
    } catch (error: any) {
      setError(error?.data?.message);
      toast.error(error?.data?.message || error?.data?.data || "login failed");
      console.log("Error: ", error);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          minHeight: "100vh",
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
                  Login Easy Drive
                </Typography>
              </Link>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <EasyDriveForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EasyDriveInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EasyDriveInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Link href={"/forgot-password"}>
                <Typography
                  mb={1}
                  textAlign="end"
                  component="p"
                  fontWeight={300}
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Link>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
                disabled={isLoading}
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-600 font-semibold">
                  Create an account
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
        <div className="text-center mt-8 space-y-3">
          <div className="flex">
            <div>
              <Button
                onClick={() =>
                  setDefaultValues({
                    email: "user@easy.com",
                    password: "Pa$$w0rd!",
                  })
                }
                variant="outlined"
                size="small"
                sx={{ m: 1, px: 1, py: "4px" }}
              >
                Use
              </Button>
            </div>
            <div>
              <p>
                User Email: <span className="text-blue-600">user@easy.com</span>
              </p>
              <p>
                User Password: <span className="text-blue-600">Pa$$w0rd!</span>
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <Button
                onClick={() =>
                  setDefaultValues({
                    email: "admin@easy.com",
                    password: "Pa$$w0rd!",
                  })
                }
                variant="outlined"
                size="small"
                sx={{ m: 1, px: 1, py: "4px" }}
              >
                Use
              </Button>
            </div>
            <div>
              <p>
                Admin Email:{" "}
                <span className="text-blue-600">admin@easy.com</span>
              </p>
              <p>
                Admin Password: <span className="text-blue-600">Pa$$w0rd!</span>
              </p>
            </div>
          </div>
          <div>
            <Button
              fullWidth
              onClick={() =>
                setDefaultValues({
                  email: "",
                  password: "",
                })
              }
              variant="outlined"
              size="small"
              sx={{ m: 1, px: 1, py: "4px" }}
            >
              Clear
            </Button>
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default LoginPage;
