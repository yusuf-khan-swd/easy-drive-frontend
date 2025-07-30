import CreateCarPage from "@/components/Dashboard/ManageCars/CreateCarPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Car - EasyDrive",
  description: "A Car Rental Service Provider",
};

const CreateCar = () => {
  return <CreateCarPage />;
};

export default CreateCar;
