import UpdateCarPage from "@/components/Dashboard/ManageCars/UpdateCarPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Update Car - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const UpdateCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateCarPage id={id} />;
};

export default UpdateCar;
