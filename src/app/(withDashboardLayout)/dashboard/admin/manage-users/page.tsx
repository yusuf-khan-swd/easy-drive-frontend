import ManageUsersPage from "@/components/Dashboard/ManageUsers/ManageUsersPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Users - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const ManageUsers = () => {
  return <ManageUsersPage />;
};

export default ManageUsers;
