import CarDetailsPage from "@/components/Common/Car/CarDetailsPage";

const CarDetails = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <CarDetailsPage id={id} />;
};

export default CarDetails;
