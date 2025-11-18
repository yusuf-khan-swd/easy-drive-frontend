import CreateUserPage from "@/components/Dashboard/ManageUsers/CreateUserPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Create User - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const CreateUser = () => {
  return <CreateUserPage />;
};

export default CreateUser;
