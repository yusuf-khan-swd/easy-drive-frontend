"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import { useGetSingleBookingQuery } from "@/redux/api/bookingApi";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { getUserInfo } from "@/services/auth.service";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const OrderPage = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const { userId } = getUserInfo();

  const [createOrder, { isLoading: createOrderIsLoading }] =
    useCreateOrderMutation();
  const { data, isLoading } = useGetSingleBookingQuery(id || "");
  const booking = data?.data;
  const car = booking?.car;

  const [date, setDate] = useState(booking?.date || "");
  const [endTime, setEndTime] = useState(booking?.endTime || "");
  const [startTime, setStartTime] = useState(booking?.startTime || "");
  const [totalCost, setTotalCost] = useState(booking?.totalCost || "");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const {
    name,
    description,
    color,
    status,
    isElectric,
    features,
    pricePerHour,
  } = car || {};

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
        const bookingData = {
          user: userId,
          car: car?._id,
          booking: booking?._id,
          totalCost: booking?.totalCost,
        };
        // console.log({ bookingData });

        const result = await createOrder(bookingData).unwrap();
        if (result?.success) {
          toast.success(result?.message || "Order Successfully");
          window.location.href = result?.data?.payment_url;
        } else {
          toast.error(result?.message || "Order Failed");
        }

        // router.push("/dashboard/user/manage-bookings");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(
        error?.data?.message || error?.data?.data || "Order creation failed"
      );
    }
  };

  useEffect(() => {
    if (!isLoading && booking) {
      setDate(booking?.date);
      setStartTime(booking?.startTime);
      setEndTime(booking?.endTime);
      setTotalCost(booking?.totalCost);
    }
  }, [isLoading, booking]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Confirm Payment Details
      </h2>
      {booking ? (
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
          {/* Form for selecting date and time */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border p-8 rounded shadow-md w-full max-w-md "
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Booking Information
            </h2>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700">
                Date
              </label>
              <input
                type="date"
                value={date}
                disabled
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-xs">{errors.date}</p>
              )}
            </div>
            {/* Start Time */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Start Time
              </label>
              <input
                type="time"
                value={startTime}
                disabled
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm`}
              />
            </div>
            {/* End Time */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                End Time
              </label>
              <input
                type="time"
                value={endTime}
                disabled
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                  errors.time ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.time && (
                <p className="text-red-500 text-xs">{errors.time}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Total Cost
              </label>
              <input
                type="text"
                value={totalCost}
                disabled
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                  errors.totalCost ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.time && (
                <p className="text-red-500 text-xs">{errors.time}</p>
              )}
            </div>
            {/* Submit button */}
            <button
              type="submit"
              disabled={createOrderIsLoading}
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Proceed to Payment
            </button>
          </form>
          <div className="grid grid-cols-1 gap-8 flex-grow">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Car Information
                </h2>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {name}
                </h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <p className="text-gray-700 mb-2">Color: {color}</p>
                <p className="text-gray-700 mb-2">
                  Electric: {isElectric ? "Yes" : "No"}
                </p>
                <p className="text-gray-900 font-bold mb-2">
                  Price: {pricePerHour}tk/hour
                </p>
                <p className="mb-2">
                  Status:{" "}
                  <span
                    className={`${
                      status === "available" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status}
                  </span>
                </p>
                <div className="mb-4">
                  {features && (
                    <div className="flex space-x-2 items-center">
                      <p>Features:</p>{" "}
                      <div className="flex flex-wrap space-x-2">
                        {features.map((feature: string, index: number) => (
                          <p
                            key={index}
                            className="bg-slate-300 px-2 py-1 rounded-lg text-sm m-1"
                          >
                            {feature}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No data available</h3>
      )}
    </div>
  );
};

export default OrderPage;
