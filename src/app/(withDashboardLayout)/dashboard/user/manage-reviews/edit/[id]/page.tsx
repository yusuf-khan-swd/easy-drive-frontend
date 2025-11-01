import UpdateReviewPage from "@/components/Dashboard/ManageReviews/UpdateReviewPage";
import { METADATA_FOR_DASHBOARD_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Update Reviews - ${METADATA_FOR_DASHBOARD_LAYOUT.title}`,
  description: METADATA_FOR_DASHBOARD_LAYOUT.description,
};

const UpdateReview = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateReviewPage id={id} />;
};

export default UpdateReview;
