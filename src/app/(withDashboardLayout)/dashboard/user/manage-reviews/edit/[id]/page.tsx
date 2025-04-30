import UpdateReviewPage from "@/components/Dashboard/ManageReviews/UpdateReviewPage";

const UpdateReview = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <UpdateReviewPage id={id} />;
};

export default UpdateReview;
