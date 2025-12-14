import UpdateCarPage from "@/components/Dashboard/ManageCars/UpdateCarPage";

const UpdateCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateCarPage id={id} />;
};

export default UpdateCar;
