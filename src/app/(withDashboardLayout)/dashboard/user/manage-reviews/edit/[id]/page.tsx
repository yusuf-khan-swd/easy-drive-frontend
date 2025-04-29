import UpdateReviewPage from "@/components/Dashboard/ManageReviews/UpdateReviewPage";

const UpdateReview = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return (
    <div>
      <UpdateReviewPage id={id} />
    </div>
  );
};

export default UpdateReview;
