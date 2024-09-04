"use client";

import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { role } = getUserInfo() as any;

  if (!isLoggedIn()) {
    return router.push("/login");
  }

  if (role !== USER_ROLE.ADMIN) {
    return router.push(`/dashboard/${role}`);
  }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default AdminLayout;
