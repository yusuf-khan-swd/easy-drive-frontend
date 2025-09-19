import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - EasyDrive",
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
