import ManageReturnCarsPage from "@/components/Dashboard/ManageReturnCar/ManageReturnCarsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Return Cars - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ManageReturnCars = () => {
  return <ManageReturnCarsPage />;
};

export default ManageReturnCars;
