import ManageReviewsPage from "@/components/Dashboard/ManageReviews/ManageReviewsPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Manage Reviews - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const ManageReviews = () => {
  return <ManageReviewsPage />;
};

export default ManageReviews;
