import ChangePasswordPage from "@/components/Dashboard/ChangePassword/ChangePasswordPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ChangePassword = () => {
  return <ChangePasswordPage />;
};

export default ChangePassword;
