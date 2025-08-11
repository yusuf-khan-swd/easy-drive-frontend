import AdminUpdateBookingPage from "@/components/Dashboard/ManageBookings/AdminUpdateBookingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Booking - EasyDrive",
  description: "A Car Rental Service Provider",
};

const AdminUpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <AdminUpdateBookingPage id={id} />;
};

export default AdminUpdateBooking;
