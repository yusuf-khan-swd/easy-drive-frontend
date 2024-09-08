"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import { useCarReviewsQuery } from "@/redux/api/reviewApi";

const CarReviews = ({ carId }: { carId: string }) => {
  const { data, isLoading } = useCarReviewsQuery(carId);
  const reviews = data?.data;

  if (isLoading) return <LoadingSpinner />;

  console.log(data);

  return (
    <div>
      <h1>Car reviews {carId}</h1>
    </div>
  );
};

export default CarReviews;
