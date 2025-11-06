import ReturnCarPage from "@/components/Dashboard/ReturnCar/ReturnCarPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Return Car - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const ReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <ReturnCarPage id={id} />;
};

export default ReturnCar;
