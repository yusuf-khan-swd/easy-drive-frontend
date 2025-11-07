import ReturnCarPage from "@/components/Dashboard/ReturnCar/ReturnCarPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Return Car - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const ReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <ReturnCarPage id={id} />;
};

export default ReturnCar;
