"use client";

import CarReviews from "@/components/Common/Review/CarReviews";
import ReviewForm from "@/components/Common/Review/ReviewForm";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import CarCard from "@/components/UI/Car/CarCard";
import { useGetSingleCarQuery } from "@/redux/api/carApi";
import { isLoggedIn } from "@/services/auth.service";
import { Typography } from "@mui/material";
import Link from "next/link";

// ! After token expired then token remove but review form is not remove but there is message about jwt expired
const CarDetailsPage = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetSingleCarQuery(id || "");
  const car = data?.data;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="mb-16 mt-4">
      <h2 className="text-2xl font-bold text-center mb-6">Car Details</h2>
      {car ? (
        <>
          <div className="grid grid-cols-1 gap-8">
            <CarCard car={car} detailsPage />
          </div>
          {isLoggedIn() ? (
            <ReviewForm carId={id} />
          ) : (
            <Typography component="p" marginTop={3}>
              Please login to give review{" "}
              <Link href="/login" className="text-blue-600">
                Link
              </Link>
            </Typography>
          )}
          <CarReviews carId={id} />
        </>
      ) : (
        <h3 className="text-2xl font-bold text-center">No data available</h3>
      )}
    </div>
  );
};

export default CarDetailsPage;
