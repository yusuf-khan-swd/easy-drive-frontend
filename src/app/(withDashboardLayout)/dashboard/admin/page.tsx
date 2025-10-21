import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Admin Profile - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const AdminDashboard = () => {
  return <ProfilePage />;
};

export default AdminDashboard;
