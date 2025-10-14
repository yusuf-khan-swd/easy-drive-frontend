import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dashboard - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const DashboardHome = () => {
  return (
    <>
      <DashboardDrawer>
        <ProfilePage />
      </DashboardDrawer>
    </>
  );
};

export default DashboardHome;
