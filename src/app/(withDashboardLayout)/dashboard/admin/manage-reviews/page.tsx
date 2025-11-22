import AdminManageReviewsPage from "@/components/Dashboard/ManageReviews/AdminManageReviewsPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Reviews - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: "A Car Rental Service Provider",
};

const AdminManageReviews = () => {
  return <AdminManageReviewsPage />;
};

export default AdminManageReviews;
