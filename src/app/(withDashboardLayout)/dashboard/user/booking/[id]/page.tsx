import BookingPage from "@/components/Dashboard/Booking/BookingPage";

const Booking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return (
    <div>
      <BookingPage id={id} />
    </div>
  );
};

export default Booking;
