import HomePage from "@/components/Common/HomePage/HomePage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home - ${METADATA_FOR_MAIN_LAYOUT.title}`,
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const Home = () => {
  return <HomePage />;
};

export default Home;
