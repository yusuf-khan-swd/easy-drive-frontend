import UpdateBookingPage from "@/components/Dashboard/ManageBookings/UpdateBookingPage";

const UpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateBookingPage id={id} />;
};

export default UpdateBooking;
