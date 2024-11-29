import { useReturnCarMutation } from "@/redux/api/carApi";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const addOneHourToEndTime = (startTime: string) => {
  const numberOfHour = 1;

  const startTimeHour = startTime.split(":")[0];
  const startTimeMinute = startTime.split(":")[1];
  const addOneHour =
    (Number(startTimeHour) + numberOfHour).toString() + ":" + startTimeMinute;

  return addOneHour;
};

const ReturnCarForm = ({ booking }: { booking: any }) => {
  const date = booking?.date || "";
  const startTime = booking?.startTime || "";

  const [endTime, setEndTime] = useState(
    booking?.endTime || addOneHourToEndTime(booking?.startTime) || ""
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const [returnCar, { isLoading: returnCarIsLoading }] = useReturnCarMutation();

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

        router.push("/dashboard/user/manage-bookings");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(
        error?.data?.message || error?.data?.data || "Car return failed"
      );
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

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white border p-8 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Pick Return Time
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
          {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
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
            onChange={(e) => handleEndTime(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.time ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
        </div>
        {/* Submit button */}
        <button
          type="submit"
          disabled={returnCarIsLoading}
          className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ReturnCarForm;
