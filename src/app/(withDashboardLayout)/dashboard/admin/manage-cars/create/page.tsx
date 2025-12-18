import CreateCarPage from "@/components/Dashboard/ManageCars/CreateCarPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Create Car - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const CreateCar = () => {
  return <CreateCarPage />;
};

export default CreateCar;
