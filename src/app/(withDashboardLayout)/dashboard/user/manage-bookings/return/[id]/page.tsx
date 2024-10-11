"use client";

import ReturnCarForm from "@/components/Dashboard/ManageReturnCar/ReturnCarForm";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import CarCard from "@/components/UI/Car/CarCard/CarCard";
import { useGetSingleBookingQuery } from "@/redux/api/bookingApi";

const ReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  const { data, isLoading } = useGetSingleBookingQuery(id || "");
  const booking = data?.data;
  const car = booking?.car;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Booking Details</h2>
      {booking ? (
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
          {/* Form for selecting date and time */}
          <ReturnCarForm booking={booking} />

          <div className="grid grid-cols-1 gap-8 flex-grow">
            <CarCard car={car} bookingPage />
          </div>
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No data available</h3>
      )}
    </div>
  );
};

export default ReturnCar;
