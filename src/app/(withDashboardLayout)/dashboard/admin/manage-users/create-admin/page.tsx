import CreateAdminPage from "@/components/Dashboard/ManageUsers/CreateAdminPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Admin - EasyDrive",
  description: "A Car Rental Service Provider",
};

const CreateAdmin = () => {
  return <CreateAdminPage />;
};

export default CreateAdmin;
