import FeaturedCars from "@/components/Common/HomePage/FeaturedCars";
import HeroSection from "@/components/Common/HomePage/HeroSection/HeroSection";
import Testimonial from "@/components/Common/HomePage/Testimonial";
import WhyUs from "@/components/Common/HomePage/WhyUs";

const HomePage = () => {
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

export default HomePage;
