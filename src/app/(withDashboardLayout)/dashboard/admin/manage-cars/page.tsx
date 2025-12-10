import ManageCarsPage from "@/components/Dashboard/ManageCars/ManageCarsPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Cars - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const ManageCars = () => {
  return <ManageCarsPage />;
};

export default ManageCars;
