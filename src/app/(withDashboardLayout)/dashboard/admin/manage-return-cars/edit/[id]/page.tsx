import AdminReturnCarPage from "@/components/Dashboard/ManageReturnCar/AdminReturnCarPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Return Cars - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const AdminReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <AdminReturnCarPage id={id} />;
};

export default AdminReturnCar;
