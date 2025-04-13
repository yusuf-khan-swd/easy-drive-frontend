import PaymentStatusPage from "@/components/Common/PaymentStatusPage";

interface PropTypes {
  searchParams: { status: string };
}

const PaymentStatus = ({ searchParams }: PropTypes) => {
  const status = searchParams.status; // could be success, cancel, failed

  return <PaymentStatusPage status={status} />;
};

export default PaymentStatus;
