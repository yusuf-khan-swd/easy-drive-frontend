import AdminManageBookingsPage from "@/components/Dashboard/ManageBookings/AdminManageBookingsPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Bookings - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const AdminManageBookings = () => {
  return <AdminManageBookingsPage />;
};

export default AdminManageBookings;
