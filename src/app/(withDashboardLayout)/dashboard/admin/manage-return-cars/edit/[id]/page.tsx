import ReturnCarByAdminPage from "@/components/Dashboard/ManageReturnCar/ReturnCarByAdminPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Return Cars - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const ReturnCarByAdmin = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <ReturnCarByAdminPage id={id} />;
};

export default ReturnCarByAdmin;
