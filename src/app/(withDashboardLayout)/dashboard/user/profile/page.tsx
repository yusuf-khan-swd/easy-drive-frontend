import ProfilePage from "@/components/Dashboard/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile - EasyDrive",
  description: "A Car Rental Service Provider",
};

const UserProfile = () => {
  return <ProfilePage />;
};

export default UserProfile;
