"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import { useGetUserProfileQuery } from "@/redux/api/profileApi";
import { getUserInfo } from "@/services/auth.service";

const ProfilePage = () => {
  const { userId } = getUserInfo();

  const { data, isLoading } = useGetUserProfileQuery(userId);
  const user = data?.data;

  console.log(data);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default ProfilePage;
