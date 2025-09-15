import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";

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
