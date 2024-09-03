import { Box, Container } from "@mui/material";

const Car = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Cars Page</h1>
      <Container>
        {/* <DashedLine />

        <ScrollCategory specialties={searchParams.specialties} /> */}

        <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
          {/* {data?.map((doctor: Doctor, index: number) => (
            <Box key={doctor.id}>
              <DoctorCard doctor={doctor} />

              {index === data.length - 1 ? null : <DashedLine />}
            </Box>
          ))}

          {data.length === 0 && <Box>No Doctor Found With This Specialty</Box>} */}
        </Box>
      </Container>
    </div>
  );
};

export default Car;
