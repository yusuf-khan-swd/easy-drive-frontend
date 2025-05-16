import ReturnCarPage from "@/components/Dashboard/ReturnCar/ReturnCarPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Car - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <ReturnCarPage id={id} />;
};

export default ReturnCar;
