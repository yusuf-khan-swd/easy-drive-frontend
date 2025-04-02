import CarsPage from "@/components/Common/Car/CarsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Cars - EasyDrive",
  description: "A Car Rental Service Provider",
};

const Car = () => {
  return <CarsPage />;
};

export default Car;
