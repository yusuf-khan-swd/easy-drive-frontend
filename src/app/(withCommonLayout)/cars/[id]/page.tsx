"use client";

import ReviewForm from "@/components/Common/Review/ReviewForm";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import CarCard from "@/components/UI/Car/CarCard/CarCard";
import { useGetSingleCarQuery } from "@/redux/api/carApi";

const CarDetails = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const { data, isLoading } = useGetSingleCarQuery(id || "");
  const car = data?.data;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="mb-16 mt-4">
      <h2 className="text-2xl font-bold text-center mb-6">Car Details</h2>
      {car ? (
        <div className="grid grid-cols-1 gap-8">
          <CarCard car={car} detailsPage />
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No data available</h3>
      )}
      <ReviewForm carId={id} />
    </div>
  );
};

export default CarDetails;
