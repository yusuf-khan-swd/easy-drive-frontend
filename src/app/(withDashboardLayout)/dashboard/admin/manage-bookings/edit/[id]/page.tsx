import AdminUpdateBookingPage from "@/components/Dashboard/ManageBookings/AdminUpdateBookingPage";

const AdminUpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <AdminUpdateBookingPage id={id} />;
};

export default AdminUpdateBooking;
