import FeaturedCars from "@/components/UI/HomePage/FeaturedCars/FeaturedCars";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Testimonial from "@/components/UI/HomePage/Testimonial/Testimonial";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";

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
