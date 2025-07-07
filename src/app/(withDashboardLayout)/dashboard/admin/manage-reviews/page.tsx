import AdminManageReviewsPage from "@/components/Dashboard/ManageReviews/AdminManageReviewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Reviews - EasyDrive",
  description: "A Car Rental Service Provider",
};

const AdminManageReviews = () => {
  return <AdminManageReviewsPage />;
};

export default AdminManageReviews;
