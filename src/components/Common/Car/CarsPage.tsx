"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import CarCard from "@/components/UI/Car/CarCard";
import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { TCar } from "@/types/car";
import { Box } from "@mui/material";

const CarsPage = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  const cars = data?.data;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}></Box>
      <div className="mb-16 mt-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Cars</h2>
        {cars && cars?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars?.map((car: TCar) => (
              <CarCard key={car?._id} car={car} />
            ))}
          </div>
        ) : (
          <h3 className="text-2xl font-bold text-center">No cars available</h3>
        )}
      </div>
    </div>
  );
};

export default CarsPage;
