import { Metadata } from "next";
import UserProfile from "./profile/page";

export const metadata: Metadata = {
  title: "User Profile - EasyDrive",
  description: "A Car Rental Service Provider",
};

const User = () => {
  return <UserProfile />;
};

export default User;
