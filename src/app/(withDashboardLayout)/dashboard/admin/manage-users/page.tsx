import ManageUsersPage from "@/components/Dashboard/ManageUsers/ManageUsersPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Users - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ManageUsers = () => {
  return <ManageUsersPage />;
};

export default ManageUsers;
