import UpdateUserPage from "@/components/Dashboard/ManageUsers/UpdateUserPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Update User - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const UpdateUser = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateUserPage id={id} />;
};

export default UpdateUser;
