import ManageReturnCarsPage from "@/components/Dashboard/ManageReturnCar/ManageReturnCarsPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Return Cars - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const ManageReturnCars = () => {
  return <ManageReturnCarsPage />;
};

export default ManageReturnCars;
