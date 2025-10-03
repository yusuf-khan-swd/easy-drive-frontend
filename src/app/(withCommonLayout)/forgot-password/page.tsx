import ForgotPasswordPage from "@/components/Common/ForgotPasswordPage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Forgot Password - ${METADATA_FOR_MAIN_LAYOUT.title}`,
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const ForgotPassword = () => {
  return <ForgotPasswordPage />;
};

export default ForgotPassword;
