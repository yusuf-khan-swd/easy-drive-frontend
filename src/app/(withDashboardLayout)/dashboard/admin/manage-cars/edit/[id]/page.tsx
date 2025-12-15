import UpdateCarPage from "@/components/Dashboard/ManageCars/UpdateCarPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Car - EasyDrive",
  description: "A Car Rental Service Provider",
};

const UpdateCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateCarPage id={id} />;
};

export default UpdateCar;
