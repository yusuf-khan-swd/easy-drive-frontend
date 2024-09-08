"use client";

import EasyDriveForm from "@/components/Forms/EasyDriveForm";
import EasyDriveInput from "@/components/Forms/EasyDriveInput";
import EasyDriveSelectField from "@/components/Forms/EasyDriveSelectField";
import { ratingOptions } from "@/constants/global";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const validationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  rating: z.string().min(1, "Rating is required"),
});

const ReviewForm = ({ carId }: { carId: string }) => {
  const [review] = useCreateReviewMutation();

  const handleReviewSubmit = async (values: FieldValues) => {
    // console.log(values);
    try {
      const reviewData = {
        ...values,
        car: carId,
        rating: Number(values?.rating),
      };

      const result = await review(reviewData).unwrap();
      console.log({ result });
      if (result?.message) {
        toast.success(result?.message || "Review Submit Success!!");
      } else {
        toast.error("Review Submit failed");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Review Submit failed");
    }
  };

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
              Add Review
            </Typography>
          </Box>
        </Stack>

        <Box>
          <EasyDriveForm
            onSubmit={handleReviewSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              title: "",
              description: "",
              rating: "",
            }}
          >
            <Grid container spacing={2} my={1}>
              <Grid size={{ xs: 12 }}>
                <EasyDriveInput
                  name="title"
                  label="Title"
                  type="title"
                  fullWidth={true}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <EasyDriveInput
                  name="description"
                  label="Description"
                  type="description"
                  fullWidth={true}
                />
              </Grid>
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

export default ReviewForm;
