import RegisterPage from "@/components/Common/Logins/RegisterPage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - EasyDrive",
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const Register = () => {
  return <RegisterPage />;
};

export default Register;
