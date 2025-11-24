import ManageReturnCarsPage from "@/components/Dashboard/ManageReturnCar/ManageReturnCarsPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Return Cars - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const ManageReturnCars = () => {
  return <ManageReturnCarsPage />;
};

export default ManageReturnCars;
