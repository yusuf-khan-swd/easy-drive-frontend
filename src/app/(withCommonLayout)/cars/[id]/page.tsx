import CarDetailsPage from "@/components/Common/Car/CarDetailsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Details - EasyDrive",
  description: "A Car Rental Service Provider",
};

const CarDetails = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <CarDetailsPage id={id} />;
};

export default CarDetails;
