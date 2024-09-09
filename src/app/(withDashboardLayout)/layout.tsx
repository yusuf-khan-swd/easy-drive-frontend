"use client";

import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return <>{children}</>;
};

export default DashboardLayout;
