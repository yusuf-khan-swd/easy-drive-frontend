import UpdateReviewPage from "@/components/Dashboard/ManageReviews/UpdateReviewPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Reviews - EasyDrive",
  description: "A Car Rental Service Provider",
};

const UpdateReview = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateReviewPage id={id} />;
};

export default UpdateReview;
