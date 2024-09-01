const UpdateReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return (
    <div>
      <h1 className="text-4xl font-bold">Update return Car Page id: {id}</h1>
    </div>
  );
};

export default UpdateReturnCar;
