"use client";

import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

// ! After user logged out then token is remove but user is not redirect to login page but unauthorize user can still in dashboard but no data will be shown
// TODO: So have check this above issue out because if user click on logout button it should redirect to '/' root page from Navbar component
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  console.log("isLoggedIn", isLoggedIn());

  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return <>{children}</>;
};

export default DashboardLayout;
