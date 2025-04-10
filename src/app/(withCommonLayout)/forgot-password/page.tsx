import ForgotPasswordPage from "@/components/Common/ForgotPasswordPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ForgotPassword = () => {
  return <ForgotPasswordPage />;
};

export default ForgotPassword;
