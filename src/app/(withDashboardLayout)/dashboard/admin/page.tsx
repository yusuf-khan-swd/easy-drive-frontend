import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Profile - EasyDrive",
  description: "A Car Rental Service Provider",
};

const AdminDashboard = () => {
  return <ProfilePage />;
};

export default AdminDashboard;
