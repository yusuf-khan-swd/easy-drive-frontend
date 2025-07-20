import AdminReturnCarPage from "@/components/Dashboard/ManageReturnCar/AdminReturnCarPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Cars - EasyDrive",
  description: "A Car Rental Service Provider",
};

const AdminReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <AdminReturnCarPage id={id} />;
};

export default AdminReturnCar;
