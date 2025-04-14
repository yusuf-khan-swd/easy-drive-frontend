import PaymentStatusPage from "@/components/Common/PaymentStatusPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Status - EasyDrive",
  description: "A Car Rental Service Provider",
};
interface PropTypes {
  searchParams: { status: string };
}

const PaymentStatus = ({ searchParams }: PropTypes) => {
  const status = searchParams.status; // could be success, cancel, failed

  return <PaymentStatusPage status={status} />;
};

export default PaymentStatus;
