import ManageBookingsPage from "@/components/Dashboard/ManageBookings/ManageBookingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Bookings - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ManageBookings = () => {
  return <ManageBookingsPage />;
};

export default ManageBookings;
