import AdminReturnCarPage from "@/components/Dashboard/ManageReturnCar/ReturnCarByAdminPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Return Cars - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const AdminReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <AdminReturnCarPage id={id} />;
};

export default AdminReturnCar;
