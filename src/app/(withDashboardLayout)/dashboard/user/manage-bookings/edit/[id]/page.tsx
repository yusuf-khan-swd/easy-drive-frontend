import UpdateBookingPage from "@/components/Dashboard/ManageBookings/UpdateBookingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Booking - EasyDrive",
  description: "A Car Rental Service Provider",
};

const UpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateBookingPage id={id} />;
};

export default UpdateBooking;
