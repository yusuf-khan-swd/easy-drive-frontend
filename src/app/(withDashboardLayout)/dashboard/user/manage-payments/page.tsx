import ManagePaymentsPage from "@/components/Dashboard/ManagePayments/ManagePaymentsPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Payments - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const ManagePayments = () => {
  return <ManagePaymentsPage />;
};

export default ManagePayments;
