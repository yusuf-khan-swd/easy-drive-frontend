"use client";

import BookingForm from "@/components/Dashboard/Booking/BookingForm";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import CarCard from "@/components/UI/Car/CarCard/CarCard";
import { useGetSingleCarQuery } from "@/redux/api/carApi";

const Booking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  const { data, isLoading } = useGetSingleCarQuery(id || "");
  const car = data?.data;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Booking Details</h2>
      {car ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Form for selecting date and time */}
          <BookingForm carId={car?._id} />

          <div className="grid grid-cols-1 flex-grow">
            <CarCard car={car} bookingPage />
          </div>
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No data available</h3>
      )}
    </div>
  );
};

export default Booking;
