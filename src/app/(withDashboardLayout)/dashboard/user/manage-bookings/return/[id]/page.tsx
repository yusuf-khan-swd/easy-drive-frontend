import ReturnCarPage from "@/components/Dashboard/ReturnCar/ReturnCarPage";

const ReturnCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return (
    <div>
      <ReturnCarPage id={id} />
    </div>
  );
};

export default ReturnCar;
