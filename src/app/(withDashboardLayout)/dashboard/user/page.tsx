import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile - EasyDrive",
  description: "A Car Rental Service Provider",
};

const User = () => {
  return <ProfilePage />;
};

export default User;
