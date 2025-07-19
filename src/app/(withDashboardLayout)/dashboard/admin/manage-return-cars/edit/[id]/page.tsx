import AdminReturnCarPage from "@/components/Dashboard/ManageReturnCar/AdminReturnCarPage";

const AdminReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <AdminReturnCarPage id={id} />;
};

export default AdminReturnCar;
