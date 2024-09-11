"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import {
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
} from "@/redux/api/reviewApi";
import { toast } from "sonner";

import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import EasyDriveSelectField from "@/components/Forms/EasyDriveSelectField";
import { ratingOptions } from "@/constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  rating: z.string().min(1, "Rating is required"),
});

const UpdateReviews = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const router = useRouter();

  const { data, isLoading } = useGetSingleReviewQuery(id || "");
  const [updateReview] = useUpdateReviewMutation();

  const review = data?.data;

  let defaultValues = {
    title: review?.title || "",
    description: review?.description || "",
    rating: review?.rating || "",
  };

  const handleReviewSubmit = async (values: FieldValues) => {
    // console.log(values);
    try {
      const reviewData = {
        ...values,
        rating: Number(values?.rating),
        _id: id,
      };

      const result = await updateReview(reviewData).unwrap();
      console.log({ result });
      if (result?.message) {
        toast.success(result?.message || "Review Update Success!!");
        router.push("/dashboard/user/manage-reviews");
      } else {
        toast.error("Review Update failed");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Review Update failed");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Stack
      sx={{
        marginTop: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
          p: 4,
          // textAlign: "center",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Update Review
            </Typography>
          </Box>
        </Stack>

        <Box>
          <EasyDriveForm
            onSubmit={handleReviewSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={defaultValues}
          >
            <Grid container spacing={2} my={1}>
              <Grid size={{ xs: 12 }}>
                <EasyDriveInput
                  name="title"
                  label="Title"
                  type="text"
                  fullWidth={true}
                />
              </Grid>

              {/* TODO: Add textarea Form input for description */}
              <Grid size={{ xs: 12 }}>
                <EasyDriveInput
                  name="description"
                  label="Description"
                  type="text"
                  fullWidth={true}
                />
              </Grid>

              {/* TODO: Try to implement Controlled Rating Instead of select*/}
              <Grid size={{ xs: 12 }}>
                <EasyDriveSelectField
                  items={ratingOptions}
                  name="rating"
                  label="Rating"
                  fullWidth={true}
                />
              </Grid>
            </Grid>

            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
            >
              Submit
            </Button>
          </EasyDriveForm>
        </Box>
      </Box>
    </Stack>
  );
};

export default UpdateReviews;
