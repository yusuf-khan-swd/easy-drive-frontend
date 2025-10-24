import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `User Profile - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const UserDashboard = () => {
  return <ProfilePage />;
};

export default UserDashboard;
