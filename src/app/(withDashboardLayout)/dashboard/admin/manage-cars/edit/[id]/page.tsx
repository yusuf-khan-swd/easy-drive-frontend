"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import { useGetSingleCarQuery, useUpdateCarMutation } from "@/redux/api/carApi";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

import MultiSelectChip from "@/components/Forms/MultiSelectChip";
import { featureOptions } from "@/constants/global";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid2";

interface UpdateCarFormData {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  pricePerHour: number;
}

const UpdateCar = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const router = useRouter();

  const { data, isLoading } = useGetSingleCarQuery(id || "");
  const [updateCar] = useUpdateCarMutation();
  const [carFeatures, setCarFeatures] = useState<string[]>([]);

  const car = data?.data;

  const [formData, setFormData] = useState<UpdateCarFormData>({
    name: car?.name || "",
    description: car?.description || "",
    color: car?.color || "",
    isElectric: car?.isElectric || false,
    features: car?.features || [],
    pricePerHour: car?.pricePerHour || 0,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Type narrowing to check if the target is a checkbox
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const { checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.color) newErrors.color = "Color is required.";
    if (!formData.pricePerHour)
      newErrors.pricePerHour = "Price per hour is required.";
    if (!formData.features.length) newErrors.features = "Features is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (validate()) {
        // console.log("Form submitted:", formData);

        const { pricePerHour } = formData;
        const carData = {
          ...formData,
          pricePerHour: Number(pricePerHour),
          features: carFeatures,
          _id: car?._id,
        };

        const result = await updateCar(carData).unwrap();
        toast.success(result?.message || "Car Update Successfully");
        router.push("/dashboard/admin/manage-cars");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(
        error?.data?.message || error?.data?.data || "Car Update failed"
      );
    }
  };

  useEffect(() => {
    if (!isLoading && car) {
      setFormData({
        name: car?.name || "",
        description: car?.description || "",
        color: car?.color || "",
        isElectric: car?.isElectric || false,
        features: car?.features || [],
        pricePerHour: car?.pricePerHour || 0,
      });
      setCarFeatures(car?.features || []);
    }
  }, [isLoading, car]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white border p-8 rounded shadow-md w-full max-w-2xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Update Car</h2>
        <Grid container spacing={2} my={1}>
          {/* Name */}
          <Grid size={{ xs: 12, md: 6 }}>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </Grid>

          {/* Price Per Hour */}
          <Grid size={{ xs: 12, md: 6 }}>
            <label htmlFor="pricePerHour" className="block text-gray-700">
              PricePerHour
            </label>
            <input
              type="number"
              id="pricePerHour"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                errors.pricePerHour ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.pricePerHour && (
              <p className="text-red-500 text-xs">{errors.pricePerHour}</p>
            )}
          </Grid>

          {/* Color */}
          <Grid size={{ xs: 12, md: 6 }}>
            <label htmlFor="color" className="block text-gray-700">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                errors.color ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.color && (
              <p className="text-red-500 text-xs">{errors.color}</p>
            )}
          </Grid>

          {/* Is Electric */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              alignContent: "end",
            }}
          >
            <div className="border border-gray-300 rounded-md shadow-sm">
              <FormGroup sx={{ marginLeft: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isElectric"
                      checked={formData.isElectric}
                      onChange={handleChange}
                    />
                  }
                  label="Electric Car"
                />
              </FormGroup>
            </div>
          </Grid>

          {/* Features */}

          <Grid size={{ xs: 12, md: 12 }}>
            <MultiSelectChip
              selectOptions={featureOptions}
              state={carFeatures}
              setState={setCarFeatures}
            />

            {errors.features && (
              <p className="text-red-500 text-xs">{errors.features}</p>
            )}
          </Grid>

          {/* Description */}
          <Grid size={{ xs: 12, md: 12 }}>
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-xs">{errors.description}</p>
            )}
          </Grid>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
        </Grid>
      </form>
    </div>
  );
};

export default UpdateCar;
