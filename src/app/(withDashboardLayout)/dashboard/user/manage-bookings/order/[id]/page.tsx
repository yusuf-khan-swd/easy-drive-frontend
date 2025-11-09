import OrderPage from "@/components/Dashboard/Order/OrderPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Car Order - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const Order = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <OrderPage id={id} />;
};

export default Order;
