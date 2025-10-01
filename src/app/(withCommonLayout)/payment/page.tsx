import PaymentStatusPage from "@/components/Common/PaymentStatusPage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Payment Status - ${METADATA_FOR_MAIN_LAYOUT.title}`,
  description: METADATA_FOR_MAIN_LAYOUT.description,
};
interface PropTypes {
  searchParams: { status: string };
}

const PaymentStatus = ({ searchParams }: PropTypes) => {
  const status = searchParams.status; // could be success, cancel, failed

  return <PaymentStatusPage status={status} />;
};

export default PaymentStatus;
