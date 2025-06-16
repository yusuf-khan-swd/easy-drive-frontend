import CreateUserPage from "@/components/Dashboard/ManageUsers/CreateUserPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create User - EasyDrive",
  description: "A Car Rental Service Provider",
};

const CreateUser = () => {
  return <CreateUserPage />;
};

export default CreateUser;
