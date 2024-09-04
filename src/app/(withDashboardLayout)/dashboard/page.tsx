import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";

const DashboardHome = () => {
  return (
    <div>
      <DashboardDrawer>
        <h1 className="text-4xl font-bold">Welcome to dashboard</h1>
        <ProfilePage />
      </DashboardDrawer>
    </div>
  );
};

export default DashboardHome;
