import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Stack spacing={2} direction="row">
          <Link href="/home">
            <Button variant="contained">Home</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outlined">Dashboard</Button>
          </Link>
        </Stack>
      </div>
      <Footer />
    </div>
  );
}
