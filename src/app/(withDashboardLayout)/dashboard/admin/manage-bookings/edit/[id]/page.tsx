const UpdateBooking = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return (
    <div>
      <h1>Update Booking of id: {id}</h1>
    </div>
  );
};

export default UpdateBooking;
