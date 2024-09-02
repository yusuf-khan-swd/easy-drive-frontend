import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Box, Container } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box className="min-h-screen">
        <Container>{children}</Container>
      </Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
