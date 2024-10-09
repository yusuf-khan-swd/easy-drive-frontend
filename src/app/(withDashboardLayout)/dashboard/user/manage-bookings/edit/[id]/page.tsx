"use client";

import UpdateBookingForm from "@/components/Dashboard/ManageBooking/UpdateBookingForm";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import CarCard from "@/components/UI/Car/CarCard/CarCard";
import { useGetSingleBookingQuery } from "@/redux/api/bookingApi";

// TODO: Need user single booking api
// TODO: Need update booking api for admin and user

const UpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  const { data, isLoading } = useGetSingleBookingQuery(id || "");

  const booking = data?.data;
  const car = booking?.car;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Booking Details</h2>
      {booking ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Form for selecting date and time */}
          <UpdateBookingForm booking={booking} />
          <div className="grid">
            <CarCard car={car} bookingPage />
          </div>
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No data available</h3>
      )}
    </div>
  );
};

export default UpdateBooking;
