import CarsPage from "@/components/Common/Car/CarsPage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Cars - EasyDrive",
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const Car = () => {
  return <CarsPage />;
};

export default Car;
