import HomePage from "@/components/Common/HomePage/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - EasyDrive",
  description: "A Car Rental Service Provider",
};

const Home = () => {
  return <HomePage />;
};

export default Home;
