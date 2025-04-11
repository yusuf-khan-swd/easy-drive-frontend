"use client";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

interface PropTypes {
  searchParams: { status: string };
}

// TODO: Get transactionId from searchParams using this send payment-verification request in server to update booking and order and also get response

const PaymentStatusPage = ({ searchParams }: PropTypes) => {
  const status = searchParams.status; // could be success, cancel, failed

  let icon;
  let title;

  switch (status) {
    case "success":
      icon = <CheckCircleIcon sx={{ fontSize: "90px", color: "#23b93c" }} />;
      title = "Payment Successful";
      break;
    case "cancel":
      icon = <CancelIcon sx={{ fontSize: "90px", color: "#FF0000" }} />;
      title = "Payment Cancelled";
      break;
    case "failed":
      icon = <ErrorIcon sx={{ fontSize: "90px", color: "#FF0000" }} />;
      title = "Payment Failed";
      break;
    default:
      icon = null;
      title = "Unknown Status!";
  }

  return (
    <Container>
      <Box
        sx={{
          mx: "auto",
          width: "100%",
          maxWidth: 500,
          borderRadius: 2,
          boxShadow: 1,
          py: 5,
          px: 2,
          mt: { xs: 5, md: 10 },
        }}
      >
        <Stack justifyContent="center" alignItems="center">
          {icon}
          <Typography variant="h5" my={2}>
            {title}
          </Typography>
          {status === "success" && (
            <Button size="small" variant="outlined">
              <Link href="/dashboard">Go To Dashboard</Link>
            </Button>
          )}
          {status !== "success" && (
            <Button size="small" variant="outlined">
              <Link href="/cars">Book Again</Link>
            </Button>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default PaymentStatusPage;
