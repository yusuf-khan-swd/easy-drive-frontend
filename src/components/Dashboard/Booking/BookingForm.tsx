import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const BookingForm = ({ carId }: { carId: string }) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const [createBooking, { isLoading: createBookingIsLoading }] =
    useCreateBookingMutation();

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
        const bookingData = { carId: carId, date, startTime: startTime };

        const result = await createBooking(bookingData).unwrap();
        toast.success(result?.message || "Car Booked Successfully");

        router.push("/dashboard/user/manage-bookings");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(
        error?.data?.message || error?.data?.data || "Car Booked failed"
      );
    }
  };

  const handleStartTime = (value: string) => {
    const currentDateTime = new Date();
    const currentTimeHour = currentDateTime.getHours();
    const currentTimeMinute = currentDateTime.getMinutes();
    const currentTime = currentTimeHour + ":" + currentTimeMinute;

    const startTimeHour = value.split(":")[0];

    const startTimeMinute = value.split(":")[1];

    const startTimeHourGreater =
      Number(startTimeHour) > Number(currentTimeHour);

    if (startTimeHourGreater) {
      return setStartTime(value);
    }

    const startTimeHourEqual =
      Number(startTimeHour) === Number(currentTimeHour);

    const startTimeMinuteGreaterOrEqual =
      startTimeHourEqual &&
      Number(startTimeMinute) >= Number(currentTimeMinute);

    if (startTimeMinuteGreaterOrEqual) {
      return setStartTime(value);
    }

    setStartTime(currentTime);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white border p-8 rounded shadow-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Pick a DateTime</h2>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">
            Date
          </label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.date ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Start Time
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => handleStartTime(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.time ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
        </div>
        {/* Submit button */}
        <button
          type="submit"
          disabled={createBookingIsLoading}
          className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
