import ManageReviewsPage from "@/components/Dashboard/ManageReviews/ManageReviewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Reviews - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ManageReviews = () => {
  return <ManageReviewsPage />;
};

export default ManageReviews;
