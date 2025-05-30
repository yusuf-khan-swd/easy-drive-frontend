import BookingPage from "@/components/Dashboard/Booking/BookingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking - EasyDrive",
  description: "A Car Rental Service Provider",
};

const Booking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <BookingPage id={id} />;
};

export default Booking;
