import OrderPage from "@/components/Dashboard/Order/OrderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Order - EasyDrive",
  description: "A Car Rental Service Provider",
};

const Order = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <OrderPage id={id} />;
};

export default Order;
