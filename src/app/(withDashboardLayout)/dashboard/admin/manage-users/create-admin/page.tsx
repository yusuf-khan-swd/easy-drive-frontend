import CreateAdminPage from "@/components/Dashboard/ManageUsers/CreateAdminPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Create Admin - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const CreateAdmin = () => {
  return <CreateAdminPage />;
};

export default CreateAdmin;
