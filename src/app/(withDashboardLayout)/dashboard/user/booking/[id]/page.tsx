import BookingPage from "@/components/Dashboard/Booking/BookingPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Booking - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const Booking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <BookingPage id={id} />;
};

export default Booking;
