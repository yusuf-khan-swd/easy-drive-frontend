import AdminUpdateBookingPage from "@/components/Dashboard/ManageBookings/AdminUpdateBookingPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Update Booking - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const AdminUpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <AdminUpdateBookingPage id={id} />;
};

export default AdminUpdateBooking;
