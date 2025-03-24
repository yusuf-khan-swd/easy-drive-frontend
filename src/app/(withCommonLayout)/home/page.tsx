import FeaturedCars from "@/components/Common/HomePage/FeaturedCars/FeaturedCars";
import HeroSection from "@/components/Common/HomePage/HeroSection/HeroSection";
import Testimonial from "@/components/Common/HomePage/Testimonial/Testimonial";
import WhyUs from "@/components/Common/HomePage/WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <FeaturedCars />
        <WhyUs />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
