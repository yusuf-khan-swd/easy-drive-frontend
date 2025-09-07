import LoginPage from "@/components/Common/Logins/LoginPage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - EasyDrive",
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
