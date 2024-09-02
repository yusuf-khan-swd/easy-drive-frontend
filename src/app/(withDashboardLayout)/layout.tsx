"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
// import { isLoggedIn } from '@/services/auth.services';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  //  const router = useRouter();
  //  if (!isLoggedIn()) {
  //     return router.push('/login');
  //  }
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
