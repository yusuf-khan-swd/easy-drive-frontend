import UpdateUserPage from "@/components/Dashboard/ManageUsers/UpdateUserPage";

const UpdateUser = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateUserPage id={id} />;
};

export default UpdateUser;
