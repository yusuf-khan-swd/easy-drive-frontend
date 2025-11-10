import UpdateBookingPage from "@/components/Dashboard/ManageBookings/UpdateBookingPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Update Booking - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const UpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateBookingPage id={id} />;
};

export default UpdateBooking;
