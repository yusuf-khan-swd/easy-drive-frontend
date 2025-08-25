import CarDetailsPage from "@/components/Common/Car/CarDetailsPage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Details - EasyDrive",
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const CarDetails = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <CarDetailsPage id={id} />;
};

export default CarDetails;
