import ChangePasswordPage from "@/components/Dashboard/ChangePassword/ChangePasswordPage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Change Password - ${METADATA_FOR_MAIN_LAYOUT.title}`,
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const ChangePassword = () => {
  return <ChangePasswordPage />;
};

export default ChangePassword;
