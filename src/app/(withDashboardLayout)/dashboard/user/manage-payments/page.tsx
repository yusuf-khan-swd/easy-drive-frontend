import ManagePaymentsPage from "@/components/Dashboard/ManagePayments/ManagePaymentsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Payments - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ManagePayments = () => {
  return <ManagePaymentsPage />;
};

export default ManagePayments;
