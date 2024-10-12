"use client";

import ReturnCarForm from "@/components/Dashboard/ManageReturnCar/ReturnCarForm";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import CarCard from "@/components/UI/Car/CarCard/CarCard";
import { useGetSingleBookingQuery } from "@/redux/api/bookingApi";
import { useReturnCarMutation } from "@/redux/api/carApi";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const addOneHourToEndTime = (startTime: string) => {
  const numberOfHour = 1;

  const startTimeHour = startTime.split(":")[0];
  const startTimeMinute = startTime.split(":")[1];
  const addOneHour =
    (Number(startTimeHour) + numberOfHour).toString() + ":" + startTimeMinute;

  return addOneHour;
};

const ReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  const [returnCar, { isLoading: returnCarIsLoading }] = useReturnCarMutation();
  const { data, isLoading } = useGetSingleBookingQuery(id || "");
  const booking = data?.data;
  const car = booking?.car;

  const [date, setDate] = useState(booking?.date || "");
  const [endTime, setEndTime] = useState(booking?.endTime || "");
  const [startTime, setStartTime] = useState(booking?.startTime || "");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!date) newErrors.date = "Date is required.";
    if (!endTime) newErrors.time = "End Time is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (validate()) {
        const bookingData = { bookingId: booking?._id, endTime: endTime };

        const result = await returnCar(bookingData).unwrap();
        toast.success(result?.message || "Car return Successfully");

        router.push("/dashboard/admin/manage-return-cars");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Car return failed");
    }
  };

  const handleEndTime = async (value: string) => {
    const endTimeHour = value.split(":")[0];
    const startTimeHour = startTime.split(":")[0];

    const endTimeMinute = value.split(":")[1];
    const startTimeMinute = startTime.split(":")[1];

    const returnTimeHourGreater = Number(endTimeHour) > Number(startTimeHour);

    if (returnTimeHourGreater) {
      return setEndTime(value);
    }

    const returnTimeHourEqual = Number(endTimeHour) === Number(startTimeHour);

    const returnTimeMinuteGreater =
      returnTimeHourEqual && Number(endTimeMinute) > Number(startTimeMinute);

    if (returnTimeMinuteGreater) {
      return setEndTime(value);
    }

    return setEndTime(addOneHourToEndTime(startTime));
  };

  useEffect(() => {
    if (!isLoading && booking) {
      const startTime = booking?.startTime;

      setDate(booking?.date);
      setStartTime(startTime);

      setEndTime(addOneHourToEndTime(startTime));
    }
  }, [isLoading, booking]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Booking Details</h2>
      {booking ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Form for selecting date and time */}
          <ReturnCarForm booking={booking} />
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

export default ReturnCar;
