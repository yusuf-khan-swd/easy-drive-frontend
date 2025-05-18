import OrderPage from "@/components/Dashboard/Order/OrderPage";

const Order = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return (
    <div>
      <OrderPage id={id} />
    </div>
  );
};

export default Order;
