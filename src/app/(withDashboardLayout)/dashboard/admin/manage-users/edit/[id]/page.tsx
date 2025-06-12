import UpdateUserPage from "@/components/Dashboard/ManageUsers/UpdateUserPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update User - EasyDrive",
  description: "A Car Rental Service Provider",
};

const UpdateUser = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateUserPage id={id} />;
};

export default UpdateUser;
