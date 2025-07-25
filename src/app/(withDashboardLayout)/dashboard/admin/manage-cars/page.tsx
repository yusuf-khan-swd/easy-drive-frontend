import ManageCarsPage from "@/components/Dashboard/ManageCars/ManageCarsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Cars - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ManageCars = () => {
  return <ManageCarsPage />;
};

export default ManageCars;
