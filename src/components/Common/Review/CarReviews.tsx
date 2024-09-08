"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import { useCarReviewsQuery } from "@/redux/api/reviewApi";
import { Box, Card, CardContent, Rating, Typography } from "@mui/material";

const CarReviews = ({ carId }: { carId: string }) => {
  const { data, isLoading } = useCarReviewsQuery(carId);
  const reviews = data?.data;

  if (isLoading) return <LoadingSpinner />;

  console.log(data);

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography
        variant="h5"
        fontWeight={600}
        textAlign="center"
        marginBottom={2}
      >
        Car Reviews
      </Typography>
      {reviews && reviews?.length > 0 ? (
        <div>
          {reviews?.map((review: any) => (
            <div key={review?.id}>
              <Card sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {review?.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating
                      name="read-only"
                      value={review?.rating}
                      readOnly
                      sx={{ marginRight: 1 }}
                    />
                    <span>by: {review?.user?.name}</span>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", marginTop: 1 }}
                  >
                    {review?.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No Reviews available</h3>
      )}
    </Box>
  );
};

export default CarReviews;
