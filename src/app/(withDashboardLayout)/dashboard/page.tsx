import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";

const DashboardHome = () => {
  return (
    <div>
      <DashboardDrawer>
        <ProfilePage />
      </DashboardDrawer>
    </div>
  );
};

export default DashboardHome;
