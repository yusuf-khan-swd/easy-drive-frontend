import UpdateBookingPage from "@/components/Dashboard/ManageBookings/UpdateBookingPage";

const UpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return (
    <div>
      <UpdateBookingPage id={id} />
    </div>
  );
};

export default UpdateBooking;
