import ManageCarsPage from "@/components/Dashboard/ManageCars/ManageCarsPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Cars - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const ManageCars = () => {
  return <ManageCarsPage />;
};

export default ManageCars;
