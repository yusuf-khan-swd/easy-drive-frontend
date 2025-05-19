import OrderPage from "@/components/Dashboard/Order/OrderPage";

const Order = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <OrderPage id={id} />;
};

export default Order;
