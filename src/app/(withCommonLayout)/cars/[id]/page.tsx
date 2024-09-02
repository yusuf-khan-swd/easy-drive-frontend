const CarDetails = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return (
    <div>
      <h1 className="text-4xl font-bold">Car Details Page id: {id}</h1>
    </div>
  );
};

export default CarDetails;
