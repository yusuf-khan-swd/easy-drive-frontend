import BookingPage from "@/components/Dashboard/Booking/BookingPage";

const Booking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <BookingPage id={id} />;
};

export default Booking;
