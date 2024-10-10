"use client";

import UpdateBookingForm from "@/components/Dashboard/ManageBooking/UpdateBookingForm";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import CarCard from "@/components/UI/Car/CarCard/CarCard";
import {
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const UpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  const { data, isLoading } = useGetSingleBookingQuery(id || "");
  const [updateBooking, { isLoading: updateBookingIsLoading }] =
    useUpdateBookingMutation();

  const booking = data?.data;
  const car = booking?.car;

  const [date, setDate] = useState(booking?.date || "");
  const [startTime, setStartTime] = useState(booking?.startTime || "");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!date) newErrors.date = "Date is required.";
    if (!startTime) newErrors.time = "Time is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (validate()) {
        const updateBookingData = {
          _id: booking?._id,
          date,
          startTime: startTime,
        };

        const result = await updateBooking(updateBookingData).unwrap();
        toast.success(result?.message || "Booking Updated Successfully");

        router.push("/dashboard/admin/manage-bookings");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Car Booked failed");
    }
  };

  useEffect(() => {
    if (!isLoading && booking) {
      setDate(booking?.date);
      setStartTime(booking?.startTime);
    }
  }, [isLoading, booking]);

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
