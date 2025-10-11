"use client";

import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

// ! After user logged out then token is remove but user is not redirect to login page but unauthorize user can still in dashboard but no data will be shown
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  console.log("isLoggedIn", isLoggedIn());

  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return <>{children}</>;
};

export default DashboardLayout;
