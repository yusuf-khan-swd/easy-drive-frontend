import AdminManageBookingsPage from "@/components/Dashboard/ManageBookings/AdminManageBookingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Bookings - EasyDrive",
  description: "A Car Rental Service Provider",
};

const AdminManageBookings = () => {
  return <AdminManageBookingsPage />;
};

export default AdminManageBookings;
